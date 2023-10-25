import React from 'react'

function SignIn() {
    return (
        <div>
            <form className="container">
                <h1 className='Sih1'>Sign In</h1>
                <input type="email" placeholder="Email" className='Siinp'></input><br></br>
                <input type="password" placeholder="Password" className='Siinp'></input><br></br>
                <div class="form-outline">
                    <input type="email" id="typeEmail" class="form-control" />
                    <label class="form-label" for="typeEmail">Email</label>
                </div>
                <button className="btn">Log In</button><br></br>
                <a href="">Forgot Password?</a>
                <a href="">Create Account</a>
            </form>
        </div>

    )
}

export default SignIn