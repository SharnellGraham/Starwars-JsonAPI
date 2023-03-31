import charactersJsonData from './characters.json' assert {type: 'json'};
import starshipsJsonData from './starships.json' assert {type: 'json'};
import Characters from "../model/characters.js";
import Starships from "../model/starships.js";

const seedData = async () => {
  try {
    await Characters.deleteMany();
    console.log('All character data removed...');
    await Starships.deleteMany();
    console.log('All starship data removed...');

    await Characters.create(charactersJsonData);
    await Starships.create(starshipsJsonData);

    console.log('Data seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

seedData();
