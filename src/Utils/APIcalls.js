export const getWeather = async (lat, long) => {

    const baseURL = "http://api.weatherapi.com/v1/forecast.json?";
    const APIkey = process.env.REACT_APP_API_KEY;
    const response = await fetch(`${baseURL}key=${APIkey}&q=${lat},${long}&days=5`);
    if(response.ok) {
        const data = await response.json();
        return await data;
    } else {
        return response.status;
    }

}

export const getWeatherByCity = async (city) => {

    const baseURL = "http://api.weatherapi.com/v1/forecast.json?";
    const APIkey = process.env.REACT_APP_API_KEY;

    const response = await fetch(`${baseURL}key=${APIkey}&q=${city}&days=5`);
    if(response.ok) {
        const data = await response.json();
        return await data;
    } else {
       return response.status;
    }

}