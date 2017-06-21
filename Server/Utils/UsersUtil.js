import mongoose from 'mongoose';
import '../models/Users';

const Users = mongoose.model('Users');

export function setUpConnection() {
    mongoose.connect(`mongodb://localhost/gai`);
}

export function listUsers() {
    return Users.find();
}

export function createUser(data) {
    console.log('createUser ', data);
    const user = new Users({
        firstName: data.firstName,
        secondName: data.secondName,
        middleName: data.middleName,
        birthDate: data.birthDate || new Date(),
        id_worker: data.level > 0 ? data.id_status : null,
        id_drivers: data.level === 0 ? data.id_status : null,
        login: data.login,
        level: data.level,
        pass: data.pass,
        phoneNum: data.phoneNum,
        email: data.email
    });
    return user.save();

}

export function findUserByLogin(login) {
    return Users.findOne({login: login});
}

export function deleteUser(id) {
    return Users.findById(id).remove();
    //return Users.remove({});
}

