var http = require("http");

var GPORT = 7000;
var BPORT = 7500;

function handleRequestPortG(req, res)
{
    res.end("Hey! Welcome to your reviews: \n You are very good student" + req.url);
}

function handleRequestPortB(req, res)
{
    res.end("Hey! Welcome to your reviews: \n You are not good student. Please Improve Yourself" + req.url);
}

var serverG = http.createServer(handleRequestPortG);
var serverB = http.createServer(handleRequestPortB);

serverG.listen(GPORT, () => {

    console.log("Server Listening on: http://localhost:" + GPORT);
});

serverB.listen(BPORT, () => {

console.log("Server Listening on: http://localhost:" + BPORT);
});