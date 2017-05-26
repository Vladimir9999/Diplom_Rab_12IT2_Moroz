import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import '../../stylesheets/MessageBox.scss'
class MessageBox extends Component {
  redirect = () => {
    browserHistory.push('/')
  };
  componentDidMount() {
    setTimeout(this.redirect, 1200);
  };
  render() {
    const { text, url} = this.props;
    return (
      <div className="msgBoxContainer" onLoad={this.onClick}>
          <span>{text}</span>
      </div>
    )
  }
}

export default MessageBox;
