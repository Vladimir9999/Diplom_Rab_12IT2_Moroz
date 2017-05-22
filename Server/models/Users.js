import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: String, required: true}, //type String, Number, Date, Buffer, Boolean
    secondName: { type: String, required: true},
    middleName: { type: String, required: true}, // Отчество
    birthdate: {type: Date, required: true},
    age: {type: Number},
    id_driver: {type: String},
    login: {type: String, required: true},
    pass: {type: String, required: true},
    phone_num: {type: String, required: true}
});

const Users = mongoose.model('Users', UserSchema);
