import { useEffect, useState } from 'react';
import './App.css';

export const App = () => {

  const [coordinates, setCoordinates] = 
    useState ({
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position);
    setCoordinates({
      lat: position.coords.latitude,
      long: position.coord.longitude
    })
    })
  },[])

  return (

    <div className="App">
        <p>
        Latitude: {coordinates.lat}
        Longitude: {coordinates.long}
        </p>
    </div>

  );
}

export default App;
