import axios from 'axios';
import React from 'react'
import Modal from 'react-modal'
Modal.setAppElement("#root");

const RegistrationForm = ({ show, setShow }) => {

    //Submit button event
    const handleSubmit = event => {
        event.preventDefault();

        // Post request to create users
        let form = new FormData(document.getElementById('myForm'));
        axios.post(`https://woof-book.vercel.app/users`, form).then(
            window.alert("Account created successfully!")).catch((error) => {
                console.log(error)
            })
        setShow(false)
    }

    return (
        <Modal
            isOpen={show}
            contentLabel="My dialog" className="bg-dark-1">
            <div className='container blur-card text-center'>
                <h1>Sign Up Form</h1>
                <form id="myForm" onSubmit={handleSubmit}>
                    <div className="d-inline-flex my-3">
                        Email
                        <input type="text" className="form-control mx-5" name="email"></input>

                        Password
                        <input type="password" className="form-control mx-5" name="password"></input>
                    </div>
                    <hr />
                    <h3>User Details</h3>
                    <div className="my-3 py-2 d-inline-flex">
                        Name
                        <input type="text" className="form-control mx-5" name="pName"></input>

                        City
                        <input type="text" className="form-control mx-5" name="pCity"></input>

                        Age
                        <input type="text" className="form-control mx-5" name="pAge"></input>

                        Gender
                        <input type="text" className="form-control mx-5" name="pGender"></input>
                    </div>
                    <div style={{ width: '30%' }} className="container text-center">
                        Profile pic
                        <input type="file" accept='.png,.jpg,.jpeg'
                            className="form-control" name="pProfile" />
                    </div>
                    <hr />
                    <h3>Pet Details</h3>
                    <div className="my-3 py-2 d-inline-flex">
                        Name
                        <input type="text" className="form-control mx-5" name="dName"></input>

                        Age
                        <input type="text" className="form-control mx-5" name="dAge"></input>

                        Breed
                        <input type="text" className="form-control mx-5" name="dBreed"></input>
                    </div>
                    <div style={{ width: '30%' }} className="container text-center">
                        Profile pic
                        <input type="file" accept='.png,.jpg,.jpeg'
                            className="form-control" name="dProfile" />
                    </div>
                    <div className="container text-center">
                        <button type="submit" className="btn btn-success ml-5 my-2 col-3"
                        >Submit</button>
                    </div>
                </form>
                <button className="btn btn-danger" onClick={() => setShow(false)}>Close</button>
            </div>
        </Modal>
    )
}

export default RegistrationForm