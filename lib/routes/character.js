// import express from 'express'
// import Character from '../model/characters.js'

// const characterRouter = express.Router()


// // Get characters 
// characterRouter.get('/', async (req, res) => {
//     const characters = await Character.find({})
//     res.json(characters)
//   })


// characterRouter.get('/:name', async (req, res) => {
//    const character = await Character.find({Name: req.params.name})
//     res.json(character)
//   })

//   characterRouter.get('/:name/:id', async (req, res) => {
//     const name = await Character.find({_id: req.params.id})
//     res.json(name)
// })



// export default characterRouter



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

// Get a character by name
characterRouter.get('/:name', async (req, res) => {
  try {
    const character = await Character.find({ Name: req.params.name })
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
