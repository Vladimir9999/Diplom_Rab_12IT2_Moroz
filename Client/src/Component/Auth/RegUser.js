import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import InputElement from 'react-input-mask';
import '../../../stylesheets/Auth.scss'

class RegUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'http://localhost:3000/users',
      isSend: false
    };
  }
  changeField = () => {
    const { firstName, secondName, middleName , phoneNum, login, pass1, pass2 } = this;
    if (
        phoneNum.value && phoneNum.value.length === 17 &&
        login.value && firstName.value &&
        secondName.value && middleName.value &&
        pass1.value === pass2.value
    ) {
      this.setState.isSend = true;
    } else {
      this.setState.isSend = false;
    }
  };
  addUser = () => {
    const pass = this.pass1.value,
          { firstName, secondName, middleName , phoneNum, login } = this;
    if (!this.setState.isSend) {
      // TODO
    } else  {
      fetch(this.state.url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login: login.value,
          pass: pass,
          firstName: firstName.value,
          secondName: secondName.value,
          middleName: middleName.value,
          phone_num: phoneNum.value
        })
      })
        .then( res => res.json())
        .then( res =>{
          if (res.res) {
            browserHistory.push('/');
          } else {
            throw(new Error(res.text));
          }
      }).catch( error =>{
        // TODO
      });
    }

  };
  onChangePass = () => {};

  render() {
    return (
      <div className = "authForm">
        <form>
          <fieldset>
            <legend><span className="number">1</span> Введите данные для аутентификации</legend>
            {erroLogin && <span>Error</span>}
            <input type="text"
                   name="field1"
                   ref={(input) => this.login = input}
                   placeholder="Логин *"
                   onChange={this.changeField.bind(this)}
            />
            <input type="password"
                   name="field2"
                   ref={(input) => this.pass1 = input}
                   placeholder="Пароль *"
                   onChange={this.changeField.bind(this)}
            />
            <input type="password"
                   name="field3"
                   ref={(input) => this.pass2 = input}
                   placeholder="Повторите пароль *"
                   onChange={this.changeField.bind(this)}
            />
          </fieldset>
          <fieldset>
            <legend><span className="number">2</span> Введите личные данные</legend>
            <input type="text"
                   name="field4"
                   ref={(input) => this.firstName = input}
                   placeholder="Фамилия *"
                   onChange={this.changeField.bind(this)}
            />
            <input type="text"
                   name="field5"
                   ref={(input) => this.secondName = input}
                   placeholder="Имя *"
                   onChange={this.changeField.bind(this)}
            />
            <input type="text"
                   name="field6" ref={(input) => this.middleName = input} placeholder="Отчество *"
                   onChange={this.changeField.bind(this)}
            />
            <InputElement type="text"
                          name="field7"
                          mask="+375\ 99 999 99 99"
                          maskChar=""
                          ref={(input) => this.phoneNum = input}
                          placeholder="Номер телефона *"
                          onChange={this.changeField.bind(this)}
            />
          </fieldset>
          <input className ="enterBtn" type="button" value="Далее" onClick={this.addUser.bind(this)}/>
        </form>
      </div>
    );
  }
}

export default RegUser;

