import { useEffect, useState } from 'react';
import { getWeather, getWeatherByCity } from './Utils/APIcalls';
import Button from './Components/Button/Button';
import TodayWeather from './Containers/TodayWeather/TodayWeather';
import Modal from "./Components/Modal/Modal";
import './App.scss';

export const App = () => {

  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if(weather != null) {
      setLoading();
    }
  },[weather])

  const handleLoading = () => {
    setLoading(!loading);
  }

  const getCurrentLocation = () => {
    handleLoading();
    navigator.geolocation.getCurrentPosition(async (position) => {
    setWeather(await getWeather(position.coords.latitude,position.coords.longitude));
    }, (error) => {
      setError("There was an error in accessing your location.")
    });
  }

  const searchLocation = async (city) => {

    setWeather(await getWeatherByCity(city));
    loadModal();

  }

  const loadModal = () => {
    setModal(!modal)
  }

  return (

    <div className="app">
        <section className='app__top'>
          {!error && !loading && !weather && <p className='app__name'>WEATHER  APP</p>}
          {error && <p className='app__name'>>{error}</p>}
          {loading && <p className='app__name'>Searching...</p>}
          {weather && <p className='app__location'>{weather.location.name.toUpperCase()}</p>}
        </section>
        <section className='app__bottom'>
          {!weather && <Button text={"Use current location"} handleClick={getCurrentLocation}/>}
          {!weather && <Button text={"Search location"} handleClick={loadModal}/>}
          {weather && <TodayWeather weatherData={weather} />}
        </section>
        {modal && <Modal content={"search"} searchLocation={searchLocation} close={loadModal}/>}
    </div>

  );
}

export default App;
