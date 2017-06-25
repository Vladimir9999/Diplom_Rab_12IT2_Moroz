import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MessagesSchema = new Schema({
    id_mailer: {type: Schema.ObjectId, required: true, ref: 'Users'},
    id_addressee: {type: Schema.ObjectId, required: true, ref: 'Users'},
    text: {type: String, required: true},
    date: {type: String, required: true}
});

const Messages = mongoose.model('Messages', MessagesSchema);




