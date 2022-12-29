import { useState } from 'react';
import Button from './Components/Button/Button';
import './App.scss';

export const App = () => {

  const [coordinates, setCoordinates] = useState(null);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
    setCoordinates({
      lat: position.coords.latitude,
      long: position.coords.longitude
    })
    console.log(coordinates);
    }, (error) => {
      console.log(error);
    })
  }

  return (

    <div className="app">
        <section className='app__top'></section>
        <section className='app__bottom'>
          {!coordinates && <Button text={"Use current location"} handleClick={getCurrentLocation}/>}
          {!coordinates && <Button text={"Search location"} />}
        </section>
    </div>

  );
}

export default App;
