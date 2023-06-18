require('dotenv').config();
const express = require('express');
const app = express();

const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');

//# INIT MIDDLEWARE
app.use(morgan('dev'));
app.use(helmet());
app.use(compression()); // nén data trả về
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//# INIT DB
// require('./dbs/init.mongodb');
// const { checkOverload } = require('./helpers/check.connect');
// checkOverload();

//# INIT ROUTES
app.use('/', require('./routes'));

//# HANDLING ERRORS
app.use((req,res,next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    const statusCode = error.status || 500;
    return res.status(statusCode).json({
        status: 'error',
        code: statusCode,
        message: error.message || 'Internal Server Error',
        stack: error.stack
    })
})

module.exports = app;