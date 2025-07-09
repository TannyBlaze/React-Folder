import React, { useState } from 'react'
import axios from 'axios'
import { toast } from "react-toastify"
import { Link } from "react-router-dom";

function SignUp() {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [allUsers, setAllUsers] = useState([])

    const add = () => {
        let obj = {

        }
        setAllUsers({...allUsers, obj})
    };
    let url = "https://modularization-k0gy.onrender.com/user/register"

    const clickme = () => {
        axios.post(url, {
            email: email,
            userName: username,
            password: password
        }).then((response) => {
            console.log(response);
            toast(response.data.message)
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div style={{ paddingTop: 100, paddingLeft: 300, paddingRight: 300 }}>
            <form className="container">
                <div className="form-outline mb-4">
                    <input type="email" id="form11" className="form-control" onChange={(event) => setEmail(event.target.value)} />
                    <label className="form-label" htmlFor="form11">Email</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="text" id="form12" className="form-control" onChange={(event) => setUsername(event.target.value)} />
                    <label className="form-label" htmlFor="form12">Username</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" id="form13" className="form-control" onChange={(event) => setPassword(event.target.value)} />
                    <label className="form-label" htmlFor="form13">Password</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" id="form14" className="form-control"/>
                    <label className="form-label" htmlFor="form14">Confirm Password</label>
                </div>
                {/* <button className="btn" onClick={add}>Create Account</button> */}
                <div className="row mb-4">
                    <div className="text-center row d-flex justify-content-center">
                        <div className="col">Already have an account?<Link to={"/SignIn"}>Sign In</Link></div>
                    </div>
                </div>
                <button className="btn btn-primary btn-block" onClick={clickme}>Create Account</button>
            </form>
            <table id='me' className='tab'>
                
            </table>
        </div>
    )
}

export default SignUp