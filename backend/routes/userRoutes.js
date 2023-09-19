// importamos express y creamos un router
const express = require('express');
const router = express.Router();

// importamos las funciones controladoras finales
const { newUserController } = require('../controllers/users')

// definimos los endpoints
router.post('/users/register', newUserController);

module.exports = router