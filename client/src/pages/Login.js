import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegistrationForm from '../components/RegistrationForm'

//Initial Login Page
const Login = ({ setUser }) => {
    const [show, setShow] = useState(false)
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 blur-card shadow rounded-3 my-5">
                        <div className="card-body  p-4 p-sm-5 ">
                            <h1 className="card-title text-center mb-5 fw-light fs-5">Welcome to Woofbook! 🐶</h1>
                            <LoginForm setUser={setUser} />
                            <h6>Not a member? &nbsp;
                                <button className="btn btn-primary" onClick={() => setShow(true)}>Register Now
                                </button></h6>
                            <RegistrationForm show={show} setShow={setShow} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login