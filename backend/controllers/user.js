const express = require("express");

//const jwt = require("jsonwebtoken");
const multer = require("multer");
const User = require("../models/user");

const router = express.Router();

const MIME_TYPE_MAP = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE_MAP[file.mimetype];
    let error = new Error("Invalid mime type");
    if (isValid) {
      error = null;
    }
    cb(error, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const ext = MIME_TYPE_MAP[file.mimetype];
    cb(null, name + "-" + Date.now() + "." + ext);
  },
});
exports.signup = (req, res, next) => {

console.log(res.body,"kkkkkkkkkkkkkkkkkkkkkkkkk")
  const url = req.protocol + "://" + req.get("host");
    const post = new User({
      email: req.body.email,
      studentGroup: req.body.studentGroup,
      name: req.body.name,
      password: req.body.password,
      address: req.body.address,
      phone: req.body.phone,
      guardianPhone: req.body.guardianPhone,
      enrolmentNumber: req.body.enrolmentNumber,
      status: req.body.status,
      imagePath: url + "/images/" + req.file.filename,
    });
  post
    .save()
    .then(createdPost => {
      res.status(201).json({
        STATUSCODE: "200",
        // post: {
        //   ...createdPost,
        //   id: createdPost._id
        // }
      });
    })
    .catch(error => {
      res.status(500).json({
        STATUSCODE: "Creating a post failed!"
      });
    });
};
