import Hashtag from "../models/hashtags.js"

class HashtagRepository {
  async create(data) {
    try {
      const tag = await Hashtag.create(data);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async bulkCreate(data) {
    try {
      const tags = await Hashtag.insertMany(data);
        return tags;
    } catch (error) {
      console.log(error);
    }
  }

  async get(id) {
    try {
      const tag = await Hashtag.findById(id);
      return tag;
    } catch (error) {
      console.log(error);
    }
  }

  async findByName(titleList) {
    try {
      const tags = await Hashtag.find({ title: titleList }).select('title -_id');
      return tags;
    } catch (error) {
      console.log(error);
    }
  }

  async destroy(id) {
    try {
      const response = await Hashtag.findByIdAndRemove(id);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

export default HashtagRepository;
// -----------------------------------------------
// async findByName(titleList) {
//           try {
//             const tags = await Hashtag.find({ title: titleList }).select('title');
//             return tags;
//           } catch (error) {
//             console.log(error);
//           }
//         }
// --------------------------------------------------------
// async findByName(titleList) {
//           try {
//             const tags = await Hashtag.find({ title: titleList });
//             return tags;
//           } catch (error) {
//             console.log(error);
//           }
//         }

// --------------------------------------------------------

//   async update(tweetId, data) {
//     try {
//       // here {new:true} if write then mongodb return v latest data ko hi krega otherwise return by default previous wala krega and update only latest wala krega
//       const tweet = await Tweet.findByIdAndUpdate(tweetId, data, { new: true });
//       return tweet;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async getAll(offset, limit) {
//     try {
//       // const tweet = await Tweet.find().limit(limit);
//       const tag = await Hashtag.find().skip(offset).limit(limit);
//       return tag;
//     } catch (error) {
//       console.log(error);
//     }
//   }
