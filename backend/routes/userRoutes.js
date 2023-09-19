// importamos express y creamos un router
const express = require('express');
const router = express.Router();

// importamos las funciones controladoras finales
const { newUserController, loginUserController } = require('../controllers/users')

// definimos los endpoints. Registro de usuario.
router.post('/users/register', newUserController);

//Login de usuario.
router.post('/users/login', loginUserController);

module.exports = router