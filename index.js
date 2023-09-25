require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.set('views', path.join(__dirname, 'public'));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

router.get('/', function(req, res){
    res.render('pages/home',{pageTitle:'Home'});
})

router.get('/sobre', function(req, res){
    res.render('pages/about',{pageTitle:'sobre'});
})

router.get('/contato', function(req, res){
    res.render('pages/contact',{pageTitle:'contact'});
})

app.use('/', router);
app.listen(process.env.PORT);