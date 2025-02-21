// ***************************************
import { LikeRepository, TweetRepository } from "../repository/index.js";
import Tweet from "../models/tweet.js";

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }

  async toggleLike(modelId, modelType, userId) {
    let likeable;
    if (modelType === "Tweet") {
      likeable = await this.tweetRepository.find(modelId);
    } else if (modelType === "Comment") {
      // TODO: Handle comment case
    } else {
      throw new Error("unknown model type");
    }

    if (!likeable) {
      throw new Error("Likeable entity not found");
    }

    const exists = await this.likeRepository.findByUserAndLikeable({
      user: userId,
      onModel: modelType,
      likeable: modelId,
    });

    console.log(`Like exists: ${exists ? "Yes" : "No"}`);

    if (exists) {
      likeable.likes.pull(exists._id);
      await likeable.save();
      await exists.remove();
      return false; // Like removed
      //       // NOte :- if like already kiya hua hai then again like can't be possible
    } else {
      const newLike = await this.likeRepository.create({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });
      likeable.likes.push(newLike);
      await likeable.save();
      return true; // Like added
    }
  }
}

export default LikeService;

//   async toggleLike(modelId, modelType, userId) {
//     if (modelType === "Tweet") {
//       var likeable = await this.tweetRepository.find(modelId).populate({ path: "likes" });
//     } else if (modelType === "Comment") {
//       // TODO
//     } else {
//       throw new Error("unknown model type");
//     }
//     Note:- populate method only present in mongodb query promise do not have populate  method that's why find() method ko simple bnaye hai
