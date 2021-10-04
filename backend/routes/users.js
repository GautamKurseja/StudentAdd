const express = require("express");
 const userController = require("../controllers/user");


 const extractFile = require("../middleware/file");

const router = express.Router();



router.post("",extractFile, userController.signup);


module.exports = router;