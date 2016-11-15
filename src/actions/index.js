import axios from 'axios';

const API_KEY = '2b76d680bc3d595d0d890976b809fd1d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('Request:', reguest)

    return{
      type: FETCH_WEATHER,
      payload: request
    };
}