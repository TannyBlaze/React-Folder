import React, { useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

function SignIn() {
    let url = "http://localhost:3000/user/register"
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
    const handleSubmit = () => {
        axios.post(url, {
            email: email,
            password: password
        }).then((res)=> {
            console.log(res.data)
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
                <Link to={"/Dashboard"}><button className="btn btn-primary btn-block mb-4" onClick={handleSubmit}>Log In</button></Link>
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