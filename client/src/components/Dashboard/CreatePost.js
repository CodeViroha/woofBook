import React, { useState } from 'react'
import axios from 'axios'

const CreatePost = ({ id, setPosts }) => {
    const [data, setData] = useState({
        data: '',
        type: 'heading',
        userId: id,
    })

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setData({ ...data, data: e.target.files[0] })
        }
        else {
            setData({ ...data, data: e.target.value })
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("type", data.type)
        formData.append("userId", data.userId)
        formData.append("data", data.data)

        axios.post('https://woof-book.vercel.app/posts', formData).then(axios.get('https://woof-book.vercel.app/posts')
            .then(response => setPosts(response.data))).catch(err => { console.log(err) })
    }
    return (
        <>

            {data.type === 'heading' ? <h3>Select type of data to post</h3> :
                <form className="container" >
                    {data.type === 'text' ?
                        <input type="textarea" className="form-control" onChange={handleChange}
                            placeholder="What's on your mind" /> :
                        data.type === 'image' ?
                            <input type="file" accept=".png,.jpg,.jpeg" onChange={handleChange}
                                name="image" className="btn" /> :
                            <input type="text" className="form-control" onChange={handleChange}
                                placeholder="Enter Link" />}
                    <button className="btn btn-success" type="submit" onClick={handleSubmit}>Post</button>
                </form>
            }


            <div className="d-inline">
                <button className="btn" onClick={() => setData({ ...data, type: 'text' })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                    </svg>
                </button>
                <button className="btn" onClick={() => setData({ ...data, type: 'image' })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-camera-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
                    </svg>
                </button>
                <button className="btn" onClick={() => setData({ ...data, type: 'link' })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link" viewBox="0 0 16 16">
                        <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                        <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                    </svg>
                </button>
            </div>
        </>
    )
}

export default CreatePost