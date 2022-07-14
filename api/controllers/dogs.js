const router = require('express').Router();

const Dog = require('../models/dog');

router.get('/', async (req, res) => {
    try {
        const dogs = await Dog.all
        res.status(200).json({data: dogs})
    } catch(err){
        console.log(err);
        res.status(500).json({error: err})
    }
});

// router.get('/', async (req, res) => {
//     const id = req.params.id;
//     try {
//         const dog = await Dog.findByName(id)
//         res.status(200).json(dog)
//     } catch(err){
//         console.log(err);
//         res.status(500).json({error: err})
//     }
// });

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const dog = await Dog.findByName(id)
        res.status(200).json({dog})
    } catch(err){
        console.log(err);
        res.status(500).json({error: err})
    }
});

router.post('/', async(req,res) =>{
    try {
        console.log("****REQ****")
        console.log(req)
        console.log("****REQ****")
        console.log("****REQ.body****")
        console.log(req.body)
        console.log("****REQ.body****")
        const dog = await Dog.create(req.body);
        res.status(201).json(dog)
    } catch (err) {
        res.status(422).json({err})
    }
     
     
})

module.exports = router
