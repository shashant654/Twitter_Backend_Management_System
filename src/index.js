const express = require("express");
const connect = require("./config/database");
const app = express();

const Tweet = require("./models/tweet");
const Comment = require('./models/comment')

// const TweetRepository = require("./repository/tweet-repository");

const TweetService = require('./services/tweet-service')
const { TweetRepository } = require('./repository/index')
const HashtagRepository = require('./repository/hashtag-repository')

app.listen(3000, async () => {
  console.log("server started");
  await connect();
  console.log("Mongo db connected");

 let service = new TweetService()
 const tweet = service.create({
  content: 'this is the last after #writing really #excited , it is going to #memorable '
 })
 console.log(tweet);

  
});
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
