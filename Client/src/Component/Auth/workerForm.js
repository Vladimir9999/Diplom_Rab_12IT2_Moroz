import React, { Component } from 'react';
import InputElement from 'react-input-mask';

import '../../../stylesheets/Form.scss'


class WorkerForm extends Component {

  render() {
    const { errorPass, errorPhoneNum, errorMessage, errorLogin, changeField } = this.props,
      passClass = errorPass ? 'inValidInput' : '',
      phoneNumClass = errorPhoneNum ? 'inValidInput' : '',
      loginClass = errorLogin ? 'inValidInput' : '';
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
                 onChange={changeField}
          />
          {errorPass && <span className="errorLabel">{errorPass}</span>}
          <input type="password"
                 name="field2"
                 className= {passClass}
                 ref={(input) => this.pass1 = input}
                 placeholder="Пароль *"
                 onChange={changeField}
          />
          <input type="password"
                 name="field3"
                 className= {passClass}
                 ref={(input) => this.pass2 = input}
                 placeholder="Повторите пароль *"
                 onChange={changeField}
          />
        </fieldset>
        <fieldset>
          <legend><span className="number">2</span> Введите личные данные</legend>
          <input type="text"
                 name="field4"
                 ref={(input) => this.firstName = input}
                 placeholder="Фамилия *"
                 onChange={changeField}
          />
          <input type="text"
                 name="field5"
                 ref={(input) => this.secondName = input}
                 placeholder="Имя *"
                 onChange={changeField}
          />
          <input type="text"
                 name="field6" ref={(input) => this.middleName = input} placeholder="Отчество *"
                 onChange={changeField}
          />
          {errorPhoneNum && <span className="errorLabel">{errorPhoneNum}</span>}
          <InputElement type="text"
                        name="field7"
                        mask="+375\ 99 999 99 99\"
                        maskChar=""
                        className= {phoneNumClass}
                        ref={(input) => this.phoneNum = input}
                        placeholder="Номер телефона *"
                        onChange={changeField}
          />
        </fieldset>
      </div>
    );
  }
}

export default WorkerForm;



