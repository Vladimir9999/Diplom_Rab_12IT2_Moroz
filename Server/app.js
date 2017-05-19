import express from 'express';
import bodyParser from 'body-parser';
import * as db from './Utils/dataBaseUtil.js';

db.setUpConnection();
const app = express();

app.use( bodyParser.json() );

app.get('/users', (req, res) => {
    db.listUsers().then( data => {
       console.log('data: ', data) ;
       res.send(data);
    }).catch( () => {
            res.send('Список пуст');
    });
});

app.post('/users', (req, res) => {
    console.log('USER_REQ:', req.body);
    db.createUser(req.body).then( data => {
        console.log(data);
        res.send(data);
    }).catch( () => {
        res.send('При добавлении возникла ошибка');
    });
});

app.delete('/users/:id', (req, res) => {
    db.deleteUser(req.body).then(data => {
        res.send(data);
    }).catch(
        res.send('При удалении возникла ошибка')
    );
});

app.listen(3000, () => {
    console.log('Listening on port 3000!');
});
