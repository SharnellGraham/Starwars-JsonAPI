const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true });
const Schema = mongoose.Schema;

const personSchema = new Schema({
  edited: String,
  name: String,
  created: String,
  gender: String,
  skin_color: String,
  hair_color: String,
  height: String,
  eye_color: String,
  mass: String,
  homeworld: Number,
  birth_year: String,
  id: Number
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
