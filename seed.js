const Person = require('./model');
const data = require('./data.json');

data.forEach(async item => {
  const person = new Person(item);
  await person.save();
});
