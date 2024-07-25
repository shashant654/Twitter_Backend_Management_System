import mongoose from "mongoose";
export const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/twitter_Dev");
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

// const mongoose = require('mongoose')

// const connect = async () => {
//           await mongoose.connect('mongodb://localhost/twitter_Dev')
// }

// module.exports = connect
// -------------------------------------------
// const mongoose = require('mongoose');

// const connect = async () => {
//   try {
//     await mongoose.connect('mongodb://127.0.0.1/twitter_Dev', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// };

// module.exports = connect;
