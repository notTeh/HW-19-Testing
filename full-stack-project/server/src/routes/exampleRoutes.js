// This file sets up the routes for the server application, linking them to the appropriate controller methods.

const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

// Define a route to get all examples
router.get('/examples', exampleController.getAllExamples);

// Define a route to get a specific example by ID
router.get('/examples/:id', exampleController.getExampleById);

// Define a route to create a new example
router.post('/examples', exampleController.createExample);

// Define a route to update an existing example by ID
router.put('/examples/:id', exampleController.updateExample);

// Define a route to delete an example by ID
router.delete('/examples/:id', exampleController.deleteExample);

module.exports = router;