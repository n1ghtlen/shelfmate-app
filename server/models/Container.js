import mongoose from 'mongoose';

// Define the container schema
const containerSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, // Name of the container (e.g., Pantry, Fridge, Freezer)
  capacity: { type: Number, required: true }, // Total capacity of the container
  current_capacity: { type: Number, required: true, default: 0 }, // Current items in the container
});

// Create the Container model
const Container = mongoose.model('Container', containerSchema);

export default Container;


