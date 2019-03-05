const mongoose = reqire('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        trim: true,
        require: 'Username is required'
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;