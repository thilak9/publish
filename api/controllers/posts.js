const Post = require('../models/posts')

async function index (req,res){
    console.log('inside index')
    try{
        const posts = await Post.all;
        console.log("posts")
        console.log(posts)
        console.log("posts")
        res.status(200).json(posts);
    }catch(err){
        res.status(500).send(err);
    }
}


module.exports = {index}
