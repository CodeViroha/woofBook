import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

//When user clicks on link to view profile
const ViewProfile = () => {
    const id = useParams().id;
    const [user, setUser] = useState([]);
    const Navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://woof-book.vercel.app/users?_id=${id}`).then(response =>
            setUser(response.data[0]))
    }, [id])

    return (
        <div className="container my-5 text-center blur-card justify-content-center">
            {user.length !== 0 ?
                <>
                    <button className="btn float-left" onClick={() => { return Navigate('/dashboard') }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
                            className="bi bi-house-heart-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L8 2.207l6.646 6.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                            <path fillRule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Zm0 5.189c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018Z" />
                        </svg>
                    </button>
                    <h3>Profile for {user.pName} and {user.dName}</h3>

                    <hr />
                    <img src={`data:image/jpg;base64,${user.pProfile}`} className="postImage" alt="Parent pic" />
                    <h3>{user.pName}</h3>
                    <div className="d-inline-flex">
                        <p className="mx-5 px-5">From <span style={{ fontWeight: 'bold' }}>{user.pCity}</span></p>
                        <p className="mx-5 px-5">Age <span style={{ fontWeight: 'bold' }}>{user.pAge}</span></p>
                        <p className="mx-5 px-5">Gender <span style={{ fontWeight: 'bold' }}>{user.pGender}</span></p>
                    </div>
                    <hr />
                    <img src={`data:image/jpg;base64,${user.dProfile}`} className="postImage" alt="Dog pic" />
                    <h3>{user.dName}</h3>
                    <div className="d-inline-flex">
                        <p className="mx-5 px-5">Breed <span style={{ fontWeight: 'bold' }}>{user.dBreed}</span></p>
                        <p className="mx-5 px-5">Age <span style={{ fontWeight: 'bold' }}>{user.dAge}</span></p>
                    </div>
                </> : <h1>Couldn't find Profile</h1>
            }
        </div>
    )
}

export default ViewProfile