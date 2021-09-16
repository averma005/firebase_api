"use strict";
//const { db } = require("../db");
const firebase = require("firebase-admin");
const Student = require("../models/student");
const studentRoutes = require("../routes/student-routes");
var serviceAccount = require("../testingnodefirebase-firebase-adminsdk-3r3mq-c1b23f2251.json");
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://testingnodefirebase-default-rtdb.firebaseio.com",
});
const firestore = firebase.firestore();

const addStudent = async (req, res, nex) => {
  try {
    const data = req.body;
    console.log(req.body);
    await firestore.collection("student").doc().set(data);
    res.send("record saved");
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getallstudent = async (req, res, next) => {
  try {
    const student = await firestore.collection("student");
    const data = await student.get();
    const studentarray = [];
    if (data.empty) {
      res.status(401).send("no data found");
    } else {
      data.forEach((doc) => {
        const student = new Student(doc.id, doc.data().name, doc.data().marks);
        studentarray.push(student);
      });
      res.send(studentarray);
    }
  } catch (error) {
    console.log("error:" + error);
  }
};
const updatestudent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const student = await firestore.collection("student").doc(id);
    await student.update(data);
  } catch (error) {
    console.log("eror in updation");
  }
};
const deletestudent = async (req, res, next) => {
  try {
    const id = req.params.id;
    await firestore.collection("student").doc(id).delete();
    res.send("its deleted");
  } catch (error) {
    console.log("eror in deletion");
  }
};

module.exports = { addStudent, getallstudent, updatestudent, deletestudent };
