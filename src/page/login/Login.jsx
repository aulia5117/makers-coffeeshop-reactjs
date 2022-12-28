// import React from "react";
// // import { Helmet } from "react-helmet";
// import styles from './login.module.css';

import { useState } from 'react';
import './login.css'

export default function Login() {

const [username, setUserName] = useState();
const [password, setPassword] = useState();

// const navigateLogin = useNavigate()
// const routeChange = () => {
//     let path = '/'
//     navigateLogin(path)
// }

// function signIn() {
//     console.log({username,password});
//     routeChange();
// }

function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    };

const requestOptions = {
       
    method: 'POST',
    headers: {
        'Authorization' : "Basic " + btoa(username + ":" + password)
    },
    redirect: 'follow',
    credential: 'include'

}

const untukLogin = () => {
    fetch("http://127.0.0.1:5000/login", requestOptions)
    .then(response => response.json())
    .then((data) => {
            // console.log(data.message)
            if (data.message === "success" && data.isAdmin === false) {
                setCookie('token', data.token, 1);
                window.location.href = '/'
            } else if(data.message === "success" && data.isAdmin === true) {
                setCookie('token_admin', data.token, 1)
                window.location.href = 'admin/dashboard'
            } else {
                alert("error fetching return")
            }
            // console.log(data.token)
            // signIn();
    })
} 


return (
<div className='body-login'>

    <h2 className='h2-login'>Coffee Shop Login</h2>
        
        {/* Animasi ke Register */}
        <div className="container-login">
            <div className="form-container-login sign-up-container-login">
                <form className='form-login' action="#">
                    <h1 className='h1-login'>Create Account</h1>
                    <input className='input-login' id="registerName" type="text" placeholder="Name" />
                    <input className='input-login' id="registerEmail" type="email" placeholder="Email" />
                    <input className='input-login' id="registerUsername" type="text" placeholder="Username" />
                    <input className='input-login' id="registerPassword" type="password" placeholder="Password" />
                    <button className='button-login' type='button' >Register</button>
                </form>
        </div>
        
        {/* Log in */}
        <div className="form-container-login sign-in-container-login">
            <form className='form-login' action="#">
                <h1 className='h1-login'>Log in</h1>
                <input className='input-login' id="username" type="text" placeholder="Username" onChange={e => setUserName(e.target.value)}/>
                <input className='input-login' id="password" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                <a className='a-login' href="#">Forgot your password?</a>
                <button className='button-login' type='button' onClick={untukLogin}>Log In</button>
            </form>
        </div>
        

        <div className="overlay-container-login">
            <div className="overlay-login">
                <div className="overlay-panel-login overlay-left-login">
                    <h1 className='h1-login'>Sudah punya akun ?</h1>
                    <p className='p-login'>Silahkan tekan tombol "Log in" untuk masuk</p>
                    <button className="button-login ghost" id="signIn">Log In</button>
                </div>

                <div className="overlay-panel-login overlay-right-login">
                    <h1 className='h1-login'>Belum punya akun ?</h1>
                    <p className='p-login'>Silahkan tekan tombol "register" untuk membuat akun</p>
                    <button className="button-login ghost" id="signUp">Register</button>
                </div>
            </div>
        </div>
    </div>
    </div>
    
)
}