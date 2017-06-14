/**
 * reducers are combined into single reducers,
 * a single store approach for Redux
 */
import { combineReducers } from 'redux';
import map from './map';

// combines reducers into a single reducer object
export default combineReducers({
  map
});
