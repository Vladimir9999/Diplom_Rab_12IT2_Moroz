import React, { Component } from 'react';
import PersonalData from './personalDataForm';
import WorkerForm from './workerForm';
import UserForm from './UserForm';
import md5 from 'md5';
import '../../../stylesheets/Form.scss'


class addUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'http://192.168.1.38:3000/users',
      isValidPersonalData: false,
      errorPass: null,
      errorPhoneNum: null,
      errorMessage: null,
      errorLogin: null,
      showMessageBox: false,
      step: 0,
      data: {}
    };
  }
  changePersonalDataForm = (firstName, secondName, middleName , phoneNum, login, pass1, pass2, email) => {
    const errorPass = pass1.value !== pass2.value ? 'Пароли не совпадают' : null;
    const errorPhoneNum = phoneNum.value && phoneNum.value.length !== 17 ? 'Телефон введен неверно' : null;

    // Все поля заполнены? Сейчас узнаем
    const isFilled = phoneNum.value && phoneNum.value.length === 17 &&
      login.value && firstName.value &&
      secondName.value && middleName.value &&
      pass1.value === pass2.value;

    const isValidPersonalData = isFilled;
    const errorMessage = isFilled ? null : this.state.errorMessage;
    this.setState({
      data: {
        ...this.state.data,
        firstName: firstName.value,
        secondName: secondName.value,
        middleName: middleName.value,
        phoneNum: phoneNum.value,
        login: login.value,
        email: email.value,
        pass: pass1.value,
        birthDate: new Date() //!!!
      },
      errorMessage,
      errorPass,
      errorPhoneNum,
      isValidPersonalData
    });
  };
  addUser = () => {
    if (this.state.isValidPersonalData) {
      fetch(this.state.url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state.data)
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
              this.setState({step: 0, showMessageBox: true});
          }
        ).catch( error =>{
        this.setState({errorLogin: error.message, step: 0})
      });
    } else {
      this.setState({
        isValidPersonalData: false,
        errorMessage: 'Заполните все поля',
        step: 0
      });
    }

  };
  addCarDriver = (numDriverLicence, dateOfIssue, dateOfExpire, isBadVision) => {
      this.setState({
        data: {
          ...this.state.data,
          numDriverLicence,
          dateOfIssue,
          dateOfExpire,
          isBadVision,
          pass: md5(this.state.data.pass),
          level: 0,
        },
        errorMessage: null,
        errorLogin: null
      });
      setTimeout(this.addUser(), 1000);

  };
  addWorker = (id_dept, id_post) => {
    this.setState({
      data: {
        ...this.state.data,
        id_dept,
        id_post,
        pass: md5(this.state.data.pass),
        level: 1,
      },
      errorMessage: null,
      errorLogin: null
    });
    this.addUser();
  };
  nextStep = () => {
    if (this.state.isValidPersonalData) {
      this.setState({step: ++this.state.step});
    }
  };
  prevStep = () => {
    this.setState({step: --this.state.step});
  };
  render() {
    const { step } = this.state,
          isWorker = this.props.params.user_type === 'worker',
          {errorPass, errorPhoneNum, errorMessage, errorLogin} = this.state;
    return (
      <div className = "authForm">
        <form>
          {step === 0 &&
             <div>
               <PersonalData
                 changeField={this.changePersonalDataForm.bind(this)}
                 nextStep={this.nextStep.bind(this)}
                 userdata={this.state.data}
                 errorPass={errorPass}
                 showMessageBox={this.state.showMessageBox}
                 errorPhoneNum={errorPhoneNum}
                 errorMessage={errorMessage}
                 errorLogin={errorLogin}
               />
             </div>
          }
          {step === 1 &&
            <div>
              {isWorker && <WorkerForm
                changeField={this.changePersonalDataForm.bind(this)}
                prevStep={this.prevStep.bind(this)}
                addWorker={this.addWorker.bind(this)}
                showMessageBox={this.state.showMessageBox}
              />}
              {!isWorker && <UserForm
                changeField={this.changePersonalDataForm.bind(this)}
                prevStep={this.prevStep.bind(this)}
                showMessageBox={this.state.showMessageBox}
                addCarDriver={this.addCarDriver.bind(this)}
              />}
            </div>
          }

        </form>
      </div>
    );
  }
}

export default addUser;


