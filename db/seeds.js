require('dotenv').config()

const mongoose = require('mongoose');

const Gm = require('../models/Gm');
const Player = require('../models/Player');
mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection
db.on('open', () => {
    console.log('successfully connected to the db')
})
db.on('error', (error) => {
    console.log(error)
})

// Use native promises
//mongoose.Promise = global.Promise;

const rose = new Gm({
    name: 'RoseDimple',
    years_experience: 0,
    league_type: 'basketball',
    players: [
        new Player({
            name: 'Kobe',
            team: 'Lakers',
            comments: [
                new Comment({
                    description: 'comments1'
                }),
                new Comment({
                    description: 'comments2'
                })]
        }),
        new Player({
            name: 'Mj',
            team: 'Bulls',
            comments: [
                new Comment({
                    description: 'comments1'
                }),
                new Comment({
                    description: 'comments2'
                })]
        })]
})

Gm.remove().then(() => {
    return Gm.insertMany([rose])
}).then(() => {
    console.log('Saved User Successfully')
    db.close()
}).catch((error) => {
    console.log(error)
    db.close()
})
