import React, { Component } from 'react';
import {  browserHistory } from 'react-router';
import '../../../stylesheets/Header.scss'

class Menu_list extends Component {
  onExit = () => {
    localStorage.removeItem('currentUser');
    browserHistory.push('/');
  };
  render() {
    return (
      <ul className={this.props.listClassName}>
        <li>Бла бла бла</li>
        <li onClick={this.onExit.bind(this)} >Выход</li>
      </ul>
    );
  }
}

export default Menu_list;



