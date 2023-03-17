import express from 'express';
import starshipController from '../controllers/starship.js'
import Router from "express"

const router = Router(); 
const Starship = router


router.get('/', starshipController.index)
router.get('/:year', starshipController.showYear)
router.get('/name/:name', starshipController.showName)
router.post('/', starshipController.create)
router.put('/:id', starshipController.edit)
router.delete('/:id', starshipController.delete)

export default Starship;
