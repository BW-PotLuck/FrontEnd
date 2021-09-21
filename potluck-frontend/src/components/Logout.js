import React, {useEffect} from 'react';
import axios from 'axios';
import {axiosWithAuth} from './../helpers/axiosWithAuth';

const Logout = (props) => {
    useEffect(() => {
        axiosWithAuth()
            .post('/logout')
            .then(res => {
                localStorage.removeItem("token");
                localStorage.removeItem("role")
                localStorage.removeItem("username");
                props.history.push("/login");
            }).catch(err => {console.log(err)})
    }, [])
    return (<div>
        <h1>you are logging out</h1>
    </div>)
}

export default Logout;