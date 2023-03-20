import express from 'express'
import Character from '../model/characters.js'

const characterRouter = express.Router()

// Create a new character
characterRouter.post('/', async (req, res) => {
  try {
    const character = new Character(req.body)
    await character.save()
    res.status(201).json(character)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Get all characters 
characterRouter.get('/', async (req, res) => {
  try {
    const characters = await Character.find({})
    res.json(characters)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
  // Get a character by Id
characterRouter.get('/:_id', async(req, res) =>{
  const characters = await Character.findById(req.params._id)
  res.json(characters)
})

// Get a character by name
characterRouter.get('/:name', async (req, res) => {
  try {
   const character = await Character.findOne({ Name: req.params.name })
   if (!character) {
     throw new Error('Character not found')
   }
   res.json(character)
   
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
})





// Update a character
characterRouter.patch('/:id', async (req, res) => {
  try {
    const character = await Character.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!character) {
      throw new Error('Character not found')
    }
    res.json(character)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Delete a character
characterRouter.delete('/:id', async (req, res) => {
  try {
    const deletedCharacter = await Character.findByIdAndDelete(req.params.id)
    if (!deletedCharacter) {
      throw new Error('Character not found')
    }
    res.json({ message: 'Character deleted' })
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
})

export default characterRouter
