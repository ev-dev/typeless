// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';

export default class Home extends Component {
  // state = {
  //   clicked: false
  // }

  // handleClick = () => {
  //   console.log('toggle clicked state')
  //   this.setState({ clicked: !this.state.clicked })
  // }

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>TypeLess</h2>
          <Link to="/pad">Open Pad</Link>
        </div>
      </div>
    );
  }
}
