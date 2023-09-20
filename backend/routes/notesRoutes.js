// importamos express y creamos un router
const express = require('express');
const router = express.Router();

// importamos las funciones controladoras intermedias
const authUserController = require('../middlewares/authUserController');

// importamos las funciones controladores finales.

const { newNotesController, newVoteController, deleteVoteController } = require('../controllers/notes');

// Inserta un tweet
router.post('/notes', authUserController, newNotesController);

//Insertar un voto
router.post('/notes/:notesId/upVotes', authUserController, newVoteController)

//Eliminar un voto
router.delete('/notes/:notesId/upVotes', authUserController, deleteVoteController)

module.exports = router