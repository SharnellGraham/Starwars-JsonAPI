// imports
import express from "express";
import characterRouter from "./routes/character.js";
import starshipRouter from "./routes/starship.js";

const app = express()


app.use(express.json()) // This line allows your server to accept incoming JSON data in the body of the request.
                        // Without this line, you won't be able to parse JSON data sent to the server.

// routes
app.get('/', async (req, res) => { // This line sets up a GET request that listens for requests going to your server's root URL ('/')
    res.send('hello humans') 


})

app.use ('/characters', characterRouter)
app.use ('/starships', starshipRouter)
// starting the server
app.listen(3000, () => { // This line starts your Express server and specifies that it should listen on port 3000.

console.log('May the force be with you xD ') 
// This message is logged to the console once the server has started listening for incoming requests.
})