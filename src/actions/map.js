import * as types from '../constants';
import api from '../api';

/**
 * function to get the city details on type
 * @param {String} str - typeahead typed data
 */
export function onCityType(str) {
  return {
    types: [types.ON_TYPE_CITY, types.ON_TYPE_CITY_SUCCESS, types.ON_TYPE_CITY_FAIL],
    payload: {
      response: api.getCity(str)
    }
  }
}
/**
 * function to get the weather data
 * @param {String} city - City name / city Id
 */
export function getWeather(city) {
  return {
    types: [types.ON_CITY_DATA, types.ON_CITY_DATA_SUCCESS, types.ON_CITY_DATA_FAIL],
    payload: {
      response: api.getWeather(city),
      city
    }
  }
}

/**
 * function to remove the city
 * @param {String} city
 */

export function removeCity(city) {
  return {
    type: types.ON_CITY_REMOVE,
    payload: {
      city
    }
  }
}
