const express = require('express');
const app = express();
const index = require('./routes/index');
const reposRoute = require('./routes/reposRoute');

app.use('/', index);
app.use('/repos', reposRoute);

module.exports = app;