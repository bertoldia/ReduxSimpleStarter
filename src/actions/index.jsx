// @format

import axios from 'axios';

export const FETCH_WEATHER = 'FETCH_WEATHER';

const API_KEY = '92ccfc5057045190c4eba1203bd7e885';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ca`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
}
