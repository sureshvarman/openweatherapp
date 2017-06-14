/**
 * Home view - which renders the initial page after the app loads
 * @prop {Object} map
 * @prop {Object} dispatch
 */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mapActions from '../actions/map.js';
import GoogleMapReact from 'google-map-react';
import './HomeView.scss';

import Marker from '../components/marker';

class Home extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    this.actions = bindActionCreators(mapActions, dispatch);
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
  }

  createMapOptions = (maps) => {
    return {
      zoomControlOptions: {
        position: maps.ControlPosition.RIGHT_CENTER,
        style: maps.ZoomControlStyle.SMALL
      },
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT
      },
      mapTypeControl: false
    };
  }

  renderMarkers = () => {
    let markers = [];

    for (let city in this.props.map.cityData) {
      let cityData = this.props.map.cityData[city];
      markers.push(
        <Marker
          key={city}
          lat={cityData.coord.lat}
          lng={cityData.coord.lon}
          icon={cityData.weather[0].icon}
          text={city}
        />
      )
    }

    return markers;
  }

  renderMap = () => {
    if (!this.props.map.currentCity) {
      return (
        <div className="map-message">
          No data yet, Choose any city to display map
        </div>
      );
    }

    let coords = this.props.map.cityData[this.props.map.currentCity] ? {
      lat: this.props.map.cityData[this.props.map.currentCity].coord.lat,
      lng: this.props.map.cityData[this.props.map.currentCity].coord.lon
    } : {};
    let icon = this.props.map.cityData[this.props.map.currentCity] ?
    this.props.map.cityData[this.props.map.currentCity].weather[0].icon : ''

    return (
      <div className="map_view">
        <GoogleMapReact
          center={coords}
          defaultZoom={9}
          options={this.createMapOptions}
        >
        {this.renderMarkers()}
        </GoogleMapReact>
      </div>
    )
  }

  render() {
    return this.renderMap();
  }
}

/**
 * function to map state information to component
 * will be a callback
 * @param {state} Object
 * @return {Object}
 */
function mapStateToProps(state) {
    const { map } = state;
    return {
      map
    };
}

Home.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    map: React.PropTypes.object
};

export default connect(mapStateToProps)(Home);
