import mongoose from 'mongoose';
import '../models/Workers';

const Workers = mongoose.model('Workers');

export function setUpConnection() {
    mongoose.connect(`mongodb://localhost/gai`);
}

export function createWorker(data) {
    const wk = new Workers({
        level: data.level,
        post: data.post,
        dept: data.dept,
        address: data.address
    });
    return wk.save();
}


