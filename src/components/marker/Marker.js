/**
 * Marker component to take care of the markers inside map
 * @prop {String} icon
 * @prop {String} text
 */
import React from 'react';
import './Marker.scss';

class Marker extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
  }

  render () {
    return (
      <div className="weather-marker">
      <span>
        {this.props.text}
      </span>
      <span>
        <img src={`http://openweathermap.org/img/w/${this.props.icon}.png`} />
      </span>
      </div>
    )
  }
}

export default Marker;
