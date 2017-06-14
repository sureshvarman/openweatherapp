/**
 * reducers for the map to cache the city data and city list
 */
import * as types from '../constants';
import { createReducer } from 'redux-create-reducer';

// Default values
const initialState = {
  cityList: [],
  cityData: {},
  currentCity: ''
};

export default createReducer(initialState, {
  [types.ON_TYPE_CITY_SUCCESS] (state, action) {
    let {response} = action.payload;
    let cityList = [];

    response.forEach(function(obj) {
      cityList.push({name: obj.name, id: obj.name});
    });

    state.cityList = [].concat(cityList);

    return {
        ...state,
        cityList: state.cityList
    };
  },
  [types.ON_CITY_DATA_SUCCESS] (state, action) {
    let {response, city} = action.payload;
    let cityName = response.name;
    let cityData = state.cityData;
    cityData[cityName] = response;

    return {
      ...state,
      cityData,
      currentCity: cityName
    };
  },
  [types.ON_TYPE_CITY_CLEAR] (state, action) {
    let {city} = action.payload;
    let cityData = state.cityData;
    delete cityData[city];

    return {
      ...state,
      cityData
    };
  },
  [types.ON_CITY_REMOVE] (state, action) {
    let {city} = action.payload;
    let cityData = state.cityData;
    delete cityData[city];
    return {
      ...state,
      city,
      cityData
    }
  }
});
