import mongoose from 'mongoose';
import '../models/Users';

const Users = mongoose.model('Users');

export function setUpConnection() {
    mongoose.connect(`mongodb://localhost/users`);
}

export function listUsers() {
    return Users.find();
}

export function createUser(data) {
    const user = new Users({
        firstName: data.firstName,
        secondName: data.secondName,
        age: data.age || 0
    });
    return user.save();
}

export function deleteUser(id) {
    return Users.findById(id).remove();
    //return Users.remove({});
}

