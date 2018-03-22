'use strict';

process.env.DEBUG = 'actions-on-google:*';
const App = require('actions-on-google').DialogflowApp;
const functions = require('firebase-functions');

const ACTION_GET_BALANCE = 'get_balance';

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
    const app = new App({request, response});

    console.log('Request headers: ' + JSON.stringify(request.headers));
    console.log('Request body: ' + JSON.stringify(request.body));

    // c. The function that generates the silly name
    function getBalance (app) {
        app.tell(
            `Your balance is 100 million Dolla.`
        );
    }

    // d. build an action map, which maps intent names to functions
    let actionMap = new Map();
    actionMap.set(ACTION_GET_BALANCE, getBalance);

    app.handleRequest(actionMap);
});
