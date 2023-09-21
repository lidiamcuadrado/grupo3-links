// Importamos los modelos

const selectAllNotesModel = require("../../models/notes/selectAllnotesModel");

// función controladora final que selecciona todas las notes.
const listNotesController = async (req, res, next) => {
    try {
    const notes = await selectAllNotesModel();


    res.send({
        status: "ok",
        data: {
            notes,
        }
    });

} catch (err) {
    next(err);
}
};

module.exports = listNotesController;