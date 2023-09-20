// Importamos los modelos
const insertVoteModel = require('../../models/notes/insertVoteModel')

// función controladora final que insterta un nuevo voto
const newVoteController = async (req, res, next) => {
    try {

    // obtenemos el id de la nota sobre el que queremos dar un voto

    const { notesId } = req.params;

    await insertVoteModel(notesId, req.user.id)

    // CAMBIAR: data con propiedad true o false (facilitar recogida a traves del front)    
    res.send({
        status: "ok",
        message: "Voto agregado",
    });

} catch (err) {
    next(err);
}
};

module.exports = newVoteController;
