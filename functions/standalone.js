const express = require('express');
const app = express();
const bodyParser = require('body-parser')
process.env.DEBUG = 'actions-on-google:*';
const DialogflowApp = require('actions-on-google').DialogflowApp;

const config = require('./config')
const actions = require('./actions')(config)
const PORT = config.port || process.env.PORT || 80;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.post('/fulfillment', (req, res, next) => new DialogflowApp({request: req, response: res}).handleRequest(actions));

app.listen(PORT, () => console.log("App started on port:", PORT));
