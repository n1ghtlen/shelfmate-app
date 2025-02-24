import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Item from './models/Item.js';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();

// Use the port from environment variables, otherwise default to 5001
const port = process.env.PORT || 5001; 

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit if connection fails
});

// Route to add an item
app.post('/add-item', async (req, res) => {
  const { container, productName, barcode, quantity, expirationDate, image } = req.body;

  console.log('Received payload:', req.body);

  console.log('Container:', container);
  console.log('Product Name:', productName);
  console.log('Barcode:', barcode);
  console.log('Quantity:', quantity);
  console.log('Expiration Date:', expirationDate);
  console.log('Image URL:', image);

  try {
    // Create a new item with the container field
    const newItem = new Item({
      product_name: productName,
      barcode,
      quantity,
      container, // Now directly storing the container type as a string
      expiration_date: expirationDate,
      image,
    });

    await newItem.save();

    res.status(201).json({ message: 'Item added successfully!', item: newItem });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding item', error: error.message });
  }
});

// Route to get items (optional: filter by container)
app.get('/items', async (req, res) => {
  try {
    const { container } = req.query;
    const filter = container ? { container } : {}; // Filter if container is provided

    const items = await Item.find(filter); // Fetch from MongoDB
    res.setHeader('Content-Type', 'application/json'); // Explicitly set content type
    res.json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ message: 'Error fetching items', error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Handle unknown routes
app.use((req, res) => {
  res.status(404).send('Route not found');
});






