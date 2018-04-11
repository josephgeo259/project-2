var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-mongoose-lesson-starter');

var User = require('../models/user');
var Item = require('../models/item');

// Use native promises
mongoose.Promise = global.Promise;

// First we clear the database of existing users and items.
Item.remove({}, function (err) {
    console.log(err);
});

User.remove({}, function (err) {
    console.log(err);
});

// create new users
var geo = new User({
    first_name: 'gj',
    email: 'gj@gmail.com',
    items: [{ name: "Basketball player " }]
});

var bernard = new User({
    first_name: 'bs',
    email: 'bernard@gmail.com',
    items: [{ name: "apple fixer" }]
});

var brianna = new User({
    first_name: 'crickett',
    email: 'crickett@gmail.com',
    items: [{ name: "rock climber" }]
});

// save the users
geo.save(function (err) {
    if (err) console.log(err);

    console.log('User created!');
});

bernard.save(function (err) {
    if (err) console.log(err);

    console.log('User created!');
});

brianna.save(function (err) {
    if (err) console.log(err);

    console.log('User created!');
});