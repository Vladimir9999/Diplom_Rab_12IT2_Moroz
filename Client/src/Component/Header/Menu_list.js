import React, { Component } from 'react';
import {  browserHistory } from 'react-router';
import '../../../stylesheets/Header.scss'

class Menu_list extends Component {
  onExit = () => {
    localStorage.removeItem('currentUser');
    browserHistory.push('/');
  };
  render() {
    const { status } = this.props,
          list = [
            {
              text: 'Сообщения',
              callback: this.onExit.bind(this),
              imgCLass: 'mail_icon'
            },
            {
              text: 'Выход',
              callback: this.onExit.bind(this),
              imgCLass: 'exit_icon'
            }
          ];
    if (status) {
      switch(status) {
        case 'user': {
          break;
        }
        case 'admin': {
          break;
        }
        case 'worker': {
          break;
        }
      }
    }

    return (
      <ul className={this.props.listClassName}>
        {list.map((el,ind) => {
          return (
            <li key={ind} onClick={el.callback} >
              <span>{el.text}</span>
              <div className={el.imgCLass} />

            </li>
          );
        })}
      </ul>
    );
  }
}

export default Menu_list;



