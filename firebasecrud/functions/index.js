"use strict";
const express = require("express");
const cors = require("cors");
const config = require("./config.js");
const functions = require("firebase-functions");
const studentRoutes = require("./routes/student-routes");
const practice = express();
practice.use(express.urlencoded({ extended: false }));

// var admin = require("firebase-admin");

// var serviceAccount = require("./testingnodefirebase-firebase-adminsdk-3r3mq-c1b23f2251.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://testingnodefirebase-default-rtdb.firebaseio.com",
// });

practice.use(express.json());
practice.use(cors("*"));

practice.use("/api", studentRoutes.routes);
practice.get("/", (req, res) => {
  msg: "hello";
});
exports.practice = functions.https.onRequest(practice);
