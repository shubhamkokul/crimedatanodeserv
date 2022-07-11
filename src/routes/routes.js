const express = require('express');
const {handleRootGet} = require('../services/rootService');
const router = express.Router();

router
    .route('/')
    .get((req, res) => handleRootGet(req, res));

module.exports = router;
