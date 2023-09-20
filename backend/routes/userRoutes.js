// importamos express y creamos un router
const express = require('express');
const router = express.Router();


// Importamos las funciones controladoras intermedias.
const { authUserController } = require('../middlewares/index');


// importamos las funciones controladoras finales
const { newUserController,
        loginUserController,
        editAvatarController,
        getUserController
} = require('../controllers/users')

// definimos los endpoints. Registro de usuario.
router.post('/users/register', newUserController);

//Login de usuario.
router.post('/users/login', loginUserController);

// Editar avatar de usuario.
router.put('/users/avatar', authUserController, editAvatarController);

// Información del propio usuario.
router.get('/users', authUserController, getUserController);


module.exports = router