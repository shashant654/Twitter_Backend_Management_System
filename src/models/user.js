import mongoose from "mongoose";
import bcryptjs from 'bcryptjs';
import Jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// npm i bcryptjs
userSchema.pre('save', function (next) {
  const user = this;
  const SALT = bcryptjs.genSaltSync(9);
  const encryptedPassword = bcryptjs.hashSync(user.password, SALT);
  user.password = encryptedPassword;
  next();
});


// npm i passport-jwt
userSchema.methods.comparePassword = function compare(password) {
  return bcryptjs.compareSync(password, this.password);
}

// npm i jsonwebtoken
userSchema.methods.genJWT = function generate() {
  return Jwt.sign({ id: this._id, email: this.email }, 'twitter_secret', {
      expiresIn: '1h'
  })
}



const User = mongoose.model("User", userSchema);

export default User;
