import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import WeatherCard from './components/WeatherCard'
import axios from 'axios'

function App() {
  let obj = {"location":{"name":"London","region":"City of London, Greater London","country":"United Kingdom","lat":51.52,"lon":-0.11,"tz_id":"Europe/London","localtime_epoch":1676392733,"localtime":"2023-02-14 16:38"},"current":{"last_updated":"2023-02-14 16:30","temp_c":11.0,"temp_f":51.8,"is_day":1,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png"},"wind_mph":2.2,"wind_kph":3.6,"wind_degree":169,"wind_dir":"S","pressure_mb":1029.0,"pressure_in":30.39,"precip_mm":0.0,"precip_in":0.0,"humidity":71,"cloud":0,"feelslike_c":10.4,"feelslike_f":50.8,"uv":4.0},"forecast":{"forecastday":[{"date":"2023-02-14","day":{"maxtemp_c":15.5,"maxtemp_f":59.9,"mintemp_c":4.6,"mintemp_f":40.3,"avgtemp_c":8.7,"avgtemp_f":47.7,"maxwind_mph":4.9,"maxwind_kph":7.9,"totalprecip_mm":0.0,"totalprecip_in":0.0,"totalsnow_cm":0.0,"daily_will_it_rain":0,"daily_chance_of_rain":0,"daily_will_it_snow":0,"daily_chance_of_snow":0,"condition":{"text":"Sunny","icon":"//cdn.weatherapi.com/weather/64x64/day/113.png"},"uv":3.0},"astro":{"sunrise":"07:17 AM","sunset":"05:13 PM","moonrise":"02:21 AM","moonset":"10:20 AM","moon_phase":"Waning Crescent","moon_illumination":"46","is_moon_up":0,"is_sun_up":0},"hour":[{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}}]},{"date":"2023-02-15","day":{"maxtemp_c":13.9,"maxtemp_f":57.0,"mintemp_c":5.5,"mintemp_f":41.9,"avgtemp_c":9.0,"avgtemp_f":48.2,"maxwind_mph":10.7,"maxwind_kph":17.3,"totalprecip_mm":0.0,"totalprecip_in":0.0,"totalsnow_cm":0.0,"daily_will_it_rain":0,"daily_chance_of_rain":0,"daily_will_it_snow":0,"daily_chance_of_snow":0,"condition":{"text":"Partly cloudy","icon":"//cdn.weatherapi.com/weather/64x64/day/116.png"},"uv":3.0},"astro":{"sunrise":"07:15 AM","sunset":"05:15 PM","moonrise":"03:45 AM","moonset":"10:56 AM","moon_phase":"Waning Crescent","moon_illumination":"36","is_moon_up":0,"is_sun_up":0},"hour":[{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}},{"condition":{}}]}]}}
  
  const[users,setUsers]=useState([]);
  const getUsers=()=>{
axios.get("http://api.weatherapi.com/v1/forecast.json?key=3d13f01695304121a59160701231402&q=London&days=2&aqi=no&alerts=no&fbclid=IwAR1SP9poqPENmPcTlae5wiSDPPRfQgDSLWuIGwVW01Ubxmg4CfXw29tR2W4")
.then((res)=>{

  console.log(res.data.forecast.forecastday[0])
  return (
    <>
    <WeatherCard data={res.data.forecast.forecastday[0]} />
    <WeatherCard data={res.data.forecast.forecastday[1]}/>
    </>
  )
})
.catch((err)=>console.log(err));
  }
  getUsers();


    
}

export default App
