const express = require('express');
const router = express.Router();

router.get('/people',function(req,res){
    res.send({type: 'GET'});
});;


router.post('/people', function(req, res){
    res.send({
        type: 'POST',
        name: req.body.name,
        roll: req.body.roll
    });
});

router.put('/people/:id', function(req, res){
    res.send({type: 'PUT'});
});

router.delete('/people/:id', function(req, res){
    res.send({type: 'DELETE'});
});