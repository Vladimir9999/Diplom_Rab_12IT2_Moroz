import mongoose from 'mongoose';
import '../models/Clause';
import '../models/Penalty';
import '../models/Messages';

const Clause = mongoose.model('Clause');
const Penalty = mongoose.model('Penalty');
const Messages = mongoose.model('Messages');



export function setUpConnection() {
    mongoose.connect(`mongodb://localhost/gai`);
}

export function createPenalty(data) {
    const pn = new Workers({
        id_clause: data.id_clause, //Статья
        id_user: data.id_user,
        dateOfContravention: data.dateOfContravention,
        typePenalty: data.typePenalty,
        dateOfinfliction: data.dateOfinfliction,
        summa: data.summa
    });
    return pn.save();
}
export function createClause(data) {
    const clause = new Clause({
        num_clause: data.num_clause,
        clause: data.clause, //Текст статьи
        sum_penalty: data.sum_penalty,
        caution: data.caution,
    });
    return clause.save();
}
export function getPenalty() {
    return Penalty.find();
}

export function getClause() {
    return Clause.find();
}

export function createMessages(data) {
    const msg = new Messages({
        id_mailer: data.id_mailer,
        id_addressee: data.id_addressee,
        text: data.text,
        date: data.date
    });
    return msg.save();
}
export function getMessages() {
    return Messages.find();
}


