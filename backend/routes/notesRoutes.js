// importamos express y creamos un router
const express = require('express');
const router = express.Router();

// importamos las funciones controladoras intermedias
const authUserController = require('../middlewares/authUserController');

// importamos las funciones controladores finales.

const { newNotesController } = require('../controllers/notes');

// Inserta un tweet
router.post('/notes', authUserController, newNotesController);

module.exports = router