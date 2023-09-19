// importamos express y creamos un router
const express = require('express');
const router = express.Router();

// importamos las rutas
const userRoutes = require('./userRoutes');
const notesRoutes = require('./notesRoutes');

// middleware que indica a express donde se encuentran las rutas de los usuarios y las notas
router.use(userRoutes);
router.use(notesRoutes);

module.exports = router;