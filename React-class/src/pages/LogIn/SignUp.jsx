import React, { useState } from 'react'

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

    return (
        <div>
            <form className="container">
                <h1 className="h1">Sign Up</h1>
                <input type="email" placeholder="Email" className="inp" onChange={(event) => setEmail(event.target.value)} /><br></br>
                <input type="text" placeholder="Username" className="inp" onChange={(event) => setUsername(event.target.value)} /><br></br>
                <input type="password" placeholder="Password" className="inp" onChange={(event) => setPassword(event.target.value)} /><br></br>
                <input type="password" placeholder="Confirm Password" className="inp"></input><br></br>
                <button className="btn" onClick={add}>Create Account</button>
                <p>Already have an account? <a href="">Sign In</a></p>
            </form>
            <table id='me' className='tab'>
                <tr>
                    <th></th>
                </tr>
            </table>
        </div>
    )
}

export default SignUp