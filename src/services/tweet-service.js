const { TweetRepository, HastagRepository } = require("../repository/index");

class TweetService {
  constructor() {
    this.tweetRespository = new TweetRepository();
    this.hashtagRepository = new HastagRepository()
  }

  async create(data) {
    const content = data.content;
    let tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1)); // this regex extracts hashtags
//     tags = tags.map((tag) => tag.substring(1));
    console.log('current tags',tags);

    const tweet = await this.tweetRespository.create(data);
    let alreadyPresentTags = await this.hashtagRepository.findByName(tags)
    console.log('already present tags',alreadyPresentTags);

    alreadyPresentTags = alreadyPresentTags.map((tags) => tags.title)

    let newTags = tags.filter(tag => !alreadyPresentTags.includes(tag))
    console.log(newTags);

    newTags = newTags.map(tag => {
          return {title: tag, tweets: [tweet.id]}
    });
    await this.hashtagRepository.bulkCreate(newTags)
    alreadyPresentTags.forEach((tag) => {
          tag.tweets.push(tweet.id);
          tag.save()
    })
      
    return tweet;
    // todo create hashtags and add here

    //     1. bulcreate in mongoose
    //     2. filter title of hasing based on multiple tags
    //     3. how to add tweet id inside all the hashtags
  }
}

module.exports = TweetService;
