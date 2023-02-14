import React from 'react'
import './card.css' 

export default function WeatherCard(props) {
    let icon=props.data.day.condition.icon
    let iconText=props.data.day.condition.text
    console.log(props.data)

  return (
    <div className='container'>
        <div className='header'>
            <p>{props.data.date}</p>
            <img src={icon} alt={iconText} />
        </div>

        <div className="temps">
        <p>Max temp: {props.data.day.maxtemp_c}</p>
        <p>Min temp: {props.data.day.mintemp_c}</p>
        </div>
        
        

    </div>
  )
}
