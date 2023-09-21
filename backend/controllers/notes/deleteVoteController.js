// Importamos los modelos
const deleteVoteModel = require('../../models/notes/deleteVoteModel')

// función controladora final que elimina un voto existente
const deleteVoteController = async (req, res, next) => {
    try {
    // obtenemos el id del enlace sobre el que queremos eliminar un voto

    const { notesId } = req.params;

    await deleteVoteModel(notesId, req.user.id)

    res.send({
        status: "ok",
        message: "Voto eliminado",
    });

} catch (err) {
    next(err);
}
};

module.exports = deleteVoteController;
