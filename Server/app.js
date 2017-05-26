import express from 'express';
import bodyParser from 'body-parser';
import * as db from './Utils/UsersUtil.js';

db.setUpConnection();
const app = express();

app.use( bodyParser.json() );

app.get('/users', (req, res) => {
    db.listUsers().then( data => {
       res.send(data);
    }).catch( () => {
        res.send('Список пуст');
    });
});

app.post('/users/auth', (req, res) => {
    console.log('REQ_BODY ', req.body);
    db.userAuth(req.body).then( data => {
        console.log('DATA ', data);
        if (data && data.pass === req.body.pass) {
            res.send(data);
        } else {
            throw(new Error('Логин или пароль введен неверно'))
        }
    }).catch( (error) => {
        res.status(401).send({message: error.message});
    });
});

app.post('/users', (req, res) => {
    db.findUserByLogin(req.body.login)
    .then( data => {
        if (data) {
            throw(new Error('Этот логин уже используется'))
        } else {
            return db.createUser(req.body);
        }
    })
    .then( data => {
        res.send({message: 'Пользователь успешно зарегистрирован' });
    }).catch( (error) => {
        res.status(400).send({message: error.message});
    });
});

app.delete('/users/:id', (req, res) => {
    db.deleteUser(req.params.id).then(data => {
        res.send(data);
    }).catch( () => {
        res.send('При удалении возникла ошибка')
    }
    );
});

app.listen(3000, () => {
    console.log('Listening on port 3000!');
});
