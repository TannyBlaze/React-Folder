import React, { useEffect, useState } from 'react'
import axios from 'axios';

function UseEffect() {
    const URL = "https://api.github.com/users"
    const [data, setData] = useState()
    const getData = () => {
        axios.get(URL).then((res) => {
            console.log(res.data);
            setData(res.data);
        });
    };
    useEffect(() => {
        console.log("useEffect");
        getData();
    }, []);
    
    return (
        <div>
            <button onClick={getData}>Fetch Data</button>
            {data.map((item, index) => (
                <div key={index}>
                    <div>{item.login}</div>
                </div>
            ))}
        </div>
    )
}

export default UseEffect