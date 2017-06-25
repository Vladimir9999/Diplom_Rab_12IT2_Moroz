import mongoose from 'mongoose';
import '../models/Transport';
import '../models/TransportTypes';

const Transport = mongoose.model('Transport');
const TransportTypes = mongoose.model('TransportTypes');


export function setUpConnection() {
    mongoose.connect(`mongodb://localhost/gai`);
}

export function createTransport(data) {
    const tr = new Transport({
        id_type: data.id_type,
        number: data.number,
        model: data.model,
        color: data.color,
        date: data.date,
        techInspection: data.techInspection,
        id_carDriver: data.id_carDriver,
        fuelType: data.fuelType,
        engineCapacity: data.engineCapacity
    });
    return tr.save();
}
export function getTransportList() {
    return Transport.find();
}
export function getTransportTypesList() {
    return TransportTypes.find();
}
export function createTransportTypes(data) {
    const tt = new TransportTypes({
        type: data.type,
    });
    return tt.save();
}



