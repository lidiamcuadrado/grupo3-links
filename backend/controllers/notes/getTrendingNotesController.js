const getNotesModel = require('../../models/notes/getNotesModel');

const getTrendingNotesController = async (req, res, next) => {
  try {
    const { keyword } = req.query;
    const notes = await getNotesModel(keyword, req.user?.id);
    const sortedNotes = notes.sort((a, b) => b.votes - a.votes); // Ordenar las notas por cantidad de votos (upVotes)
    res.json({
      status: 'ok',
      data: {
        notes: sortedNotes.map(note => ({
          ...note,
          owner: Boolean(note.owner),
          votes: note.votes,
        }))
      }
    });
  } catch (err) {
    next(err);
  }
};
module.exports = getTrendingNotesController