import React from 'react'
import { useNavigate } from 'react-router-dom';

const RightSide = ({ users }) => {
  const Navigate = useNavigate();
  return (
    <>
      {users.length !== 0 ?
        <>
          <h5>Other Parents with same Breed</h5>
          {users.map((user) => {
            return <div className="card d-inline-flex" key={user._id}>
              <button className="btn"
                        onClick={() => { return Navigate(`/user/${user._id}`) }}>{user.pName}</button>
              <p>&nbsp;from {user.pCity}</p>
            </div>
          })}
        </> :
        <h1>No Parents with same breed</h1>
      }

    </>
  )
}

export default RightSide