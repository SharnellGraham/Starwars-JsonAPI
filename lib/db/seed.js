import charactersJsonData from './characters.json' assert { type: "json" }
import starshipsJsonData from './starships.json' assert { type: "json" }
import characters from "../model/characters.js";
import starships from "../model/starships.js";


characters.remove({})
characters.collection.insert(charactersJsonData)
  .then(characters => {
    console.log(characters)
  })
  .catch(err => {
    console.log(err)
})

starships.remove({})
starships.collection.insert(starshipsJsonData)
  .then(starships => {
    console.log(starships)
  })
  .catch(err => {
    console.log(err)
})