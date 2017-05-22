import React, { Component } from 'react';
import '../../../stylesheets/Auth.scss'
import '../../../stylesheets/Auth.scss'

class RegUser extends Component {

  addUser = () => {
    const url = 'http://localhost:3000/users',
          pass = this.pass1.value,
          { firstName, secondName, middleName , phoneNum, login } = this;
    if (firstName.value && secondName.value && middleName.value && phoneNum.value && pass) {
      fetch(url, {
        method: 'POST',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: JSON.stringify({
          login: login.value,
          pass: pass,
          firstName: firstName.value,
          secondName: secondName.value,
          middleName: middleName.value,
          phone_num: phoneNum.value
        })
      }).then(function(res) {
        console.log('then');
        debugger
      }).catch(function() {
        console.log('catch');
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
            <input type="text" name="field1" ref={(input) => this.login = input}  placeholder="Логин *" />
            <input type="password" name="field2" ref={(input) => this.pass1 = input} placeholder="Пароль *" />
            <input type="password" name="field3" ref={(input) => this.pass2 = input} onChange={this.onChangePass.bind(this)} placeholder="Повторите пароль *" />
          </fieldset>
          <fieldset>
            <legend><span className="number">2</span> Введите личные данные</legend>
            <input type="text" name="field4" ref={(input) => this.firstName = input} placeholder="Фамилия *" />
            <input type="text" name="field5" ref={(input) => this.secondName = input} placeholder="Имя *" />
            <input type="text" name="field6" ref={(input) => this.middleName = input} placeholder="Отчество *" />
            <input type="text" name="field7" ref={(input) => this.phoneNum = input} placeholder="Номер телефона *" />
          </fieldset>
          <input className ="enterBtn" type="submit" value="Далее" onClick={this.addUser.bind(this)}/>
        </form>
      </div>
    );
  }
}

export default RegUser;

