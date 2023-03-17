import charatersJsonData from './characters.json' assert { type: "json" }
import starshipsJsonData from './starships.json' assert { type: "json" }
import characters from "../model/characters.js";
import starships from "../model/starships.js";


characters.insertMany(charatersJsonData)
starships.insertMany(starshipsJsonData)