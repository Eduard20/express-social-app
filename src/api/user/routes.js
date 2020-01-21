'use strict';

const express = require('express');
const router = express.Router();
const {add, edit} = require('./controllers');

/**
 * @api
 * @description create a user
 */

router.post('/', add);

/**
 * @api
 * @description edit a user
 */

router.put('/', edit);

/**
 * @api
 * @description edit a user
 */

module.exports = router;

// Методы:
//   - Добавление пользователя в базу данных (MySQL);
// - Редактирование пользователя (имя, фамилия, пол и дата рождения);
// - Загрузка фотографий для пользователя;
// - Список пользователей и их фотографий, с возможностью фильтровать по полу и возрасту.
