// use improvements;
const mongoose = require("mongoose");

const User = require("./models/user");

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/improvements';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

User.bulkWrite([
    {
        insertOne: {
            document: {
                name: "Craig"
            }
        }
    },
    {
        insertOne: {
            document: {
                name: "Craigbert"
            }
        }
    },
    {
        insertOne: {
            document: {
                name: "Craigalina"
            }
        }
    },
    {
        insertOne: {
            document: {
                name: "Craiggy"
            }
        }
    },
    {
        insertOne: {
            document: {
                name: "Craigson"
            }
        }
    },
    {
        insertOne: {
            document: {
                name: "Craigster"
            }
        }
    }
]).then(function () {
    mongoose.connection.close();
});