import charatersJsonData from './characters.json' assert { type: "json" }
import characters from "../model/characters.js";


characters.insertMany(charatersJsonData)