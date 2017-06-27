import React, { Component } from 'react';
import '../../stylesheets/Messages.scss'
import { Row,Col } from 'react-bootstrap';
import { Link } from 'react-router';

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msgList: [
        {
          id_mailer: "93dc70573096212f46f2198",
          id_addressee: "594eeda8eb4ad404e46913c4",
          nameAddresse: "Админ Админ Админыч",
          text :"Здравствуйте! Александр Николаевич спасибо, что зарегистрировались в нашей системе.",
          "date":"26.06.2017"
        },
        {
          id_mailer: "93dc70573096212f46f2198",
          id_addressee: "594eeda8eb4ad404e46913c4",
          nameAddresse: "Админ Админ Админыч",
          text :"Здраствуйте Александр! Через 1 месяц у вас закончится срок действия водительского удостоверения, не забудьте их обменять",
          "date":"23.06.2017"
        },
        {
          id_mailer: "93dc70573096212f46f2198",
          id_addressee: "594eeda8eb4ad404e46913c4",
          nameAddresse: "Админ Админ Админыч",
          text :"Здравствуйте Александр! Спасибо, что во время обменяли свое водительско удостоверение",
          "date":"26.06.2017"
        },
      ]
    }
  }
  componentWillMount() {
    let id;
/*    if (localStorage.getItem('currentUser')) {
      id = JSON.parse(localStorage.getItem('currentUser'))._id;
      fetch('http://192.168.1.38:3000/messages/' + id)
        .then(res => {
          this.setState({status: res.status});
          return res;
        }).then(res => res.json())
        .then(res => {
          this.setState({msgList: res});
        })
    }*/
  }
  render() {
    const { msgList } = this.state;
    return (
      <div>
        <h2>У вас {msgList.length} новых сообщения</h2>
        {msgList.map((el, ind) => {
          return (
            <Row className="MsgItem" key={ind}>
              <Row className="MsgAressee">
                <span><b>От: </b>{el.nameAddresse}</span>
              </Row >
              <Row className="MsgText">
                {el.text}
              </Row>
              <Row>
                <Link to="/">Ответить  </Link>
                <Link to="/">  Удалить</Link>
              </Row>
            </Row>
          );
        })}
      </div>
    );
  }
}

export default Logo;


