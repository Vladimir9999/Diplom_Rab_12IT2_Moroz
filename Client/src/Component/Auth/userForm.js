import React, { Component } from 'react';
import { FormControl, Checkbox } from 'react-bootstrap';
import DateTimeField from 'react-bootstrap-datetimepicker';
import '../../../stylesheets/Form.scss'


class UserForm extends Component {
  addUser = () => {
    const { numDriverLicence, dateOfIssue, dateOfExpire, isBadVision } = this;
    this.props.addCarDriver(numDriverLicence.value, new Date(dateOfIssue.value), new Date(dateOfExpire.value), isBadVision.checked);
  };
  prevStep = () => {
    this.props.prevStep();
  };
  render() {
    const {showMessageBox} = this.props.showMessageBox;
    return (
      <div>
        {showMessageBox && <MessageBox text="Клиент успешно зарегистрирован" url="/"/>}
        <fieldset>
          <legend><span className="number">3</span> Введите данные о водителе</legend>
          <input type="text"
                 name="field1"
                 ref={(input) => this.numDriverLicence = input}
                 placeholder="Номер водительских прав"
          />
          <span>Дата выдачи ВУ</span>
          <input type="date"
                 name="field2"
                 ref={(input) => this.dateOfIssue = input}
                 value="2012-06-01"
          />
          <span>Дата окончания действия ВУ</span>
          <input type="date"
                 name="field2"
                 ref={(input) => this.dateOfExpire = input}
                 value="2022-06-01"
          />
          <Checkbox inputRef={(input) => this.isBadVision = input} className="checkBox">
            Для вождения обязательны очки
          </Checkbox>
        </fieldset>
        <input className ="enterBtn" type="button" value="Готово" onClick={this.addUser.bind(this)}/>
        <input className ="regBtn" type="button" value="Назад" onClick={this.prevStep.bind(this)}/>
      </div>
    );
  }
}

export default UserForm;



