const mongoose = require('mongoose');

const accessoryScheme = new mongoose.Schema({

    id: mongoose.Types.ObjectId,  
    name: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
        validate: /^https?/,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    cubes: {}
});

module.exports = mongoose.model('Accessory', accessoryScheme);