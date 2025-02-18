// Import necessary packages and modules
import express from 'express';
import { connect } from 'mongoose';
import pkg from 'body-parser';
const { json } = pkg;
import cors from 'cors';

// Import your models
import Container from './models/Container.js';
import Item from './models/Item.js';

const app = express();
const port = 5001;

// Middleware
app.use(json());
app.use(cors());

// Connect to MongoDB
connect('mongodb://localhost:27017/foodInventory')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Error connecting to MongoDB: ', err);
    process.exit(1); // Exit the process if the connection fails
  });


// Route to add an item to a container
app.post('/add-item', async (req, res) => {
  const { containerName, productName, barcode, quantity, expirationDate } = req.body;
  console.log('Received payload:', req.body);

  try {
    // Check if containerName is provided
    if (!containerName || !productName || !barcode || !quantity || !expirationDate) {
      return res.status(400).json({ message: 'Missing required fields!' });
    }

    // Find the container by name
    const container = await Container.findOne({ name: containerName });

    if (!container) {
      return res.status(404).json({ message: 'Container not found!' });
    }

    // Check if there's enough space in the container
    if (container.current_capacity + quantity > container.capacity) {
      return res.status(400).json({ message: 'Not enough space in the container!' });
    }

    // Create a new item and save it to the database
    const newItem = new Item({
      product_name: productName,
      barcode,
      quantity,
      container_id: container._id,
      expiration_date: expirationDate,
    });

    await newItem.save();

    // Update the container's current capacity
    container.current_capacity += quantity;
    await container.save();

    res.status(200).json({ message: 'Item added successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error adding item', error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});




