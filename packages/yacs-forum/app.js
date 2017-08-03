const express = require('express');
let app = express(); // eslint-disable prefer-const

app.use(express.static('public'));

module.exports = app;
