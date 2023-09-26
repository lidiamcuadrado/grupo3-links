const getNotesModel = require('../../models/notes/getNotesModel');

const getNotesController = async (req, res, next) => {
  try {
    const notes = await getNotesModel();

    res.send({
      status: 'ok',
      data: {
        enlaces: notes.map(note => ({
          ...note,
          votes: note.likes,
          
        }))
      }
    });
  } catch (err) {
    next(err);
  }
};

module.exports = getNotesController;