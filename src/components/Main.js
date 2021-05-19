
import React from 'react'
import './Main.css'
import { useState } from 'react'
// import axios from 'axios'
const Main = () => {
   
//    var city="london"
// const data={
//      city:'london',
//      key:"ba7e76b12cc767b261a2470526bcb5f7"

// }
// const  get_weather= async()=>{
   
//     fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=%22metric%22%20or%20%22imperial%22&mode=xml%2C%20html", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-key": "3b79e9b2acmsheaf74568074f5fep10750ejsnc9994d417e37",
//             "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
//         }
//     })
//     .then(response => {
//      console.log( response);  
//     })
//     .catch(err => {
//         console.error(err);
    
//     });

   

const [weather, setWeather] = useState('')
const [city ,setCity]=useState('')
const [description ,setDescription]=useState('')
const getdetails=async ()=>{
 const result = await fetch("http://api.openweathermap.org/data/2.5/weather?q=london&appid=ba7e76b12cc767b261a2470526bcb5f7")
    const res = await result.json()
    setWeather(res.main.temp)
    //console.log(weather);
    setCity(res.name)
    setDescription(res.weather[0].description)
    return res
}
    return (
<div>
    <header>
        <h2>What's The Weather Like ?</h2>
    </header>
    <div className="container">
        
        <div className="main">
            {/* <form action="" >
                <input type="text" value=""/>
                <button className="btn btn-primary" onClick={get_weather}>
                    Submit
                </button >
            </form> */}
            <button onClick={getdetails}>Submit</button>
        </div>
       <div className="result">
           {console.log(weather)}
          <h2>{city}</h2> 
           <h3>{weather}</h3>
           <p>{description}</p>
       </div>
    </div>
 </div>
    )
}

export default Main
