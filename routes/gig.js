const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');
const Sequelize = require('sequelize');


//get GIG List
router.get('/' , (req, res) => {
    Gig.findAll()
    .then( (gigs) => {
        console.log(gigs);
        res.render('gigs' , {
            gigs
        });
    })
    .catch( (err)=> console.log(err))
})

//Display add Gig Form
router.get('/add' , (req, res)=> {
    res.render('add');
})

//Add a GIG 
router.post('/add' , (req, res) => {
    const data = {
        title:"shubham",
        technologies:"JS",
        description:"lorem ipsum",
        budget: "30000",
        contact_email: "shubham@test.com"
    }

    let {title, technologies, description, budget, contact_email} = data;

    //insert intro table
    Gig.create({
        title,
        technologies,
        description,
        budget,
        contact_email
    })
    .then( (gigs) => res.redirect('/gigs'))
    .catch( (err) => console.log(err))
})

module.exports = router;