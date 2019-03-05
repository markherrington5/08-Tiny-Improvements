const User = require('../models/user');
const Kudo = require('../models/kudo');

module.exports = function (app) {
    // grabs kudos and populates the to and from properties from the user collection
    app.get('/api/kudo', function (req, res) {
        Kudo.find({})
            .populate('to')
            .populate('from')
            .then(function (data) {
                res.json(data);
            }).catch(function (err) {
                res.json(err);
            });
    });

    // retrieves all users from the users collection
    app.get('/api/user', function (req, res) {
        User.find({}).then(function (data) {
            res.json(data);
        }).catch(function (err) {
            res.json(err);
        });
    });

    // adds a new kudo to kudos collection
    app.post('/api/kudo', function (req, res) {
        const newKudo = {
            title: req.body.title,
            body: req.body.body,
            to: req.body.to,
            from: req.body.from
        }

        Kudo.create(newKudo).then(function (data) {
            res.json(data).then(function (err) {
                res.json(err);
            });
        });
    });
};