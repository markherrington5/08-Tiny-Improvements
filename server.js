const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/improvements';

mongoose.connect('mongodb://localhost/tiny-improvements-3-4', { useNewUrlParser: true });

require('./routes/api-routes')(app);

app.listen(PORT, function () {
    console.log(`APP IS NOW LISTENING ON PORT: ${PORT}.`);
})