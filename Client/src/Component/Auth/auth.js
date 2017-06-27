import React, { Component } from 'react';
import {  connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import usersActions from '../../actions';
import { Link, browserHistory } from 'react-router';
import md5 from 'md5';
import '../../../stylesheets/Form.scss'

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'http://192.168.1.38:3000/users/auth',
      errorMessage: null,
      errorLogin: null,
      errorPass: null
    };

  };
  componentWillMount()  {
    if (localStorage.getItem('currentUser')) {
      browserHistory.push('/home');
    } else {
      this.props.usersActions.addCurrentUser(null);
    }
  };
  onEnter = () => {
    const {login, pass} = this;
    this.setState({errorMessage: null, errorLogin: null, errorPass: null});
    if (login.value && pass.value) {
      fetch(this.state.url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          login: login.value,
          pass: md5(pass.value)
        })
      })
        .then(res => {
          this.setState({status: res.status});
          return res;
        })
        .then(res => res.json())
        .then(res => {
          if (this.state.status === 401) {
            throw(res);
          }
          this.props.usersActions.addCurrentUser(res);
          localStorage.setItem('currentUser', JSON.stringify(res));
          browserHistory.push('/home');
        }).catch( res => {
          this.setState({errorMessage: res.message});
        });
    } else {
      if (!login.value) {
        this.setState({errorLogin: 'Поле обязательно для заполнения'});
      }
      if (!pass.value) {
        this.setState({errorPass: 'Поле обязательно для заполнения'});
      }
    }
  };
  render() {
    const { errorMessage, errorLogin, errorPass } = this.state,
      loginClass = errorLogin ? 'inValidInput' : '',
      passClass = errorPass ? 'inValidInput' : '';
    return (
      <div className='authForm'>
        <form>
          <fieldset>
            <legend><span className="number">*</span>Введите данные для авторизации</legend>
            {errorMessage && <span className="errorLabel">{errorMessage}</span>}
            {errorLogin && <span className="errorLabel">{errorLogin}</span>}
            <input
              type="text"
              name="field1"
              placeholder="Логин *"
              className= {loginClass}
              ref={(input) => this.login = input}
            />
            {errorPass && <span className="errorLabel">{errorPass}</span>}
            <input
              type="password"
              name="field2"
              placeholder="Пароль *"
              className= {passClass}
              ref={(input) => this.pass = input}
            />
          </fieldset>
          <input type="button" className='enterBtn' value="Вход" onClick={this.onEnter.bind(this)} />
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    usersActions: bindActionCreators(usersActions, dispatch)
  }
};

export default connect (() => ({}), mapDispatchToProps)(Auth);
