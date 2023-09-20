// Importamos los modelos
const deleteVoteModel = require('../../models/notes/insertVoteModel')

// función controladora final que elimina un voto existente
const deleteVoteController = async (req, res, next) => {
    try {
    // obtenemos el id del enlace sobre el que queremos eliminar un voto

    const { upVotesId } = req.params;

    await deleteVoteModel(upVotesId, req.user.id)

    res.send({
        status: "ok",
        message: "Voto eliminado",
    });

} catch (err) {
    next(err);
}
};

module.exports = deleteVoteController;
