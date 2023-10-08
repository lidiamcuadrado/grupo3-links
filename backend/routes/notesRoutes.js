// importamos express y creamos un router
const express = require('express');
const router = express.Router();

// importamos las funciones controladoras intermedias
const { authUserController, notesExistController } = require('../middlewares');

// importamos las funciones controladores finales.

const { getTrendingNotesController, newNotesController, getNotesController, newVoteController, deleteVoteController, deleteNotesController } = require('../controllers/notes');

// Inserta un note.
router.post('/notes', authUserController, newNotesController);

// Obtener todas las notas.
router.get('/notes', authUserController, getNotesController)

// Obtener las notas en orden de likes
router.get('/notes/trending', authUserController, getTrendingNotesController)

// Eliminar un note.
router.delete('/notes/:notesId', authUserController, notesExistController, deleteNotesController);

//Insertar un voto
router.post('/notes/:notesId/upVotes', authUserController, newVoteController)

//Eliminar un voto
router.delete('/notes/:notesId/upVotes', authUserController, deleteVoteController)


module.exports = router