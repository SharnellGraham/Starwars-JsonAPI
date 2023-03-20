import mongoose from '../db/connection.js'


const StarshipSchema = new mongoose.Schema({
  pilots:Array,
  MGLT:String,
  starship_class:String,
  hyperdrive_rating:String,
  id: Number,
   
  
});

export default  mongoose.model('Starship', StarshipSchema);