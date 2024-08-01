import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
      max: [250, "Tweet cannot be more than 250 characters"],
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
      },
    ],
    // comments: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Comment",
    //   },
    // ],
    // image: {
    //   type: String,
    // },
  },
  { timestamps: true }
);


const Tweet = mongoose.model("Tweet", tweetSchema);
export default Tweet;
// tweetSchema.virtual("contentWithEmail").get(function process() {
//   return `${this.content} \nCreated by: ${this.userEmail}`;
// });

// tweetSchema.pre('save',function(next){
//   console.log('Inside a hook');
//   this.content = this.content + '....'
//   next()
// })

// hashtags: [
  //   {
    // type: mongoose.Schema.Types.ObjectId,
    //     ref: "Hashtag",
    //   },
    // ],
