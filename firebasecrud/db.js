const firebase = require("firebase");
const config = require("./config.js");
const db = firebase.initializeApp(config.firebaseconfig);
module.exports = { db };
