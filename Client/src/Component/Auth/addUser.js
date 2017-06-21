import React, { Component } from 'react';
import PersonalData from './personalDataForm';
import WorkerForm from './personalDataForm';
import UserForm from './personalDataForm';

import '../../../stylesheets/Form.scss'


class addUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'http://localhost:3000/users',
      isValidPersonalData: false,
      errorPass: null,
      errorPhoneNum: null,
      errorMessage: null,
      errorLogin: null,
      showMessageBox: false,
      step: 0
    };
  }
  changePersonalDataForm = (firstName, secondName, middleName , phoneNum, login, pass1, pass2) => {
    if (pass1.value !== pass2.value ) {
      this.setState({
        errorPass: 'Пароли не совпадают'
      });
    } else {
      this.setState({
        errorPass: null,
      });
    }

    if (phoneNum.value) {
      this.setState({
        errorPhoneNum: phoneNum.value.length !== 17 ? 'Телефон введен неверно' : null
      });
    }
    // Все поля заполнены? Сейчас узнаем
    if (
      phoneNum.value && phoneNum.value.length === 17 &&
      login.value && firstName.value &&
      secondName.value && middleName.value &&
      pass1.value === pass2.value
    ) {
      this.setState({
        isValidPersonalData: true,
        errorMessage: null
      });
    } else {
      this.setState({
        isValidPersonalData: false
      });
    }
  };
  addUser = () => {
    const pass = md5(this.pass1.value),
      { firstName, secondName, middleName , phoneNum, login } = this;
    this.setState({
      errorMessage: null,
      errorLogin: null
    });
    if (this.state.isValidPersonalData) {
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
        .then(res => {
          this.setState({status: res.status});
          return res;
        })
        .then( res => res.json())
        .then( res =>{
            if (this.state.status === 400) {
              throw(res);
            } else
              this.setState({showMessageBox: true});
          }

        ).catch( error =>{
        this.setState({errorLogin: error.message})
      });
    } else {
      this.setState({
        isValidPersonalData: false,
        errorMessage: 'Заполните все поля'
      });
    }

  };
  nextStep = () => {
    if (this.state.isValidPersonalData) {
      this.state.step++;
    }
  };
  prevStep = () => {
    this.state.step--;
  };
  render() {
    const { step } = this.state,
          { isWorker } = this.props; // trur or false
    return (
      <div className = "authForm">
        <form>
          {step === 0 &&
             <div>
               <PersonalData changeField={this.changePersonalDataForm.bind(this)} />
               <input className ="enterBtn" type="button" value="Далее" onClick={this.nextStep.bind(this)}/>
             </div>
          }
          {step !== 0 &&
            <div>
              {isWorker && <WorkerForm changeField={this.changePersonalDataForm.bind(this)} />}
              {!isWorker && <UserForm changeField={this.changePersonalDataForm.bind(this)} />}
              <input className ="enterBtn" type="button" value="Готово" onClick={this.addUser.bind(this)}/>
              <input className ="regBtn" type="button" value="Назад" onClick={this.prevStep.bind(this)}/>
            </div>
          }

        </form>
      </div>
    );
  }
}

export default addUser;


