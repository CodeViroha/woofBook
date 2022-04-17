import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({ setUser }) => {
    const Navigate = useNavigate();
    const [data, setData] = useState({
        "email": "",
        "password": ""
    })

    //Validation logic for login
    const loginValidator = (e) => {
        e.preventDefault();
        axios.get(`https://woof-book.vercel.app/users?email=${data.email}&password=${data.password}`).then(
            response => {
                if (response.data.length > 0) {
                        setUser({ ...response.data[0], valid: true });
                        return Navigate('/dashboard')                    
                }
                else {
                    document.getElementById('result').innerHTML = "Invalid Username/Password!"
                }
            }).catch(error => {
                console.log(error)
            })
    }

    //Update login data
    const handleChange = (e) => {
        setData({
            ...data, [e.target.name]: e.target.value
        })
    }
    return (

        <form className="text-center">
            <div className="form-floating mb-3">
                <label htmlFor="floatingInput">Email address</label>
                <input type="email" className="form-control" name="email"
                    onChange={handleChange}
                    placeholder="name@example.com" />
            </div>
            <div className="form-floating mt-3">
                <label htmlFor="floatingPassword">Password</label>
                <input type="password" className="form-control" name="password"
                    onChange={handleChange}
                    placeholder="Password" />
            </div>
            <div className="d-grid pt-4">
                <button className="btn btn-success text-uppercase fw-bold"
                    onClick={loginValidator}>Sign
                    in</button>
                <pre className="text-center pt-3 h4 text-danger" id="result"></pre>
            </div>
        </form>

    )
}

export default LoginForm