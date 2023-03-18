import express from 'express'
const router = express.Router()
import Character from './character.js'
import Starship from './starship.js'

router.use('/character', Character )
router.use('/starship', Starship)

export default router