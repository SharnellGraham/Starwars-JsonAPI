const express = require("express");
const app = express();
const { character, starship} = require("./routes");
app.use(express.json());

app.use(character);
app.use(starship);

app.listen(3000, () => console.log("listening on port 3000"));