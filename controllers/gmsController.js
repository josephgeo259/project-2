const express = require('express');
const router = express.Router();

const Gm = require("../models/Gm");


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
        response.redirect('../');
    });
});

// user show route
router.get('/:id', function (request, response) {

// grab the ID to show gm
var gmId = request.params.id;

    
    Gm.findById(gmId)
        .exec(function (error, gm) {

            if (error) {
                console.log("Error while retrieving user with ID of " + gmId);
                console.log("Error message: " + error);
                return;
            }

            // once we've found the user, pass the user object to Handlebars to render
            response.render('gms/show', {
                gm : gm,
            });
        });

});
//edit
router.get('/:id/edit', (req, res) => {

    // Find single parm by id
    Gm.findById(req.params.id).then((gm) => {

        //render on handle bars
        res.render('gms/edit', {
            id: req.params.id,
            gm: gm
        })
    })
})

router.patch('/:id', (req, res) => {

    // route to update gms
    Gm.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        location: req.body.location

        // Make sure you add thie { new: true } flag, else your data may not refresh right away
    }, { new: true }).then((updatedGmS) => {

        // Redirect to the show page once it successfully updates
        res.redirect(`/gms/show${updatedGms._id}`)
    })
})

// delete
router.delete('/:id', (req, res) => {

    // Use the params id to find and remove the Company
    Gm.findByIdAndRemove(req.params.id).then(() => {
        res.redirect(`/`)
    })
})

module.exports =router;