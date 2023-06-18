'use strict';
const express = require('express');
const router = express.Router();

router.get('/v1/api', (req, res, next) => {
    res.status(200).json({
        message: 'zzzzzzzzzzzzzz'
    })
});

module.exports = router;