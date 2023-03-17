import Starship from "../model/starships.js";

const starshipController = {
    index: (req, res) => {
        Starship.find({})
        .then(starship=> {
            res.json(starship)
        })

},


}