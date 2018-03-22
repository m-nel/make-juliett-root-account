const express = require('express');
const app = express();
const bodyParser = require('body-parser')
process.env.DEBUG = 'actions-on-google:*';
const DialogflowApp = require('actions-on-google').DialogflowApp;

const PORT = process.env.PORT || 80;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());

app.post("/fulfillment", (req, res, next) => {
    const app = new DialogflowApp({request: req, response: res})

    let actionMap = new Map();
    actionMap.set('get_balance', (app) => app.tell(`Many money for you :)\nYour balance is 100 million Dolla.`));
    app.handleRequest(actionMap);
});

app.listen(PORT, () => console.log("App started on port:", PORT));
