import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const WorkersPositionsSchema = new Schema({
    post: { type: String, required: true},
});

const WorkersPositions = mongoose.model('WorkersPositions', WorkersPositionsSchema);



