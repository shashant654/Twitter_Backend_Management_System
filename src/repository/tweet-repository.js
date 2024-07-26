import mongoose from "mongoose";
import Tweet from "../models/tweet.js";
import CrudRepository from "./crud-repository.js";

class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }

  // Note :- most probably mongoose gives us static method
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getWithComments(id) {
    try {
      const tweet = await Tweet.findById(id)
        .populate({ path: "comments" })
        .lean();
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async update(tweetId, data) {
    try {
      // here {new:true} if write then mongodb return v latest data ko hi krega otherwise return by default previous wala krega and update only latest wala krega
      const tweet = await Tweet.findByIdAndUpdate(tweetId, data, { new: true });
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(offset, limit) {
    try {
      // const tweet = await Tweet.find().limit(limit);
      const tweet = await Tweet.find().skip(offset).limit(limit);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  //     Note:- populate method only present in mongodb query promise do not have populate  method that's why find() method ko simple bnaye hai
  // find(id) {
  //   try {
  //     const tweet = Tweet.findById(id);
  //     return tweet;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async find(id) {
    try {
      const tweet = await Tweet.findById(id).populate({path:"likes"});;
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
}

export default TweetRepository;

// async destroy(id) {
//   try {
//     const tweet = await Tweet.findByIdAndRemove(id);
//     return tweet;
//   } catch (error) {
//     console.log(error);
//   }
// }
// -------------------------------------------
// async get(id) {
//   try {
//     const tweet = await Tweet.findById(id);
//     return tweet;
//   } catch (error) {
//     console.log(error);
//   }
// }
