
import React from 'react'
import './Main.css'
import { useState } from 'react'
// import axios from 'axios'
const Main = () => {

const [val, setVal] = useState('')
const [weather, setWeather] = useState('')
const [city ,setCity]=useState('')
const [description ,setDescription]=useState('')
const data={
    key:"ba7e76b12cc767b261a2470526bcb5f7",
    city:val
}
const get_weather=async ()=>{
 const result = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=${data.key}`)
    const res = await result.json()
    setWeather(res.main.temp)
    //console.log(weather);
    setCity(res.name)
    setDescription(res.weather[0].description)
    return res
}
const getdetails=(event)=>{
    setVal(event.target.value)

}
    return (
<div>
    <header>
        <h2>What's The Weather Like ?</h2>
    </header>
    <div className="container">
        
        <div className="main">
                <input type="text" value={val} onChange={getdetails} />
                <button className="btn btn-primary" onClick={get_weather}>
                    Submit
                </button >
            
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
