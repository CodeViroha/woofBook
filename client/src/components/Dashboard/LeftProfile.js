import React from 'react'
import { useNavigate } from 'react-router-dom'

const LeftProfile = ({ user }) => {
    const Navigate = useNavigate();
    return (
        <>
            <img src={`data:image/jpg;base64,${user.dProfile}`} alt="profile pic" height="100" width="100" />
            <h5>{user.dName}</h5>
            <p> {user.dBreed} </p>
            <p> {user.dAge} years old</p>
            <div className="mt-2"> <button className="btn1 btn-dark" 
            onClick={() => {return Navigate(`/user/${user._id}`)}}>View Profile</button> </div>
        </>
    )
}

export default LeftProfile