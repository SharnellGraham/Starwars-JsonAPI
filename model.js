const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/starwars', { useNewUrlParser: true });



const Schema = mongoose.Schema;

// Define our character schema
const CharacterSchema = new Schema({
  name: { type: String, required: true },
  birth_year: { type: String, required: true },
  gender: { type: String, required: true },
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  homeworld: Number,
  edited: Date,
  created: Date
});

// Create a character model
const CharacterModel = mongoose.model('Character', CharacterSchema);

module.exports = CharacterModel;
