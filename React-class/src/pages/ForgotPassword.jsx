import React from 'react'
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    return (
        <div style={{ paddingTop: 100, paddingLeft: 300, paddingRight: 300 }}>
            <form className="container">
                <div className="form-outline mb-4">
                    <input type="email" id="form11" className="form-control" />
                    <label className="form-label" htmlFor="form11">New Password</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="text" id="form12" className="form-control" />
                    <label className="form-label" htmlFor="form12">Confirm Password</label>
                </div>
                <Link to={"/SignUp"}><button className="btn btn-primary btn-block">Change Password</button></Link>
            </form>
        </div>
    )
}

export default ForgotPassword