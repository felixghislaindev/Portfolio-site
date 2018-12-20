// requiring express
const express = require('express');

// creating express app
const app = express();

// setting up view engine 
app.set('view engine', 'pug')

// serving static file
app.use('/static',express.static('public'));

// setting up index route
const router = require('./routes')
app.use('/',router);

// handleling 404 
app.use((req,res,next) =>{
    res.status(404)
    res.redirect('/');
})

//lsitening to port 3000
app.listen(3000, () => console.log('app listening on port 3000..'));