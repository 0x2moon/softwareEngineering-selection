const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.static(path.join(__dirname, 'pages')));

router.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'pages', 'home.html'));
});

router.get('/sobre', function(req, res){
    res.sendFile(path.join(__dirname, 'pages', '/about.html'));
})

router.get('/contato', function(req, res){
    res.sendFile(path.join(__dirname, 'pages', '/contact.html'));
})

app.use('/', router);
app.listen(process.env.port || 5555);