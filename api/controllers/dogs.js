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

router.get('/', async (req, res) => {
    const id = req.params.id;
    try {
        const dog = await Dog.findByName(id)
        res.status(200).json(dog)
    } catch(err){
        console.log(err);
        res.status(500).json({error: err})
    }
});

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

module.exports = router