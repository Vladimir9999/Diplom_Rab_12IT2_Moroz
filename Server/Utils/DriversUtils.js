import mongoose from 'mongoose';
import '../models/CarDrivers';

const Drivers = mongoose.model('Drivers');

export function setUpConnection() {
    mongoose.connect(`mongodb://localhost/gai`);
}

export function createDriver(data) {
    const dr = new Drivers({
        level: data.level,
        numDriverLicence: data.numDriverLicence,
        dateOfIssue: data.dateOfIssue,
        dateOfExpire: data.dateOfExpire,
        isBadVision: data.isBadVision
    });
    return dr.save();
}



