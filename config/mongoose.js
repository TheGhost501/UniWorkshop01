const mongoose = require('mongoose');
const config = require('./config');

module.exports = (app) => {
    mongoose.connect(config.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });

    const dataBase = mongoose.connection;

    dataBase.on('error', console.error.bind(console, 'connection error:'));
    dataBase.once('open', console.log.bind(console, 'Database connected!'));
}