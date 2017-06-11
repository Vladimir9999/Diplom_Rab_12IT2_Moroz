import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const WorkersSchema = new Schema({
    level: { type: Number, required: true}, // 1 - Инспектор, 2 - Администратор, 3 -  Глава отделения, 4 - Бог(0 использует юзер)
    post: { type: String, required: true},
    dept: { type: String, required: true},
    address: {type: String, required: true}
});

const Workers = mongoose.model('Workers', WorkersSchema);


