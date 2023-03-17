import express from 'express'
import Starship from '../model/starships.js'

const starships = express.Router()



starships.get('/', async (req, res) => {
    const starships = await Starship.find({})
    res.json(starships)
  })

  // Show action for a list

starships.get('/:id', async (req, res) => {
    const starships = await Starship.findById(req.params.id)
    res.json(starships)
})

  // Create a Starship

starships.post('/', async (req, res) => {
    const starships = await Starship.create(req.body)
    res.json(starships)
})

// Updating starships 

starships.put('/:id', async (req, res) => {
  let starships = await Starship.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true }
  ) 

  res.json(starships)
})

// Deleting a Starship


starships.delete('/:id', (req, res) => {
  Starship.findByIdAndDelete(
    { _id: req.params.id })
    .then(starships => {
      res.json(starships)
    }
  )
})


export default starships