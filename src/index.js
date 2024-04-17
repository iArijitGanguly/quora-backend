const express = require('express');

const { PORT } = require('./configs/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');

const app = express();

app.use('/api', apiRouter);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
});