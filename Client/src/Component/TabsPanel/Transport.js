import React, { Component } from 'react';
import { Button, Col, Collapse } from 'react-bootstrap';
import { Link } from 'react-router';
import TableCars from '../TableCars';



class Transport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transport: [],
      column: ['#','Модель', 'Цвет', 'Номер', 'Год выпуска', 'Технический осмотр'],
      openFilter: false
    };
  };
  onClickFilter = () => {
    this.setState({openFilter: !this.state.openFilter});
  };

  componentWillMount() {
    fetch('http://localhost:3000/Transport')
      .then(res => {
        this.setState({status: res.status});
        return res;
      }).then(res => res.json())
      .then(res => {
        this.setState({transport: res});
      })
  };
  render() {
    return (
      <div className="workerContainer">
        <Col xs={8} xsOffset={2} className="borderTable">
          <div className="buttonsContainer">
            <Link to="/addTransport"><Button>Добавить транспорт</Button></Link>
            <Button onClick={this.onClickFilter.bind(this)}>Фильтр</Button>
          </div>
          <Collapse in={this.state.openFilter}>
            <div>Фильтр</div>
          </Collapse>
          <TableCars cars={this.state.transport} column={this.state.column}/>
        </Col>
      </div>
    );
  }
}

export default Transport;



