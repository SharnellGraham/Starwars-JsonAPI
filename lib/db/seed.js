import charactersJsonData from './characters.json'
import starshipsJsonData from './starships.json'
import characters from "../model/characters.js";
import starships from "../model/starships.js";

// Insert data
characters.insertMany(charactersJsonData)
starships.insertMany(starshipsJsonData)

// Delete existing data and create new documents
await characters.deleteMany().maxTimeMS(20000);
await starships.deleteMany().maxTimeMS(20000);

await characters.create(charactersJsonData);
await starships.create(starshipsJsonData);
