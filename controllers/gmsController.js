const express = require('express');
const router = express.Router();

const Gm = require("../models/Gm");



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

// gm ROUTE
router.post('/', function (request, response) {

    // grab the new user information from the form POST
    const newGmFormData = request.body;

    // then create a new User 
    
    const gm = new Gm({
        name: newGmFormData.name,
        years_experience: newGmFormData.years_experience,
        league_type: newGmFormData.league_type
    });

    // then save the new user to the database
    gm.save(function (err, gm) {
        if (err) {
            console.log(err);
            return;
        }

        // once the new user has been saved, redirect to the users index page
        response.redirect('/');
    });
});

// user delete
router.get('/delete/:id', function (request, response) {

    
const gmId = request.params.id;
    Gm.findByIdAndRemove(gmId)
        .exec(function (error, Gm) {
            if (error) {
                console.log("Error while deleting User with ID of " + gmId);
                return;
            }
            response.redirect('/');

        });

});


module.exports =router;