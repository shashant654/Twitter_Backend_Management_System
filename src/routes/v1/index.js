import express from "express";

import { toggleLike } from "../../controllers/like-controller.js";
import { createComment } from '../../controllers/comment-controller.js';
import { createTweet ,getTweet} from "../../controllers/tweet-controller.js";

const router = express.Router();

router.post("/tweets", createTweet);
router.get('/tweets/:id', getTweet);
router.post('/comments', createComment);

router.post("/likes/toggle", toggleLike);

export default router;
