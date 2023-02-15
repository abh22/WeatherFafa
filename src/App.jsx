import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import WeatherCard from './components/WeatherCard'
import axios from 'axios'

function App() {
  useEffect(()=>{
    let url = "http://api.weatherapi.com/v1/forecast.json?key=3d13f01695304121a59160701231402&q=London&days=7&aqi=no&alerts=no&fbclid=IwAR1SP9poqPENmPcTlae5wiSDPPRfQgDSLWuIGwVW01Ubxmg4CfXw29tR2W4"
    axios.get(url,{
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    })
    .then(res=>{
    console.log(res.data)
      setData(res.data)
    })
      .catch(err=>console.log(err))
  },[])
  const[data,setData]=useState({});

  return(
    <>
    {data.forecast ? data.forecast.forecastday.map((day,index)=>{
      return <WeatherCard key={index} data={day}/>
    }) : null}
    </>
  )



    
}

export default App
