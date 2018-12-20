const express = require('express');
const router = express.Router();

// requiring json data of projects
const {projects} = require('../data/data.json');

// index route
router.get('/', (req,res) => {
    res.render('index',{projects})
    });

// about route
router.get('/about', (req,res) => {
    res.render('about')
})
// project route
router.get('/project/:id',(req,res) => {
    projects.forEach(project => {
        if(project.id === req.params.id){
            
            res.render('project',{project})
        }
    });
   
})


module.exports = router;