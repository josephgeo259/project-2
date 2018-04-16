const express = require('express');
const router = express.Router();

const Gm = require("../models/Gm");
const Player = require("../models/Player");
const Comment = require("../models/Comment");

// gms route to index
router.get('/', function (request, response) {

    
    Gm.find({})
        .exec(function (error, gmList) {

            if (error) {
                console.log("cant find gms: " + error);
                return;
            }

            
            response.render('gms/index', {
                gmList: gmList
            });
        })
})

// gm create
router.get('/new', function (request, response) {

    // new user form
    response.render('gms/new');
});

// gm route
router.post('/', function (request, response) {

    // grab the new user information from the form post
    const newGmFormData = request.body;

    // then create a new gm 
    
    const gm = new Gm({
        name: newGmFormData.name,
        years_experience: newGmFormData.years_experience,
        league_type: newGmFormData.league_type
    });

    gm.save(function (err, gm) {
        if (err) {
            console.log(err);
            return;
        }

        response.redirect('../');
    });
});

router.get('/:id/edit', function (request, response) {
    console.log('hello from edit')
    var gmId = request.params.id;

    Gm.findById(gmId)
        .exec(function (error, gm) {
            response.render('gms/edit', {
                gm: gm
            });
            if (error) {
                console.log("Error while retrieving user with ID of " + gmId);
                console.log("Error message: " + error);
                return;

            }

        });
});

// user show route
router.get('/:id', function (request, response) {

// grab the ID to show gm
var gmId = request.params.id;

    
    Gm.findById(gmId)
        .exec(function (error, gm) {

            if (error) {
                console.log("Err while retrieving gm with ID of " + gmId);
                console.log("Err message: " + error);
                return;
            }

            response.render('gms/show', {
                gm : gm,
            });
        });

});
// gm edit route


// Gm update route
router.put('/:id', function (request, response) {
var gmId = request.params.id;
var newGmInfo = request.body;

    // then find the user in the database and update its info to
   
    Gm.findByIdAndUpdate(gmId, newGmInfo, { new: true })
        .exec(function (error, gm) {

            if (error) {
                console.log("Error while updating User with ID of " + gmId);
                return;
            }

            response.redirect(`/${gmId}`);

        });

});

// delete
router.delete('/:id', (req, res) => {

    // Use the params id to find and remove the Company
    Gm.findByIdAndRemove(req.params.id).then(() => {
        res.redirect(`/`)
    })
})

module.exports =router;