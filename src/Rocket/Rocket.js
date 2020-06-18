import React, {Component} from 'react';
import styles from './Rocket.module.css';
import shuttle from '../shuttle.png'

export default class Rocket extends Component {
  render () {
    return (
      <div>
        <img src={shuttle} alt="shuttle" className={styles.img}/>
      </div>
    );
  }
}