const express = require('express');

const { PORT } = require('./configs/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const connectToDb = require('./configs/db.config');

const app = express();

app.use('/api', apiRouter);

app.use(errorHandler);

app.listen(PORT, async () => {
    console.log(`Server started at PORT: ${PORT}`);
    await connectToDb();
    console.log('Db successfully connected');
});