// importamos express y creamos un router
const express = require('express');
const router = express.Router();

// importamos las funciones controladoras intermedias
const { authUserController, notesExistController } = require('../middlewares');

// importamos las funciones controladores finales.

const { newNotesController, newVoteController, deleteVoteController, deleteNotesController } = require('../controllers/notes');
const getNotesController = require('../controllers/notes/getNotesController');

// Inserta un note.
router.post('/notes', authUserController, newNotesController);

// Eliminar un note.
router.delete('/notes/:notesId', authUserController, notesExistController, deleteNotesController);

//Insertar un voto
router.post('/notes/:notesId/upVotes', authUserController, newVoteController)

//Eliminar un voto
router.delete('/notes/:notesId/upVotes', authUserController, deleteVoteController)

// Devuelve "toda" la informacion de la nota y su user
router.get('/getNotes', authUserController, getNotesController)

module.exports = router