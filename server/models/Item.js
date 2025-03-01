import mongoose from 'mongoose';


const itemSchema = new mongoose.Schema({
  product_name: String,
  quantity: Number,
  expiration_date: String,  
  container: {
    type: String,
    enum: ["pantry", "fridge", "freezer"],
    required: true
  },
  image: String,
});

const Item = mongoose.model("Item", itemSchema);


export default Item;


