import { useState } from "react";
import Switch from "../../Components/Switch/Switch";
import Button from "../../Components/Button/Button";
import WeatherCard from "../../Components/WeatherCard/WeatherCard";
import "./TodayWeather.scss";

const TodayWeather = ({weatherData, handleClick}) => {

    const [isCelsius, setIsCelsius] = useState(true);

    const toggleTemperature = (e) => {
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
                <Button text="Change location" handleClick={handleClick} />
            </div>
        </section>

    );

}

export default TodayWeather;