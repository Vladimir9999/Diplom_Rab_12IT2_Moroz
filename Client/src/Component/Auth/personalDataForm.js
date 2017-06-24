import React, { Component } from 'react';
import '../../../stylesheets/Form.scss'
import InputElement from 'react-input-mask';

class PersonalData extends Component {

  changeField() {
    const { firstName, secondName, middleName , phoneNum, login, pass1, pass2, email } = this;
    this.props.changeField(firstName, secondName, middleName , phoneNum, login, pass1, pass2, email);
  }
  nextStep = () => {
    this.changeField();
    this.props.nextStep();
  };
  render() {
    const { errorPass, errorPhoneNum, errorMessage, errorLogin } = this.props,
      passClass = errorPass ? 'inValidInput' : '',
      phoneNumClass = errorPhoneNum ? 'inValidInput' : '',
      loginClass = errorLogin ? 'inValidInput' : '',
      { firstName = {}, secondName = {}, middleName = {} , phoneNum = {}, login = {}, email = {}} = this.props.userdata;
    let pass1,
        pass2;
    pass1 = pass2 = this.props.userdata.pass || {};
    return (
      <div>
        <fieldset>
          <legend><span className="number">1</span> Введите данные для аутентификации</legend>
          {errorMessage && <span className="errorLabel">{errorMessage}</span>}
          {errorLogin && <span className="errorLabel">{errorLogin}</span>}
          <input type="text"
                 name="field1"
                 className= {loginClass}
                 ref={(input) => this.login = input}
                 placeholder="Логин *"
                 defaultValue={login.value}
                 onChange={this.changeField.bind(this)}
          />
          {errorPass && <span className="errorLabel">{errorPass}</span>}
          <input type="password"
                 name="field2"
                 className= {passClass}
                 defaultValue={pass1.value}
                 ref={(input) => this.pass1 = input}
                 placeholder="Пароль *"
                 onChange={this.changeField.bind(this)}
          />
          <input type="password"
                 name="field3"
                 className= {passClass}
                 defaultValue={pass2.value}
                 ref={(input) => this.pass2 = input}
                 placeholder="Повторите пароль *"
                 onChange={this.changeField.bind(this)}
          />
        </fieldset>
        <fieldset>
          <legend><span className="number">2</span> Введите личные данные</legend>
          <input type="text"
                 name="field4"
                 defaultValue={firstName.value}
                 ref={(input) => this.firstName = input}
                 placeholder="Фамилия *"
                 onChange={this.changeField.bind(this)}
          />
          <input type="text"
                 name="field5"
                 defaultValue={secondName.value}
                 ref={(input) => this.secondName = input}
                 placeholder="Имя *"
                 onChange={this.changeField.bind(this)}
          />
          <input type="text"
                 defaultValue={middleName.value}
                 name="field6" ref={(input) => this.middleName = input}
                 placeholder="Отчество *"
                 onChange={this.changeField.bind(this)}
          />
          {errorPhoneNum && <span className="errorLabel">{errorPhoneNum}</span>}
          <InputElement type="text"
                        name="field7"
                        mask="+375\ 99 999 99 99\"
                        maskChar=""
                        defaultValue={phoneNum.value}
                        className= {phoneNumClass}
                        ref={(input) => this.phoneNum = input}
                        placeholder="Номер телефона *"
                        onChange={this.changeField.bind(this)}
          />
          <input type="text"
                 defaultValue={email.value}
                 name="field6"
                 ref={(input) => this.email = input}
                 placeholder="Email"
                 onChange={this.changeField.bind(this)}
          />
        </fieldset>
        <input className ="enterBtn" type="button" value="Далее" onClick={this.nextStep.bind(this)}/>
      </div>
    );
  }
}

export default PersonalData;


