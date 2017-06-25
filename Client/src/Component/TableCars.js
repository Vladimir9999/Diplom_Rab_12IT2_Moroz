import React, { Component } from 'react';
import { Table, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router';
import '../../stylesheets/Table.scss'
class TableCars extends Component {
  render() {
    const { column, cars} = this.props,
      tooltip = (
        <Tooltip id="tooltip">Личное дело</Tooltip>
      );
    return (
      <div>
        <Table striped bordered condensed hover>
          <thead>
          <tr>
            {column.map((el, ind) => {
              return (
                <th key={ind}>{el}</th>
              );
            })}
          </tr>
          </thead>
          <tbody>
          {cars.map((el, ind) => {
            return (
              <tr key={ind}>
                <OverlayTrigger placement="left" overlay={tooltip}>
                  <td>
                    <Link to={`/transport/${el._id}`}><div className='card_icon'/></Link>
                  </td>
                </OverlayTrigger>
                <td>{el.model}</td>
                <td>{el.color}</td>
                <td>{el.number.number + ' ' + el.number.serial + '-' + el.number.region}</td>
                <td>{el.date}</td>
                <td>{el.phoneNum}</td>
                <td>{el.techInspection}</td>
              </tr>
            );

          })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TableCars;




