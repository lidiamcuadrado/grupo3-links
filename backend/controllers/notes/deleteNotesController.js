// Importamos los modelos.
const deleteNotesModel = require('../../models/notes/deleteNotesModel');

// Función controladora final que elimina un note.
const deleteNotesController = async (req, res, next) => {
    try {
        // Obtenemos el id del note que queremos eliminar.
        const { notesId } = req.params;

        await deleteNotesModel(notesId, req.user.id);

        res.send({
            status: 'ok',
            message: 'Nota eliminado',
        });
    } catch (err) {
        next(err);
    }
};

module.exports = deleteNotesController;