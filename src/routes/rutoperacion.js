const express = require('express');
const router = require('express').Router();
const operacionController = require('../controllers/operacionController');


router.get('/', operacionController.list);
router.post('/add', operacionController.save);
router.get('/delete/:Id_uni', operacionController.delete);
router.get('/update/:Id_uni', operacionController.edit);
router.post('/update/:Id_uni', operacionController.savechanges);


module.exports = router;