// importamos express y creamos un router
const express = require('express');
const router = express.Router();


// Importamos las funciones controladoras intermedias.
const { authUserController } = require('../middlewares/index');

// importamos las funciones controladoras finales
const { newUserController,
        loginUserController,
        editAvatarController,
        getUserController,
        updateProfileController,
        getPublicUserController,
} = require('../controllers/users') // 

// definimos los endpoints. Registro de usuario.
router.post('/users/register', newUserController);

//Login de usuario.
router.post('/users/login', loginUserController);

// Editar avatar de usuario.
router.put('/users/avatar', authUserController, editAvatarController);

// Información del propio usuario.
router.get('/users', authUserController, getUserController);

// actualizar info de ususario
router.put('/users/:userId/profile', authUserController, updateProfileController)

// Devuelve la informacion publica de un user y sus notas.
router.get('/users/:userId', authUserController, getPublicUserController)


module.exports = router