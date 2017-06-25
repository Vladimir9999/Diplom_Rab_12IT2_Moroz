import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TransportTypesSchema = new Schema({
    type: { type: String, required: true},
});

const TransportTypes = mongoose.model('TransportTypes', TransportTypesSchema);




