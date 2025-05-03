// This file defines the data model for the example resource, including schema and database interactions.

const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const ExampleModel = mongoose.model('Example', exampleSchema);

module.exports = ExampleModel;