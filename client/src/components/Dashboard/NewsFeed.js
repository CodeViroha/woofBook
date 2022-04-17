import React from 'react'
import CreatePost from './CreatePost'
import Posts from './Posts'

const NewsFeed = ({ posts, users, id, setPosts }) => {

    return (
        <>
            <CreatePost id={id} setPosts={setPosts} />
            {users.length > 0 && posts.length > 0 ?
                posts.map(post => {
                    return <Posts post={post} setPosts={setPosts}
                        user={users.filter(user => user._id === post.userId)} />
                }) : <h3>No Posts yet</h3>}

        </>
    )
}

export default NewsFeed