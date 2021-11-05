"use strict"

const app = require('./app')
const createError = require('http-errors');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../docs/_index");


app.use('/User', require('../api/User/routes.js')); 
app.use('/Ordi', require('../api/Ordi/routes.js')); 
app.use('/File', require('../api/File/routes.js')); 
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res, next) => { next(createError(404)) });
app.use((err, req, res, next) => {
    res.status(404).json({ error : err.name, message: err.message })
});

module.exports = app