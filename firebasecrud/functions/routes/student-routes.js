const express = require("express");
const {
  addStudent,
  getallstudent,
  updatestudent,
  deletestudent,
} = require("../controllers/studentctrl");

const router = express.Router();

router.post("/addstudent", addStudent);
router.get("/getallstudent", getallstudent);
router.put("/update/:id", updatestudent);
router.delete("/delete/:id", deletestudent);
module.exports = {
  routes: router,
};
