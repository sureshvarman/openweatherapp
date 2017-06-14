/**
 * Header class to take care of the Header part of the HTML page
 * @prop {Object} map
 * @prop {Object} dispatch
 */
import React from 'react';
import {Navbar, NavItem, NavDropdown, MenuItem, Nav} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {AsyncTypeahead} from 'react-bootstrap-typeahead';
import * as mapActions from '../../actions/map.js';
import _ from 'underscore';
import './Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    this.actions = bindActionCreators(mapActions, dispatch);
  }

  componentWillReceiveProps(nextProps) {
    this.props = nextProps;
  }

  handleSearch = (str) => {
    this.actions.onCityType(str);
  }

  findDifference = (typeaheadarray, reducerObject, isNew) => {
    let cityList = _.pluck(typeaheadarray, 'name');
    let reducerCityList = Object.keys(reducerObject);

    if (isNew) {
      return _.without(cityList, ...reducerCityList)[0];
    }

    return _.without(reducerCityList, ...cityList)[0];
  }

  onCityChange = (cities) => {
    if (cities.length < Object.keys(this.props.map.cityData).length) {
      this.actions.removeCity(this.findDifference(cities, this.props.map.cityData));
    } else {
      this.actions.getWeather(this.findDifference(cities, this.props.map.cityData, true));
    }
  }

  render () {
    return (
      <div id="flipkart-navbar">
        <div className="container">
          <div className="row row2">
            <div className="col-sm-2">
              <h1 style={{margin: "0px"}}><span className="largenav">Open Weather App</span></h1>
            </div>
            <div className="flipkart-navbar-search smallsearch col-sm-8 col-xs-11">
              <div className="row">
                <AsyncTypeahead
                 onSearch={this.handleSearch}
                 options={this.props.map.cityList}
                 multiple={true}
                 placeholder="Choose city .."
                 filterBy={[]}
                 labelKey="name"
                 onChange={this.onCityChange}
                 />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
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

Header.propTypes = {
    dispatch: React.PropTypes.func.isRequired,
    map: React.PropTypes.object
};

export default connect(mapStateToProps)(Header);
