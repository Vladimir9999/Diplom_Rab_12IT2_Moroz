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
  onClickDriver = () => {
    browserHistory.push('/car_drivers');
  };
  onClickTransport = () => {
    browserHistory.push('/transport');
  };
  render() {
    const { level } = this.props;
    let arr_list = [],
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
    if (level) {
      switch(level) {
        case 0: {
          arr_list = [
            msg,
            exit
          ];
          break;
        }
        case 2,3,4: {
          arr_list = [
            msg,
            {
              text: 'Сотрудники ГАИ',
              callback: this.onClickWorker.bind(this),
              imgCLass: 'mWorker_icon'
            },
            {
              text: 'Водители',
              callback: this.onClickDriver.bind(this),
              imgCLass: 'driver_icon'
            },
            {
              text: 'Транспорт',
              callback: this.onClickTransport.bind(this),
              imgCLass: 'transport_icon'
            },
            exit
          ];
          break;
        }
        case 1: {
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



