const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
  email: { type: String },
  studentGroup: { type: String },
  name: { type: String },
  password:{type: String},
  address: { type: String },
  phone: { type: String },
  guardianPhone: { type: String },
  enrolmentNumber: { type: String },
  status:{type:String},
  imagePath: { type: String },
});


module.exports = mongoose.model("student", userSchema);

