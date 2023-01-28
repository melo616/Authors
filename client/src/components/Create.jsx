import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'


const Create = () => {

    const [name, setName] = useState("")
    //This creates an array to store errors from the API
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        const authorObj = {name}
        //send a post request to API to create
        axios.post(`http://localhost:8000/api/authors`, authorObj)
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
        })      
        }  

    return (
        <div>
            <h1>Add an Author</h1>
            <form onSubmit={submitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div>
                    <label>Name</label>
                    <input type="text" onChange={(e)=> {setName(e.target.value)}}/>
                </div>
                <button type='submit'>Submit</button>
            </form>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Create

//Data flow: from create page, frontend routes, to backend routes, to controller, to mongodb, to controller, to client