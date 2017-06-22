import mongoose from 'mongoose';
import '../models/Workers';
import '../models/WorkersPositions';
import '../models/Dept';

const Workers = mongoose.model('Workers');
const WorkersPositions = mongoose.model('WorkersPositions');
const Dept = mongoose.model('Dept');


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

export function createWorkerPosition(data) {
    const wp = new WorkersPositions({
        post: data.post,
    });
    return wk.save();
}

export function createDept(data) {
    const dept = new Workers({
        dept: data.dept,
        address: data.address
    });
    return dept.save();
}

