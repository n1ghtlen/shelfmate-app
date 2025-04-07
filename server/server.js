import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Item from './models/Item.js';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

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

// Function to Fetch Allergens from OpenFoodFacts
async function getAllergens(barcode) {
  try {
    const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`);
    const data = await response.json();

    if (data.status === 1 && data.product) {
      const allergens_from_ingredients = data.product.allergens_from_ingredients || "No allergens from ingredients listed";

      const allergens_text = data.product.allergens || "No allergens listed";

      console.log("Allergens from Ingredients:", allergens_from_ingredients);
      console.log("Allergens Text:", allergens_text);
      
      return {
        allergens_from_ingredients, // This is the new allergen field
        allergens_text
      };
    } else {
      console.log("Product not found or no allergens data available.");
      return { allergens_from_ingredients: "No allergens from ingredients listed", allergens_text: "No allergens listed" };
    }
  } catch (error) {
    console.error("Error fetching allergens:", error);
    return { allergens_from_ingredients: "No allergens from ingredients listed", allergens_text: "No allergens listed" };
  }
}

// Route to Add Item
app.post('/add-item', async (req, res) => {
  const { container, productName, barcode, quantity, expirationDate, image } = req.body;

  console.log('Received payload:', req.body);

  try {
    let allergensData = "No allergens listed"; // Default value

    if (barcode) {
        console.log(`Fetching allergens for barcode: ${barcode}`);

        try {
            const allergens = await getAllergens(barcode);
            console.log("Fetched allergens data:", allergens);

            allergensData = allergens?.allergens_from_ingredients?.trim() || "No allergens listed";
        } catch (fetchError) {
            console.error("Error fetching allergens:", fetchError);
        }
    }

    // Create a new item object
    const newItem = new Item({
        product_name: productName.trim() || "Unnamed Product",
        barcode: barcode?.trim() || "N/A",
        quantity: quantity || 1,
        container: container?.trim() || "pantry",
        expiration_date: expirationDate || null,
        image: image?.trim() || null,
        allergens: allergensData
    });

    // Save the item to the database
    await newItem.save();

    console.log("New item saved:", newItem);
    res.status(201).json({ message: "Item added successfully!", item: newItem });

} catch (error) {
    console.error("Error adding item:", error);
    res.status(500).json({ message: "Error adding item", error: error.message });
}

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

// Route to delete an item
app.delete('/delete-item/:id', async (req, res) => {
  const { id } = req.params;
  console.log('Received delete request for ID:', id);

  try {
    const deletedItem = await Item.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });  // Ensure it's JSON
    }

    // Success: return the deleted item and message in JSON format
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({ message: 'Item deleted successfully', item: deletedItem });
  } catch (error) {
    console.error("Error deleting item:", error);
    // Ensure the error message is returned as JSON
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ message: 'Error deleting item', error: error.message });
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
