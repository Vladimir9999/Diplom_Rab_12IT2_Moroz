import React, { Component } from 'react';
import { Table, Col } from 'react-bootstrap';
import '../../stylesheets/Table.scss'
class TableCmp extends Component {
  render() {
    const { column, users} = this.props;
    return (
      <div>
        <Col xs={8} xsOffset={2} className="borderTable">
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
                <tr>
                  <td>1</td>
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
        </Col>
      </div>
    );
  }
}

export default TableCmp;



