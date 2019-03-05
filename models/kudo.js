const mongoose = reqire('mongoose');
const Schema = mongoose.Schema;

let KudoSchema = new Schema({
    title: String,
    Body: String,
    to: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    from: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

const Kudo = mongoose.model('Kudo', KudoSchema);

module.exports = Ksudo;