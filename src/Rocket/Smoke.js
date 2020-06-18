import React, {Component} from 'react';
import styles from './Smoke.module.css';
import smoke from '../smoke.mov';

export default class Smoke extends Component {
  render () {
    return (
      <div className={styles.smoke}>
        <video className={styles.video} autoPlay loop src={smoke} />
      </div>
    );
  }
}