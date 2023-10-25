import React, { useState } from 'react'
import axios from 'axios';

function Fetch() {
    const [data, setData] = useState("")
    const [city, setCity] = useState()
    // let endpoint = "https://jsonplaceholder.typicode.com/users";
    // let endpoint2 = "https://api.github.com/users"
    let endpoint3 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0897c04e6c79a34a5cace4f27864df38&units=metric`
    // const fetchData = () => {
    //     axios.get(endpoint).then((res) => {
    //         console.log(res.data);
    //         setData(res.data);
    //     })
    // }
    // const fetchData2 = () => {
    //     axios.get(endpoint2).then((res) => {
    //         console.log(res.data);
    //         setData(res.data);
    //     })
    // }
    const fetchData3 = () => {
        axios.get(endpoint3).then((res) => {
            console.log(res.data);
            setData(res.data);
        })
        // if (data) {
        //     cityName.innerHTML = `${data.name}`;
        //     temperature.innerHTML = `Temperature: ${Math.round(data.main.temp)}°C`;
        //     humidity.innerHTML = `Humidity: ${data.main.humidity}`;
        //     pressure.innerHTML = `Pressure: ${data.main.pressure}`;
        //     windspeed.innerHTML = `Wind Speed: ${data.wind.speed}`;
        //     lattitude.innerHTML = `Lattitude: ${data.coord.lat}`;
        //     longitude.innerHTML = `Longitude: ${data.coord.lon}`;
        //     country.innerHTML = `Country: ${data.sys.country}`;
        //     weather.innerHTML = `Weather: ${data.weather[0].main}`;
        //     weatherDescription.innerHTML = `Weather Description: ${data.weather[0].description}`;
        // }
    }
    

    return (
        <div>
            <input type="text" id="inp" onChange={(event) => { setCity(event.target.value) }}/>
            <button onClick={fetchData3}>Fetch Data3</button>
            <div>
                <div>{data.name}</div>
                <div>{data.main?.temp}</div>
                <div>{data.main?.humidity}</div>
                <div>{data.main?.pressure}</div>
                <div>{data.wind?.speed}</div>
                <div>{data.coord?.lat}</div>
                <div>{data.coord?.lon}</div>
                <div>{data.sys?.country}</div>
            </div>
            {/* {
                data.map((item, index) => (
                    <div key={index}>
                        <p>{item.name}</p>
                        <p></p>
                    </div>
                ))
            } */}
        </div>
    )
}

export default Fetch