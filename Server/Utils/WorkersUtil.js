import mongoose from 'mongoose';
import '../models/Workers';
import '../models/WorkerPositions';
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
        id_post: data.id_post,
        id_dept: data.id_dept
    });
    return wk.save();
}

export function findWorkerByID(id) {
    return Workers.findOne({_id: id});
}

export function getWorkerPositionList() {
    return WorkersPositions.find();
}

export function getDeptList() {
    return Dept.find();
}
// Создать должность
export function createWorkerPosition(data) {
    const wp = new WorkersPositions({
        post: data.post,
    });
    return wp.save();
}
//Создать депортамент
export function createDept(data) {
    const dept = new Dept({
        name: data.name,
        address: data.address
    });
    return dept.save();
}

