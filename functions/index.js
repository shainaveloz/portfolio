require('dotenv').config();
const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();


app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/assets'));
//app.use(express.static(__dirname + '/js'));
//app.use('/assets',  express.static( path.join(__dirname, '/public')));
//app.use('/js',  express.static( path.join(__dirname, '/public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/public', 'index.html'));
});
//
// app.get('/', function(req,res){
//     res.sendFile(path.join(__dirname, '/public', 'contact.html'));
// });

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/public', 'portfolio.html'));
});

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, '/public', 'portfolio-page.html'));
});


const PORT = process.env.PORT;

app.listen(PORT, ()=> {
    console.log("Listening on %d", PORT);
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
