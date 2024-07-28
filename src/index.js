import express from "express";
import { connect } from "./config/database.js";
import bodyParser from "body-parser";

import passport from "passport";
import { passportAuth } from "./config/jwt-middleware.js";

import apiRoutes from "./routes/index.js";
import { UserRepository, TweetRepository } from "./repository/index.js";
import LikeService from "./services/like-service.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
passportAuth(passport);
app.use("/api", apiRoutes);

app.listen(3000, async () => {
  console.log("server started");
  await connect();
  console.log("MongoDB connected");
});
// const userRepo = new UserRepository();
// const tweetRepo = new TweetRepository();
// const tweets = await tweetRepo.getAll(0, 10);
// const user = await userRepo.create({
//   email: "pandey@gmail.com",
//   password: "123456",
//   name: "Shashant",
// });

// const likeService = new LikeService();

// if (tweets.length > 0) {
//   console.log(`Tweet ID: ${tweets[0]._id}, User ID: ${user._id}`);
//   await likeService.toggleLike(tweets[0]._id, "Tweet", user._id);
// } else {
//   console.log("No tweets found to like.");
// }

//************************************************
// let servc = new service()
// await servc.create({content: 'my other #coDE #working or #Not ?'})

//************************************************

//  let service = new TweetService()
//  const tweet =await service.create({
//   content: 'is #tweets working properly '
//  })
//  console.log(tweet);
//************************************************

// let repo = new HashtagRepository()
// let response = await repo.findByName(['Trend','Excited'])
// console.log(response);
// response = response.map(tags => tags.title)
// console.log(response);

//************************************************

// let repo = new HashtagRepository()
//   await repo.bulkCreate([
//     {
//       title: 'Trend',
//       tweets: []
//     },
//     {
//       title: 'Excited',
//       tweets: []
//     },
//     {
//       title: 'Python',
//       tweets: []
//     },
//     {
//       title: 'Java',
//       tweets: []
//     },
//     {
//       title: 'Django',
//       tweets: []
//     }
//   ])

//************************************************

// const tweetRepo = new TweetRepository();
// const tweet = await tweetRepo.create({content: 'With hooks'})
// console.log(tweet);

//************************************************
// const tweetRepo = new TweetRepository();
//   const tweet = await tweetRepo.getAll(0 ,4)
//   console.log(tweet[0].contentWithEmail);
//************************************************
//  PAGINATION
// const tweetRepo = new TweetRepository();
//   const tweet = await tweetRepo.getAll(2,4)
//   console.log(tweet);
//************************************************

// const tweetRepo = new TweetRepository();
//   const tweet = await tweetRepo.getWithComments('66a03cfd485459d4ec2e48b5')
//   console.log(tweet);

//************************************************

// const tweetRepo = new TweetRepository();
// const tweet = await tweetRepo.create({content:'Tweat with Comment schema'})
// console.log(tweet);
// const comment = await Comment.create({content: 'new comment'})
// tweet.comments.push(comment)
// await tweet.save()
// console.log(tweet);

//************************************************

//  const tweetRepo = new TweetRepository();
//   const tweet = await tweetRepo.create({content: 'tweet with a comment'})
//   console.log(tweet);
//   tweet.comments.push({content: 'first comment here'})
//   await tweet.save()
//   console.log(tweet);
//************************************************

// const tweetRepo = new TweetRepository();
// const tweet = await tweetRepo.update("66a026b1814c6b5d2abf8e9f", {
//   content: "i am Shashant pandey",
// });
// console.log(tweet);
//************************************************

// NOTE:-- when we try to call by id or update then mongoDB bydefault update the docs properly btt  returns previous data

//************************************************

// const tweetRepo = new TweetRepository()
// const tweet = await tweetRepo.get('66a026b1814c6b5d2abf8e9f')
// console.log(tweet);
//************************************************
//   const tweet = await Tweet.create({
//           content: 'second tweet',
//           userEmail: 'abc@.com'
//   })
//   console.log(tweet);
//************************************************

// const tweets = await Tweet.find({userEmail: 'a@b.com'})
// console.log(tweets);
// WE CAN EVEN QUERY THE DATABASE USING MONGO

//************************************************

// const tweet = await Tweet.findById('66a026b1814c6b5d2abf8e9f')
// tweet.userEmail = 'bca@a.com'
// tweet.save()
// console.log(tweet);
// WE CAN UPDATE TOO ANY DATA USING MONGOOSE
