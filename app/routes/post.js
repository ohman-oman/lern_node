const express = require('express');
const postController = require('../controllers/post');

const router = express.Router();

// exports.getPosts = (req, res) => {
//     res.send("Hello world from node js update again");
// };

router.get("/", postController.getPost);

module.exports = router;