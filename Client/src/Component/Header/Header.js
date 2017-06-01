import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import usersActions from '../../actions';
import Dashboard from './Dashboard';
import Logo from './Logo';
import '../../../stylesheets/Header.scss'

class Header extends Component {
  render() {
    const { currentUser } = this.props;
    let defaultMenu = true,
        isAdmin = false,
        isUser = false,
        isWorker = false;
    if (currentUser) {
      defaultMenu = false;
    }
    return (
      <div>
        {defaultMenu && <div className='defHeader'>default</div>}
        {!defaultMenu &&
          <div className='Header'>
            <Logo />
            <Dashboard currentUser={currentUser} />
          </div>
        }

      </div>

    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.usersReducer.currentUser,
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    usersActions: bindActionCreators(usersActions, dispatch)
  }
};

export default connect (mapStateToProps, mapDispatchToProps) (Header);
