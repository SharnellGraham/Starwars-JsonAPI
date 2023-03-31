import mongoose from '../db/connection.js';

const CharacterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthYear: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'] },
  skinColor: { type: String, enum: ['fair', 'light', 'dark', 'green', 'blue'] },
  hairColor: { type: String, enum: ['blond', 'brown', 'black', 'red', 'white'] },
  height: { type: Number },
  eyeColor: { type: String },
  mass: { type: Number },
  homeworld: { type: mongoose.Schema.Types.ObjectId, ref: 'Planet' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

CharacterSchema.index({ name: 1, birthYear: 1 });

export default mongoose.model('Character', CharacterSchema);