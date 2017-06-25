import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TransportSchema = new Schema({
    id_type: {type: Schema.ObjectId, required: true, ref: 'TransportTypes'},
    number: {type: {number: String, serival: String, region: Number}, required: true},
    model: {type: String, required: true},
    color: {type: String, required: true},
    date: {type: String, required: true},
    techInspection: {type: Boolean, required: true},
    id_carDriver: {type: Schema.ObjectId, required: false, ref: 'Drivers'},
    fuelType: {type: String, required: true},
    engineCapacity: {type: String, required: true}
});

const Transport = mongoose.model('Transport', TransportSchema);




