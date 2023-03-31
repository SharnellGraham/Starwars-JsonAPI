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

// Get all birth years of characters
characterRouter.get('/birth_years', async (req, res) => {
  try {
    const characters = await Character.find({}); // Get all the characters
    const birthYears = [...new Set(characters.map(c => c.birth_year))]; // Use a Set to get unique birth years
    res.send({ birthYears });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Get a character by Id
characterRouter.get('/:id', async(req, res) =>{
  const characters = await Character.findById(req.params.id)
  res.json(characters)
})


// Get characters by name
characterRouter.get('/name/:name', async(req, res) => {
  try {
    const characters = await Character.find({ name: req.params.name });
    res.json(characters);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});



// Update a character by ID
characterRouter.put('/:id', async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    if (!character) return res.status(404).json({ message: 'Character not found' });

    character.name = req.body.name;
    character.birthYear = req.body.birthYear;
    character.gender = req.body.gender;
    character.skinColor = req.body.skinColor;
    character.hairColor = req.body.hairColor;
    character.height = req.body.height;
    character.eyeColor = req.body.eyeColor;
    character.mass = req.body.mass;
    character.homeworld = req.body.homeworld;

    const updatedCharacter = await character.save();
    res.json(updatedCharacter);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

    // Delete a character
characterRouter.delete('/:id', async (req, res) => {
  try {
    const deletedCharacter = await Character.deleteOne({ _id: req.params.id })
    if (!deletedCharacter) {
      throw new Error('Character not found')
    }
    res.json({ message: 'Character deleted' })
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
});






export default characterRouter