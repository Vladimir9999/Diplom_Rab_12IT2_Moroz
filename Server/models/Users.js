import mongoose from 'mongoose';
const Schema = mongoose.Schema,
     { ObjectId } = Schema;

const UserSchema = new Schema({
    firstName: { type: String, required: true}, //type String, Number, Date, Buffer, Boolean
    secondName: { type: String, required: true},
    middleName: { type: String, required: true}, // Отчество
    birthDate: {type: Date, required: true},
    login: {type: String, required: true},
    pass: {type: String, required: true},
    phoneNum: {type: String, required: true},
    email: {type: String, required: false},
    level: {type: Number, required: true},
    id_worker: {type: ObjectId, required: false, ref: 'Workers'},
    id_driver: {type: ObjectId, required: false, ref: 'Drivers'}
});

const Users = mongoose.model('Users', UserSchema);
