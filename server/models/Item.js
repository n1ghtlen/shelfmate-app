import mongoose from 'mongoose';

// Define the item schema
const itemSchema = new mongoose.Schema({
  product_name: { type: String, required: true },
  barcode: { type: String, required: true },
  quantity: { type: Number, required: true },
  container_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Container', required: true }, // Reference to the Container model
  expiration_date: { type: Date, required: false }, // Expiration date for perishable items
});

// Create the Item model
const Item = mongoose.model('Item', itemSchema);

export default Item;


