import Starship from "../model/starships.js";

const starshipController = {
    index: (req, res) => {
        Starship.find({})
        .then(starship=> {
            res.json(starship)
        })

},


showStarshipClass: (req, res) => {
    Starship.find({starship_class: req.params.starship_class})
      .then(starship => {
        res.json(starship)
      })
  },
  showHyperdriveRating: (req, res) => {
    Starship.find({hyperdrive_rating: req.params.hyperdrive_rating})
      .then(starship => {
        res.render('starship', {starship: starship})
      })
  },

  create: (req, res) => {
    Starship.create(req.body)
      .then(starship => {
        res.json(starship)
      })
  },
  edit: (req, res) => {
    Starship.findOneAndUpdate({name: req.params.name}, req.body,   {new : true})
      .then(starship => {
        res.json(starship)
      })
  },
  delete: (req, res) => {
    Starship.findOneAndDelete({name: req.params.name})
      .then(starship => {
        res.json(starship)
      })
  }
}

export default starshipController;





