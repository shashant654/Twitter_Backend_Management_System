import mongoose from "mongoose";
import bcryptjs from 'bcryptjs';


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

userSchema.pre('save', function (next) {
  const user = this;
  const SALT = bcryptjs.genSaltSync(9);
  const encryptedPassword = bcryptjs.hashSync(user.password, SALT);
  user.password = encryptedPassword;
  next();
});



const User = mongoose.model("User", userSchema);

export default User;
