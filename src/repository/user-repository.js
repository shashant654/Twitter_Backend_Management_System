import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";
// import Like from "../models/like.js";

class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }

//   async findByUserAndLikeable(data) {
//     try {
//       const like = await Like.findOne(data);
//     } catch (error) {
//       throw error;
//     }
//   }
}

export default UserRepository;
