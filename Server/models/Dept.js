import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const DeptSchema = new Schema({
    name: { type: String, required: true},
    address: { type: String, required: true},
});

const Dept = mongoose.model('Dept', DeptSchema);




