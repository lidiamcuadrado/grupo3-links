// Importamos las dependencias.
const fs = require('fs/promises');
const path = require('path');

// Importamos la constante que contiene el nombre del directorio de subida de archivos.
const { UPLOADS_DIR } = require('./constants');

// Importamos las funciones de error.
const { deleteFileError } = require('../services/errorService');

// Función que se encargará de eliminar una imagen del disco.
const deletePhoto = async (imgName) => {
    try {
        // Creamos la ruta absoluta al archivo que queremos eliminar.
        const imgPath = path.join(__dirname, '..', '..', UPLOADS_DIR, imgName);

        try {
            // El método "access" lanza un error si la ruta especificada no existe.
            await fs.access(imgPath);
        } catch {
            // Si no existe finalizamos la función.
            return;
        }

        // Eliminamos la imagen.
        await fs.unlink(imgPath);
    } catch (err) {
        console.error(err);
        deleteFileError();
    }
};

module.exports = deletePhoto;
