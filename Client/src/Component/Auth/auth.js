import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import actions from '../../actions';
import '../../../stylesheets/Auth.scss'

class Auth extends Component {
  render() {
    return (
      <div className='authForm'>
        <form>
          <fieldset>
            <legend><span className="number">*</span>Введите данные для аутентификации</legend>
            <input type="text" name="field1" placeholder="Логин *" />
            <input type="email" name="field2" placeholder="Пароль *" />
          </fieldset>
          <input type="submit" className='enterBtn' value="Вход" />
          <Link className="Link" to="user_registration">
            <input type="button" className='regBtn' value="Регистрация" />
          </Link>
        </form>
      </div>
    );
  }
}

export default Auth;
