require('dotenv').config()

const mongoose = require('mongoose');

const Gm = require('../models/Gm');
const Player = require('../models/Player');
const Comment = require('../models/Comment');


mongoose.connect('mongodb://localhost/General_Mangers_Playbook');

const db = mongoose.connection
db.on('open', () => {
    console.log('successfully connected to the db')
})
db.on('error', (error) => {
    console.log(error)
})

const rose = new Gm({
    name: 'RoseDimple',
    years_experience: 0,
    league_type: 'basketball',
    players: [
        new Player({
            name: 'Kobe',
            team: 'lakers',
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
            team: 'bulls',
            comments: [
                new Comment({
                description: 'comments1'
            }),
                new Comment({
                description: 'comments2'
            })]
        })]
})

const joshi = new Gm({
    name: 'JJballer',
    years_experience: 7,
    league_type: 'nfl',
    players: [
        new Player({
            name: 'jerry rice',
            team: 'radiers',
            comments: [
                new Comment({
                    description: 'comments3'
                }),
                new Comment({
                    description: 'comments4'
                })]
        }),
        new Player({
            name: 'julio',
            team: 'falcons',
            comments: [
                new Comment({
                    description: 'comments3'
                }),
                new Comment({
                    description: 'comments4'
                })]
        })]
})

const todd = new Gm({
    name: 'Bennet',
    years_experience: 2,
    league_type: 'basketball',
    players: [
        new Player({
            name: 'westbrook',
            team: 'thunder',
            comments: [
                new Comment({
                    description: 'comments1'
                }),
                new Comment({
                    description: 'comments2'
                })]
        }),
        new Player({
            name: 'curry',
            team: 'warriors',
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
    return Gm.insertMany([rose,joshi,todd])
}).then((gms) => {
    console.log(gms)
    console.log('Saved User Successfully')
    db.close()
}).catch((error) => {
    console.log(error)
    db.close()
})

