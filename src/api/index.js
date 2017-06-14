/**
 * list of api function which will return the promise
 * for simplicity splitted into two different function, incase itwill be same function
 * with different query parameters
 */
import request from 'request-promise';

const utils = {
  /**
   * function to handle the call to get the city lists
   * @param {String} str
   * @return {Promise}
   */
  getCity: (str) => {
    return request({
      url: 'http://localhost:3000' + '/api/v1/city',
      method: 'GET',
      json: true,
      qs: {
        q: str
      }
    });
  },
  /**
   * function to handle the call to repo by fork
   * @param {String} city
   * @return {Promise}
   */
  getWeather: (city) => {
    return request({
      url: 'http://localhost:3000' + '/api/v1/weather',
      method: 'GET',
      json: true,
      qs: {
        city: city
      }
    });
  }
}

export default utils;
