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

JSON.stringify({
    id_type: '595017dbe7f6eb1b00499c1f',
    number: {
        number: '0001',
        region: 7,
        serial: 'AA'
    },
    model: 'Lexus LX 470',
    color: 'Серебристо-голубой',
    date: '2012',
    techInspection: true,
    id_carDriver: '594eeda8eb4ad404e46913c4',
    fuelType: 'Бензин',
    engineCapacity: '4.7л'
})


