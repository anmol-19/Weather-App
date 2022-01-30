import React, { useState } from  "react"
import "./index.css";
const api={
  key:"a1a99c6befcf899ba9207a5712ca6621",
  Base:"https://api.openweathermap.org/data/2.5/"
}
function App() {

const[query,setQuery]=useState('');
const[weather,setWeather]=useState({});

const search= evt => {
  if(evt.key==="Enter")
  {
    fetch(`${api.Base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(res=>res.json())
    .then(result=>{
      setWeather(result)
      setQuery('');
      console.log(result)
    });
  }
}
  function Datebuilder(){
    let months=["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
    let days=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    let newDate = new Date();
    let day=days[newDate.getDay()];
    let date = newDate.getDate();
    let month = newDate.getMonth() ;
    let year = newDate.getFullYear();
    const newcurrentdate=day+" "+date+ " "+months[month]+" "+year;
    return <p>{newcurrentdate}</p>;
  }
  return (
    <div className={(typeof weather.main!=="undefined") ? ((weather.main.temp > 16) ? 'app warm' :'app'):'app'}>
      <main>
        <div className="search-box">
        <input 
        className="search-bar" 
        type="text" 
        placeholder="Search.." 
        onChange={e=>{setQuery(e.target.value)}} 
        value={query}
        onKeyPress={search}
        >
        </input>
        </div>
        {(typeof weather.main!="undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">
              {weather.name},{weather.sys.country}
              </div>
              <div className="date"><Datebuilder/></div>
            </div>
            <div className="weather-box">
              <div className="temp">{weather.main.temp}°C</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ):('')
        }
        
      </main>
    </div>
  );
}

export default App;
