import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router';

const initialState = {
    username: "",
    password: ""
}

const Login = () => {
    const [formValues, setFormValues] = useState(initialState)
    const {push} = useHistory();

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormValues({
            ...formValues
        })
        axios.post("https://backend-potluck.herokuapp.com/api/auth/login", formValues)
            .then(res => {
                console.log(res)
                //localStorage.setItem("token", res.data.payload)
                push('/potluck')
            }).catch(err => {console.log(err.response.data)})
    }
    return (
        <div>
            <h1>Please log in</h1>
            <form onSubmit={handleSubmit}>
                <label>username: </label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    value={formValues.username}
                    onChange={handleChange}
                />
                <label>password: </label>
                <input 
                    id="password"
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                />
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Login;
