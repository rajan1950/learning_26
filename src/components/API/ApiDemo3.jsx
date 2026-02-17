import axios from 'axios';
import React from 'react'
import { useState } from 'react';


export const ApiDemo3 = () => {

    const [comments, setComments] = useState([])


    const getComments = async () => {

        const response = await axios.get("https://dummyjson.com/comments")

        console.log(response.data);
        console.log(response.data.comments);
        setComments(response.data.comments);

    }


    return (
        <div style={{ textAlign: "center" }}>
            <h1>ApiDemo3</h1>
            <button onClick={getComments}>Get Comments</button>
            <p>Comments : {comments.length}</p>

            <table className='table-danger table' >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>USER ID</th>
                        <th>USER NAME </th>
                        <th>FULL NAME</th>
                        <th>Post Id</th>
                        <th>Comment</th>
                        <th>Likes</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        comments.map((comment) => {
                            return <tr key={comment.id}>
                                <td>{comment.id}</td>
                                <td>{comment.user.id}</td>
                                <td>{comment.user.username}</td>
                                <td>{comment.user.fullName}</td>
                                 <td>{comment.postId}</td>
                                <td>{comment.body}</td>
                                <td>{comment.likes}</td>

                            </tr>
                        }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
