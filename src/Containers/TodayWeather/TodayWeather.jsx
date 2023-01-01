import { useState } from "react";
import Switch from "../../Components/Switch/Switch";
import WeatherCard from "../../Components/WeatherCard/WeatherCard";
import "./TodayWeather.scss";

const TodayWeather = ({weatherData}) => {

    const [isCelsius, setIsCelsius] = useState(true);

    const toggleTemperature = (e) => {
        console.log(e.target);
        console.log(e.target.classList.contains("active"));
        if(!e.target.classList.contains("active")) {
            setIsCelsius(!isCelsius);
        }
    }

    return (

        <section className="today">
            <div className="today__day">
                <WeatherCard dayWeather={weatherData.forecast.forecastday[0]} isCelsius={isCelsius} />
                <WeatherCard dayWeather={weatherData.forecast.forecastday[1]} isCelsius={isCelsius} />
                <WeatherCard dayWeather={weatherData.forecast.forecastday[2]} isCelsius={isCelsius} />
            </div>
            <div className="today__options">
                <Switch isCelsius={isCelsius} toggleTemperature={toggleTemperature}/>
            </div>
        </section>

    );

}

export default TodayWeather;