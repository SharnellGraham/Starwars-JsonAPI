const express = require('express');

const app = express();

app.get('/api', (req, res) => res.send('Its working!'));

app.listen(process.env.port || 3000, function(){
    console.log('now listening for requests');
 });