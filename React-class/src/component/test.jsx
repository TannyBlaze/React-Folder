import React from 'react'
import axios from 'axios'

function Test() {
    let url = "http://localhost:3000/user/register"

    const clickme = () => {
        axios.post(url, { email: "tanimolatoyeseiyiola@gmail.com", username: "Tannyblaze" })
    }
    return (
        <div>
            <button onClick={clickme}>Click</button>
        </div>
    )
}

export default Test