import React, {useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router';

const initialState = {
    email: "",
    name: "",
    username: "",
    password: ""
}

const Register = () => {
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
        axios
          .post("https://backend-potluck.herokuapp.com/api/auth/register", formValues)
          .then(res => {
            push('/potluck')
          })
          .catch(err => {console.log(err.response.data)})
    }
    return (
        <div>
            <h1>Please register</h1>
            <form onSubmit={handleSubmit}>
            <label>Email: </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                />
                <label>First name: </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                />
                <label>Username: </label>
                <input
                    id="username"
                    type="text"
                    name="username"
                    value={formValues.username}
                    onChange={handleChange}
                />
                <label>Password: </label>
                <input 
                    id="password"
                    type="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleChange}
                />
                <input type="submit" value="Register!" />
            </form>
        </div>
    )
}

export default Register;
