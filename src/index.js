const express = require('express');

const { PORT } = require('./configs/server.config');

const app = express();

app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
});