import React, { Component } from 'react';
import '../../../stylesheets/Header.scss'

class Dashboard extends Component {
  render() {
    let { status, login } = this.props.currentUser,
    iconName = (status || 'user') + '_icon';
    return (
      <div className="Dashboard">
        <h2 className="logo">{login}</h2>
        <img className={iconName} />
      </div>
    );
  }
  //src="../../../img/user.jpg"
}

export default Dashboard;

