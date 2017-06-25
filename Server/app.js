import express from 'express';
import bodyParser from 'body-parser';
import * as user from './Utils/UsersUtil';
import * as worker from './Utils/WorkersUtil';
import * as driver from './Utils/DriversUtils';
import * as transport from './Utils/TransportUtils';

user.setUpConnection();
//worker.setUpConnection();
//driver.setUpConnection();

const app = express();

app.use( bodyParser.json() );
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
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
app.get('/users/:id', (req, res) => {
    // find user by ID
});
app.get('/getDeptAndWorkPostList', (req, res) => {
    let list = {};
    Promise.all([
        worker.getDeptList(),
        worker.getWorkerPositionList()
    ]).then( data => {
        res.send(data);
    });
});
app.post('/dept', (req, res) => {
    worker.createDept(req.body).then( data => {
        res.send('ОК');
    });
});
app.get('/workpost', (req, res) => {
    worker.getWorkerPositionList().then( data => {
        res.send(data);
    }).catch( () => {
        res.send('Список пуст');
    });
});
app.post('/workpost', (req, res) => {
    worker.createWorkerPosition(req.body).then( data => {
        res.send('ОК');
    });
});
app.get('/Transport', (req, res) => {
    transport.getTransportList().then( data => {
        res.send(data);
    }).catch( () => {
        res.send('Список пуст');
    });
});
app.post('/TransportTypes', (req, res) => {
    transport.createTransport(req.body).then( data => {
        res.send('ОК');
    });
});
app.get('/TransportTypes', (req, res) => {
    transport.getTransportTypesList().then( data => {
        res.send(data);
    }).catch( () => {
        res.send('Список пуст');
    });
});
app.post('/TransportTypes', (req, res) => {
    transport.createTransportTypes(req.body).then( data => {
        res.send('ОК');
    });
});

app.listen(3000, () => {
    console.log('Listening on port 3000!');
});
