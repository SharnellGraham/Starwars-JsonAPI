import Character from "../model/characters.js";

const characterController = {
    index: (req, res) => {
        Character.find({})
        .then(character=> {
            res.json(character)
        })

},

showName: (req, res) => {
    Character.find({name: req.params.name})
      .then(character => {
        res.render('character', {character: character})
      })
  },

  showGender: (req, res) => {
    Character.find({gender: req.params.gender})
      .then(charcter => {
        res.json(charcter)
      })
  },

  create: (req, res) => {
    Character.create(req.body)
      .then(character => {
        res.json(character)
      })
  },
  edit: (req, res) => {
    Character.findOneAndUpdate({name: req.params.name}, req.body,   {new : true})
      .then(character => {
        res.json(character)
      })
  },
 
  delete: (req, res) => {
    Character.findOneAndDelete({name: req.params.name})
      .then(character => {
        res.json(character)
      })
  }
}


   


export default characterController;


