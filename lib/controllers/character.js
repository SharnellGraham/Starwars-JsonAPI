import Character from "../model/caharacters.js";

const characterController = {
    index: (req, res) => {
        Character.find({})
        .then(character=> {
            res.json(character)
        })

},
