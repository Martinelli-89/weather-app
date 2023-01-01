import Temperature from "../Temperature/Temperature";
import getDayFromDate from "../../Utils/dates";
import "./WeatherCard.scss";

const WeatherCard = ({dayWeather, isCelsius}) => {

    return (

        <section className="card">
            <p className="card__day">{getDayFromDate(dayWeather.date)}</p>
            <img  className="card__weather" src={dayWeather.day.condition.icon} alt="weather icon" />
            <div className="card__temp">
                <Temperature isCelsius={isCelsius} celsius={dayWeather.day.avgtemp_c} fahrenheit={dayWeather.day.avgtemp_f} />
            </div>
        </section>

    )

}

export default WeatherCard;