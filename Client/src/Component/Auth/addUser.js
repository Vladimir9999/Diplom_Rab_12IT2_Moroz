import React, { Component } from 'react';
import PersonalData from './personalDataForm';
import WorkerForm from './workerForm';
import UserForm from './personalDataForm';
import md5 from 'md5';
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
      step: 0,
      data: {}
    };
  }
  changePersonalDataForm = (firstName, secondName, middleName , phoneNum, login, pass1, pass2, email) => {
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
      }
    });
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
    debugger
    const pass = md5(this.state.data.pass);
    this.setState({
      data: {
        ...this.state.data,
        pass: pass
      }
    });
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
  addWorker = (id_dept, id_post) => {
    debugger
    this.setState({
      data: {
        ...this.state.data,
        id_dept,
        id_post,
        level: 1
      }
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
              />}
              {!isWorker && <UserForm
                changeField={this.changePersonalDataForm.bind(this)}
                prevStep={this.prevStep.bind(this)}
              />}
            </div>
          }

        </form>
      </div>
    );
  }
}

export default addUser;


