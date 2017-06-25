import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PenaltySchema = new Schema({
    id_clause: {type: Schema.ObjectId, required: true, ref: 'Clause'}, //Статья
    id_user: {type: Schema.ObjectId, required: true, ref: 'Users'},
    dateOfContravention: {type: String, required: true}, // Дата нарушения
    typePenalty: {type: String, required: true},
    dateOfinfliction: {type: String, required: true}, // дата наложения
    summa: {type: Number, required: false}
});

const Penalty = mongoose.model('Penalty', PenaltySchema);





