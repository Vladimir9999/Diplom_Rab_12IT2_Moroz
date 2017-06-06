import React, { Component } from 'react';
import Menu_list from './Menu_list';

import '../../../stylesheets/Header.scss'

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowList: false
    };

    this.switchShowList = this.switchShowList.bind(this);
  }

  switchShowList() {
    this.setState({ isShowList: !this.state.isShowList });
  }

  render() {
    let { status, login } = this.props.currentUser,
      iconName = (status || 'user') + '_icon';
    const listClassName = this.state.isShowList ? 'MenuList' : 'MenuList-hide';
    return (
      <div className="DashboardCnt"
           onMouseEnter={this.switchShowList}
           onMouseLeave={this.switchShowList}
      >
        <div className="Dashboard">
          <h2 className="logo">{login}</h2>
          <div className={iconName} />
        </div>
        <Menu_list listClassName={listClassName} status={status} />

      </div>
    );
  }
  //src="../../../img/user.jpg"
}

export default Dashboard;

