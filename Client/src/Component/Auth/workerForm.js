import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

import '../../../stylesheets/Form.scss'


class WorkerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      depts: [],
      posts: []
    }
  };
  componentWillMount() {
    fetch('http://192.168.1.38:3000/getDeptAndWorkPostList')
      .then(res => {
        this.setState({status: res.status});
        return res;
      }).then(res => res.json())
      .then(res => {
        if (res[0][0].post) {
          this.setState({posts: res[0], depts: res[1]});
        } else {
          this.setState({posts: res[1], depts: res[0]});
        }
     })
  }
  addUser = () => {
    const { dept, post} = this;
    this.props.addWorker(dept.value, post.value);
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
          <legend><span className="number">3</span> Введите данные о сотруднике</legend>
          <span>Выберете должность</span>
          <FormControl
            componentClass="select"
            inputRef={(input) => this.post = input}
          >
            {this.state.posts.map((el, ind) => {
              return (
                <option key={ind} value={el._id}>{el.post}</option>
              );
            })}
          </FormControl>
          <span>Выберете отделение</span>
          <FormControl
            componentClass="select"
            inputRef={(input) => this.dept = input}
          >
            {this.state.depts.map((el, ind) => {
              return (
                <option key={ind} value={el._id}>{el.name}</option>
              );
            })}
          </FormControl>
        </fieldset>
        <input className ="enterBtn" type="button" value="Готово" onClick={this.addUser.bind(this)}/>
        <input className ="regBtn" type="button" value="Назад" onClick={this.prevStep.bind(this)}/>
      </div>
    );
  }
}

export default WorkerForm;



