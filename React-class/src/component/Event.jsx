import React, { useState } from 'react'

const Event = () => { 
    const [name, setName] = useState(0)
    const [user,setUser] = useState("")

    const increase = () => {
        setName(name + 1)
    };

    const decrease = () => {
        if (name > 0) {
            setName(name - 1)
        }
    };

    const handleChange = () => { 
        setUser(user)
    }

    return (
        <div>
            <h1>{user}</h1>
            <input type="text" onChange={(event) => setUser(event.target.value)} />
            <button onClick={handleChange}>Change</button>
            <h1>{name}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default Event