const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/starwars', { useNewUrlParser: true, useUnifiedTopology: true })


module.exports = mongoose;