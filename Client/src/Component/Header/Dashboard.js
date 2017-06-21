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
    let { level, login } = this.props.currentUser,
      iconName = 'element-right ';
    switch (level) {
      case 1:
        iconName += 'worker_icon';
        break;
      case 0:
        iconName += 'user_icon';
        break;
      default:
        iconName += 'admin_icon';
        break;

    }

    const listClassName = this.state.isShowList ? 'MenuList' : 'MenuList-hide';
    return (
      <div className="DashboardCnt"
           onMouseEnter={this.switchShowList}
           onMouseLeave={this.switchShowList}
      >
        <div className="header-element">
          <div className={iconName}>{login}</div>
        </div>
        <Menu_list listClassName={listClassName} level={level} />

      </div>
    );
  }
}

export default Dashboard;

