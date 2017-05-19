import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: String, required: true}, //type String, Number, Date, Buffer, Boolean
    secondName: { type: String, required: true},
    birthdate: {type: Date, required: true},
    age: {type: Number},
    id_driver: {type: String}
});

const Users = mongoose.model('Users', UserSchema);
