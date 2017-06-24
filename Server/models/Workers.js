import mongoose from 'mongoose';
const Schema = mongoose.Schema,
    { ObjectId } = Schema;

const WorkersSchema = new Schema({
    level: { type: Number, required: true}, // 1 - Инспектор, 2 - Администратор, 3 -  Глава отделения, 4 - Бог(0 использует юзер)
    id_post: {type: ObjectId, required: false, ref: 'WorkerPosition'},
    id_dept: {type: ObjectId, required: false, ref: 'Dept'},
});

const Workers = mongoose.model('Workers', WorkersSchema);


