const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./server.config');

async function connectToDb() {
    try {
        if(NODE_ENV == 'developement') {
            await mongoose.connect(ATLAS_DB_URL);
        }
    } catch (error) {
        console.log('Server coan not connect to database');
        console.log(error);
    }
}

module.exports = connectToDb;