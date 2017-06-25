import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ClauseSchema = new Schema({
    num_clause: {type: String, required: true},
    clause: {type: String, required: true}, //Текст статьи
    sum_penalty: {type: String, required: true},
    caution: {type: Boolean, required: false}, // Возможно ли предупреждение
});

const Clause = mongoose.model('Clause', ClauseSchema);

/*JSON.stringify({
    num_clause: '18.9',
    clause: 'Нарушение правил пользования транспортным средством',
    sum_penalty: '23-46 руб',
    caution: true,
});*/




