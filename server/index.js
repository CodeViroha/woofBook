const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();
const url = "mongodb+srv://Vivek:Vivek123@woof.rtqxn.mongodb.net/Woof?directConnection=true"

app.use(express.json());
app.use(cors());
app.use(fileUpload());

function base64_encode(file) {
    return new Buffer.from(file).toString('base64');
}

mongoClient.connect(url, function (err, db) {
    if (err) {
        console.log(err, "Error!");
    }
    else {
        myDB = db.db("Woof");
        app.listen(3001);
        console.log("Connected!!");
    }
});

app.get('/users', (req, res) => {
    if(req.query._id !== undefined){
        req.query = {_id: Number(req.query._id)}
    }
    myDB.collection('users').find(req.query).toArray( (err, response) => {
        res.send(response);
    });
});

app.get('/posts', (req, res) => {
    myDB.collection('posts').find(req.query).toArray(function (err, response) {
        res.send(response.sort(function(a,b){
            return new Date(b.created_date) - new Date(a.created_date);
          }));
    });
});

app.post('/users', (req, res) => {
    myDB.collection('users').count({}, function (err, response) {
        reqBody = {
            ...req.body,
            _id: response + 1,
            pProfile: base64_encode(req.files.pProfile.data),
            dProfile: base64_encode(req.files.dProfile.data)
        }

        myDB.collection('users').insertOne(reqBody, () => {
            res.send("Inserted");
        })
    })
})

app.post('/posts', (req, res) => {
    myDB.collection('posts').count({}, function (err, response) {
        reqBody = {
            ...req.body,
            _id: response + 1,
            created_date: new Date(),
            userId: Number(req.body.userId),
            likes: 0,
            data: req.body.type === 'image'? base64_encode(req.files.data.data) : req.body.data
        }
        myDB.collection('posts').insertOne(reqBody, (val) => {
            res.send("Inserted");
        })
    })
})

app.patch('/posts/:id',(req, res)=>{
    var id = Number(req.params.id);
    myDB.collection('posts').updateOne({_id: id}, {
        $set: req.body
    })
})

module.exports = app;