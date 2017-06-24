import React, { Component } from 'react';
import { Table, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router';
import '../../stylesheets/Table.scss'
class TableCmp extends Component {
  render() {
    const { column, users} = this.props,
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
            {users.map((el, ind) => {
              let date = new Date(el.birthDate),
                  bd = date.getDay() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
              return (
                <tr key={ind}>
                  <OverlayTrigger placement="left" overlay={tooltip}>
                    <td>
                      <Link to={`/Workers/${el.id_worker}`}><div className='card_icon'/></Link>
                    </td>
                  </OverlayTrigger>
                  <td>{el.secondName}</td>
                  <td>{el.firstName}</td>
                  <td>{el.middleName}</td>
                  <td>{bd}</td>
                  <td>{el.phoneNum}</td>
                  <td>{el.email}</td>
                </tr>
              );

            })}
            </tbody>
          </Table>
      </div>
    );
  }
}

export default TableCmp;



