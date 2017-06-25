import React, { Component } from 'react';
import '../../../stylesheets/Header.scss';
import { browserHistory } from 'react-router';


class Logo extends Component {
  onClickLogo() {
    browserHistory.push('/home');
  }
  render() {
    return (
      <div className="header-element" onClick={this.onClickLogo.bind(this)}>
        <div className="element-left">ГАИ</div>
      </div>
    );
  }
}

export default Logo;


