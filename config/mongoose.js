const mongoose = require('mongoose');

module.exports = (app) => {
    mongoose.connect('mongodb://localhost/cubicle', { useNewUrlParser: true, useUnifiedTopology: true });

    const dataBase = mongoose.connection;

    dataBase.on('error', console.error.bind(console, 'connection error:'));
    dataBase.once('open', console.log.bind(console, 'Database connected!'));
}