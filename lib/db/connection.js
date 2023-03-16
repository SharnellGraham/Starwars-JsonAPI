import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/starwars', { useNewUrlParser: true, useUnifiedTopology: true })

export default mongoose