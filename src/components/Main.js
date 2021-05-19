
import React from 'react'
import './Main.css'
import { useState} from 'react'
// import axios from 'axios'
const Main = () => {
    // useEffect(()=>{
        
    //     get_weather()
    // })

const [val, setVal] = useState('london')
const [weather, setWeather] = useState('')
const [city ,setCity]=useState()
const [description ,setDescription]=useState('')
const [icon ,setIcon]=useState('')
const data={
    key:process.env.REACT_APP_WEATHER_KEY,
    city:val
}

const get_weather=async ()=>{
try{
    const result = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${data.city}&appid=${data.key}`)
    const res = await result.json()
    setWeather(res.main.temp)
    
    setCity(res.name)
    setDescription(res.weather[0].description)
    setIcon(res.weather[0].icon)
}
 catch{
     alert('Not Found')
 }   
 
    
}
// const getdetails=(event)=>{
//     event.preventDefault();
//     setVal(event.target.value)

// }
    return (
<div>
    <header>
        <h2>What's The Weather Like ?</h2>
    </header>
    <div className="container">
        
        <div className="main">
                <input type="text" value={val} onChange={(event)=>setVal(event.target.value) } />
                <button className="btn btn-primary" onClick={get_weather}>
                    Submit
                </button >
            
        </div>
       <div className="result">
           
          <h2>{city}</h2> 
           <h3>{weather}</h3>
           <p>{description}</p>
           <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
       </div>
    </div>
 </div>
    )
}

export default Main
