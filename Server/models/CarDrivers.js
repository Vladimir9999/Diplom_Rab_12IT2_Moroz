import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CarDriversSchema = new Schema({
    level: {type: Number, required: true},
    numDriverLicence: { type: String, required: true},
    dateOfIssue: {type: Date, required: true}, // Дата выдачи
    dateOfExpire: {type: Date, required: true}, // Дата окончания
    //categories: {type: Arrays},
    isBadVision: {type: Boolean, required: true}
});

const Drivers = mongoose.model('Drivers', CarDriversSchema);

