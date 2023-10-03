const getNotesModel = require('../../models/notes/getNotesModel');

const getNotesController = async (req, res, next) => {
  try {
    const notes = await getNotesModel();

    res.json({
      status: 'ok',
      data: {
        notes: notes.map(note => ({
          ...note,
          votes: note.votes,
          
        }))
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getNotesController;