const insertNotesModel = require('../../models/notes/insertNotesModel');
const { missingFieldsError } = require('../../services/errorService');

//Importamos la función que valida los esquemas
const validateSchema = require('../../utils/validateSchema');

//Importamos el esquema de Joi
const newNotesSchema = require('../../schemas/notes/newNotesSchema');

// Función controladora final que insterta un nuevo usuario
const newNotesController = async (req, res, next) => {
  try {
    // Importamos los datos del body
    const { text, url } = req.body; //

    await validateSchema(newNotesSchema, {
      ...req.body,
      ...req.files,
    });

    if (!text || !url) {
      // Verifica que ambos "text" y "url" estén presentes
      missingFieldsError();
    }

    // Creamos la nota en la base de datos
    const notesId = await insertNotesModel(text, url, req.user.id);

    res.send({
      status: 'ok',
      data: {
        note: {
          id: notesId,
          userId: req.user.id,
          text,
          url,
          createdAt: new Date(),
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = newNotesController;
