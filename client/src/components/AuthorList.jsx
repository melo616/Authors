import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const AuthorList = () => {
    const [authorList, setAuthorList] = useState([])

    const [deleteToggle, setDeleteToggle] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then((res) => {
            setAuthorList(res.data)
        })
        .catch((err) => {console.log('This is my error', err)})
    }, [deleteToggle])

    const deleteHandler = (e, id) => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
        .then((res) => {
            setDeleteToggle(!deleteToggle)
        })
        .catch((err) => console.log(err))
    }

    return (
        <div>
            <h1>Favorite Authors</h1>
            <Link to="/create">Add an Author</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authorList.map((author, i) => {
                            return (
                                <tr key={i}>
                                    <td>{author.name}</td>
                                    <td>
                                        <button><Link to={`/update/${author._id}`}>Edit</Link></button> | 
                                    <button onClick={(e) => {deleteHandler(e, author._id)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList