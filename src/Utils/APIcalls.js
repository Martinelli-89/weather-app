export const getWeather = async (lat, long) => {

    const baseURL = "http://api.weatherapi.com/v1/forecast.json?";
    const APIkey = "4f9f5b5dd72e427a906150537222912";

    const response = await fetch(`${baseURL}key=${APIkey}&q=${lat},${long}&days=5`);
    if(response.ok) {
        const data = await response.json();
        return await data;
    } else {
        console.log("error:" + response);
    }

}

export const getWeatherByCity = async (city) => {

    const baseURL = "http://api.weatherapi.com/v1/forecast.json?";
    const APIkey = "4f9f5b5dd72e427a906150537222912";

    const response = await fetch(`${baseURL}key=${APIkey}&q=${city}&days=5`);
    if(response.ok) {
        const data = await response.json();
        return await data;
    } else {
        console.log("error:" + response);
    }

}