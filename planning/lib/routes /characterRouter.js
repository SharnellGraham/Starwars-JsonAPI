// import express from 'express'
// import Character from '../model/characters.js'

// const characters = express.Router()



// characters.get('/', async (req, res) => {
//     const characters = await Character.find({})
//     res.json(characters)
//   })


// characters.get('/:id', async (req, res) => {
  
//     const character = await Character.findById(req.params.id)
//     res.json(character)
//   })


// characters.post('/', async (req, res) => {
//     const character = await Character.create(req.body)
//     res.json(character)
//   })

 

// characters.put('/:id', async (req, res) => {
//   let character = await Character.findByIdAndUpdate(
//     req.params.id,
//     { $set: req.body },
//     { new: true }
//   ) 

//   res.json(character)
// })



// characters.delete('/:id', (req, res) => {
//   Character.findByIdAndDelete(
//     { _id: req.params.id })
//     .then(characters => {
//       res.json(characters)
//     }
//   )
// })

// export default characters