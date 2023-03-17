import express from "express"
import characterRouter from "./character.js"
import starshipRouter from "./starship.js"


const router = express.Router()

router.use("/character", characterRouter)
router.use("/starship", starshipRouter)

router.get("/",(req, res)=>{
    res.send("connected to local host")
})

export default router; 