import express from 'express';
import bodyParser from 'body-parser';
import * as user from './Utils/UsersUtil';
import * as worker from './Utils/WorkersUtil';
import * as driver from './Utils/DriversUtils';

user.setUpConnection();
//worker.setUpConnection();
//driver.setUpConnection();

const app = express();

app.use( bodyParser.json() );

app.get('/users', (req, res) => {
    user.listUsers().then(data => {
       res.send(data);
    }).catch( () => {
        res.send('Список пуст');
    });
});

app.post('/users/auth', (req, res) => {
    console.log('REQ_BODY ', req.body);
    user.findUserByLogin(req.body.login).then(data => {
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
    user.findUserByLogin(req.body.login)
    .then( data => {
        console.log('Стартуем');
        if (data) {
            throw(new Error('Этот логин уже используется'))
        } else {
            if (req.body.level > 0) {
                return worker.createWorker(req.body);
            } else {
                return driver.createDriver(req.body);
            }
        }
    })
    .then( data => {
        return user.createUser({...req.body, id_status: data._id})
    })
    .then( data => {
        res.send({message: 'Пользователь успешно зарегистрирован' });
    }).catch( (error) => {
        res.status(400).send({message: error.message});
    });
});

app.delete('/users/:id', (req, res) => {
    user.deleteUser(req.params.id).then(data => {
        res.send(data);
    }).catch( () => {
        res.send('При удалении возникла ошибка')
    }
    );
});

app.listen(3000, () => {
    console.log('Listening on port 3000!');
});
