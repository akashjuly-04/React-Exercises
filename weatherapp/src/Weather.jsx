import React,{use, useState} from 'react'
import axios from 'axios'

const Weather = () => {
   const [city, setCity]=useState("");
   const [weather,setWeather]=useState(null);
   const API_KEY="fc0e5bf5e4eb5d83cf558d49c6563aed";

   const fetchWeather=async ()=>{
    if(!city) return;
    
    try{
        const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        console.log(response.data)
        setWeather(response.data)
    }catch(error){
        alert("City Not Found!")
        setWeather(null);
    }
   }

  return (
    <div className='flex flex-col items-center p-4 bg-gray-100 min0h-screen'>
        <h1 className="text-2xl font-bold mb-4">Weather App</h1>
        <input 
            type="text"
            placeholder='Enter the City Name'
            value={city}
            onChange={(e)=>setCity(e.target.value)}
            className='p-2 border rounded-lg'
        />
        <button 
            onClick={fetchWeather}
            className='bg-blue-500 text-white px-4 py-2 rounded mt-2'
        >
                Get Weather
        </button>

            {weather && (
                <div className='mt-4 p-4 bg-white rounded-lg shadow-md'>
                    <h2 className='text-xl font-semifold'>{weather.name}</h2>
                    <p>Temparature:{weather.main.temp}°C</p>
                    <p>Weather:{weather.weather[0].description}</p>
                    <p>Humidity:{weather.main.humidity}%</p>
                    <p>Wind: {weather.wind.speed}</p>
                </div>
            )}
    </div>
  )
}

export default Weather