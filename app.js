const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.listen(5000, ()=>{
    console.log('Servidor funcionando');
});
