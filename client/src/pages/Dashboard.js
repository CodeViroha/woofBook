import React, { useEffect, useState } from 'react'
import NewsFeed from '../components/Dashboard/NewsFeed'
import LeftProfile from '../components/Dashboard/LeftProfile'
import RightSide from '../components/Dashboard/RightSide'
import axios from 'axios'

const Dashboard = ({ user }) => {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])

  //Getting Posts data and Users data
  useEffect(() => {
    axios.get('https://woof-book.vercel.app/posts').then((response) => {
      setPosts(response.data)
    });
    axios.get('https://woof-book.vercel.app/users').then((response) => {
      setUsers(response.data)
    });
  }, [setPosts, setUsers])

  return (
    <>
      <div className="blur-card sidebar text-center blur-card my-5" >
        <LeftProfile user={user} />
      </div>

      <div className="blur-card" style={{ marginLeft: '15vw', marginRight: '10vw' }}>
        <NewsFeed posts={posts} users={users} id={user._id} setPosts={setPosts} />
      </div>

      <div className=" blur-card sidebar-right my-5" >
        <RightSide user={user} users={users.filter(temp => temp.dBreed === user.dBreed && temp._id !== user._id)} />
      </div>

    </>
  )
}

export default Dashboard