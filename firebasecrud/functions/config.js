"use strict";
const dotenv = require("dotenv");
dotenv.config();

const {
  port,
  host,
  url,
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} = process.env;

module.exports = {
  port: port,
  host: host,
  url: url,
  firebaseconfig: {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
  },
};
