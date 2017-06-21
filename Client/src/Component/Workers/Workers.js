import React, { Component } from 'react';
import TableCmp from '../TableCmp';
class Workers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      column: ['#','Фамилия', 'Имя', 'Отчество', 'День рождения', 'Номер телефона', 'Электронная почта']
    };
  };
  componentWillMount() {
    fetch('http://localhost:3000/users')
      .then(res => {
        this.setState({status: res.status});
        return res;
      }).then(res => res.json())
      .then(res => {
        this.setState({users: res});
      })
  };
  render() {
    return (
      <div>
        <TableCmp users={this.state.users} column={this.state.column}/>
      </div>
    );
  }
}

export default Workers;


