'use strict';

const express = require('express');
const router = express.Router();
const {add, edit, getAll, addImage, getImage} = require('./controllers');
const jwt = require('express-jwt');
const config = require('../../config');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

/**
 * @api
 * @description create a user
 */

router.post('/', add);

/**
 * @api
 * @description edit a user
 */

router.put('/',
  jwt({secret: config.jwtSecret}),
  edit);

/**
 * @api
 * @description get all users
 */

router.get('/', getAll);

/**
 * @api
 * @description get all users
 */

router.post('/images',
  jwt({secret: config.jwtSecret}),
  upload.single('avatar'),
  addImage);

router.get('/images/:id', getImage);

module.exports = router;
