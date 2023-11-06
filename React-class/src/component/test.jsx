import React, { useState } from 'react'


function Test() {

    const [email, setEmail] = useState()
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    
    
    return (
        <div>
            <input type="text" placeholder='Email' onChange={(event) => setEmail(event.target.value)} />
            <input type="text" placeholder='Username' onChange={(event) => setUserName(event.target.value)} />
            <input type="text" placeholder='Password' onChange={(event) => setPassword(event.target.value)} />
            <button>Submit</button>
        </div>
    )
}

export default Test