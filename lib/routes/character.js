
import express from 'express';
import characterController from '../controllers/character.js'
import Router from "express"

const router = Router(); 
const Character = router


router.get('/', characterController.index)
router.get('/:year', characterController.showYear)
router.get('/name/:name', characterController.showName)
router.post('/', characterController.create)
router.put('/:id', characterController.edit)
router.delete('/:id', characterController.delete)

export default Character

