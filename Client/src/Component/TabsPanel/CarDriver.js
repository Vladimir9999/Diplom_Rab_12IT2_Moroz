import React, { Component } from 'react';
import { Button, Col, Collapse } from 'react-bootstrap';
import { Link } from 'react-router';
import TableCmp from '../TableCmp';



class CarDriver extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      column: ['#','Фамилия', 'Имя', 'Отчество', 'Дата рождения', 'Номер телефона', 'Электронная почта'],
      openFilter: false
    };
  };
  onClickFilter = () => {
    this.setState({openFilter: !this.state.openFilter});
  };

  componentWillMount() {
    fetch('http://localhost:3000/users')
      .then(res => {
        this.setState({status: res.status});
        return res;
      }).then(res => res.json())
      .then(res => {
        this.setState({users: res.filter((el) => {
          return el.level === 0
        })});
      })
  };
  render() {
    return (
      <div className="workerContainer">
        <Col xs={8} xsOffset={2} className="borderTable">
          <div className="buttonsContainer">
            <Link to="/user_registration/user"><Button>Добавить водителя</Button></Link>
            <Button onClick={this.onClickFilter.bind(this)}>Фильтр</Button>
          </div>
          <Collapse in={this.state.openFilter}>
            <div>Фильтр</div>
          </Collapse>
          <TableCmp users={this.state.users} column={this.state.column}/>
        </Col>
      </div>
    );
  }
}

export default CarDriver;


