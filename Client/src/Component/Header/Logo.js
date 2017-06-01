import React, { Component } from 'react';
import '../../../stylesheets/Header.scss'

class Logo extends Component {
  render() {
    return (
      <div className="home_container">
        <img className="home_icon"/>
        <h1 className="logo">ГАИ</h1>
      </div>
    );
  }
  //src="../../../img/user.jpg"
}

export default Logo;


