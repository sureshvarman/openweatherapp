/**
 * Core layout component defines the children components
 * @prop {ReactElement} children
 */
import React from 'react';
import Header from '../../components/Header';
import './CoreLayout.scss';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='app-container'>
        <Header />
        <div className='view-port'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
