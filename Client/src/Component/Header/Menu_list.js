import React, { Component } from 'react';
import {  browserHistory } from 'react-router';
import '../../../stylesheets/Header.scss'

class Menu_list extends Component {
  onExit = () => {
    localStorage.removeItem('currentUser');
    browserHistory.push('/');
  };
  onClickWorker = () => {
    browserHistory.push('/workers');
  };
  render() {
    const { status } = this.props;
    let arr_list,
        msg = {
              text: 'Сообщения',
              callback: this.onExit.bind(this),
              imgCLass: 'mail_icon'
            },
        exit = {
              text: 'Выход',
              callback: this.onExit.bind(this),
              imgCLass: 'exit_icon'
            };
    if (status) {
      switch(status) {
        case 'user': {
          arr_list = [
            msg,
            exit
          ];
          break;
        }
        case 'admin': {
          arr_list = [
            msg,
            {
              text: 'Сотрудники ГАИ',
              callback: this.onClickWorker.bind(this),
              imgCLass: 'mWorker_icon'
            },
            exit
          ];
          break;
        }
        case 'worker': {
          arr_list = [
            msg,
            exit
          ];
          break;
        }
      }
    }
    return (
      <ul className={this.props.listClassName}>
        {arr_list.map((el,ind) => {
          return (
            <li key={ind} onClick={el.callback} >
              <div className={el.imgCLass} />
              <span>{el.text}</span>

            </li>
          );
        })}
      </ul>
    );
  }
}

export default Menu_list;



