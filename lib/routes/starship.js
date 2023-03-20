// import express from 'express'
// import Starship from '../model/starships.js'

// const starshipRouter= express.Router()



// starshipRouter.get('/', async (req, res) => {
//     const starships = await Starship.find({})
//     res.json(starships)
//   })

  

// starshipRouter.get('/:name', async (req, res) => {
//     const starships = await Starship.name(req.params.name)
//     res.json(starships)
// })


import express from 'express'
import Starship from '../model/starships.js'

const starshipRouter= express.Router()

// GET all starships
starshipRouter.get('/', async (req, res) => {
    try {
        const starships = await Starship.find({})
        res.json(starships)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get starships by hydrive raiting 
starshipRouter.get('/:id', async (req, res) => {  try {
  const starship = await Starship.findById(req.params.id);
  if (!starship) {
    throw new Error('Starship not found');
  }
  res.json(starship);
} catch (err) {
  res.status(404).json({ message: err.message });
}
});

// GET a single starship by name
starshipRouter.get('/:name', async (req, res) => {
    try {
        const starship = await Starship.find({ name: req.params.name })
        res.json(starship)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
})

// CREATE a new starship
starshipRouter.post('/', async (req, res) => {
    const starship = new Starship(req.body)

    try {
        const newStarship = await starship.save()
        res.status(201).json(newStarship)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// UPDATE an existing starship
starshipRouter.patch('/:id', async (req, res) => {
    try {
        const updatedStarship = await Starship.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.json(updatedStarship)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// DELETE a starship by id
starshipRouter.delete('/:id', async (req, res) => {
    try {
        await Starship.findByIdAndDelete(req.params.id)
        res.json({ message: 'Deleted starship' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

export default starshipRouter;




