import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    let url = "https://modularization-k0gy.onrender.com/user/register"
    
    const handleSubmit = () => {
        axios.post(url, {
            email: email,
            password: password
        }).then((res)=> {
            toast(res.data.message)
            if (res.data.message == "Login suceessful") {
                localStorage.setItem('token', res.data.token)
                navigate('/dashboard')
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    // const togglelabel = () => {
    //     document.querySelector('.bg-white').classList.add('form-label')
    // }
    return (
        <div style={{ paddingTop: 150 , paddingLeft: 300 , paddingRight: 300 }}>
            <form className="container">
                <div className="form-outline mb-4">
                    <input type="email" id="form11" className="form-control border border-dark"  onChange={(e)=>{setEmail(e.target.value)}}/>
                    <label className="form-label bg-white"  htmlFor="form11" style={{ marginTop: 1, paddingLeft: 3, paddingRight: 3 }}>Email</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" id="form12" className="form-control border border-dark" onChange={(e) => { setPassword(e.target.value) }} />
                    <label className="form-label bg-white" htmlFor="form12" style={{ marginTop: 1, paddingLeft: 3, paddingRight: 3 }}>Password</label>
                </div>
                <button className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Log In</button>
                <div className="row mb-4">
                    <div className="text-center row d-flex justify-content-center">
                        <div className="col"><Link to={"/ForgotPassword"}>Forgot Password?</Link></div>
                        <div className="col"><Link to={"/SignUp"}>Create Account</Link></div>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default SignIn