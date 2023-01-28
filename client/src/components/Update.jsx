import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate, Link, useParams} from 'react-router-dom'
import { useEffect } from 'react'


const Update = () => {

    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])

    const {id} = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
        .then((res) => {
            console.log("This is my get request data:", res.data)
            const author = res.data
            setName(author.name)
        })
        .catch(err=>console.log(err))
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault()
        const authorObj = {name}
        axios.put(`http://localhost:8000/api/author/${id}`, authorObj)
        .then(res => {
            navigate('/')
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })      .catch(err=>console.log(err))
        }  

    return (
        <div>
            <h1>Update an Author</h1>
            <form onSubmit={submitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e)=> {setName(e.target.value)}}/>
                </div>
                <button type='submit'>Update</button>
            </form>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Update