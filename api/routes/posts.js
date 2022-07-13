const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts')

console.log("postscontroller")
console.log(postsController.index)
console.log("postscontroller")
router.get('/', postsController.index);

module.exports = router;

