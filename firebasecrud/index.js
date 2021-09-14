"use strict";
const express = require("express");
const cors = require("cors");
const config = require("./config.js");
const studentRoutes = require("./routes/student-routes");
const app = express();

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

app.use(express.json());
app.use(cors());

app.use("/api", studentRoutes.routes);

app.listen(config.port);
