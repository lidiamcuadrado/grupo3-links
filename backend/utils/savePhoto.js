// Importamos las dependencias.
const fs = require('fs/promises');
const path = require('path');
const sharp = require('sharp');
const uuid = require('uuid');

// Importamos la constante que contiene el nombre del directorio de subida de archivos.
const { UPLOADS_DIR } = require('./constants');

// Importamos las funciones de error.
const { saveFileError } = require('../services/errorService');

// Función que se encargará de guardar una imagen en el disco.
const savePhoto = async (img, width) => {
    try {
        // Creamos la ruta absoluta al directorio de subida de archivos.
        const uploadsPath = path.join(__dirname, '..', '..', UPLOADS_DIR);

        try {
            // El método "access" lanza un error si la ruta especificada no existe.
            await fs.access(uploadsPath);
        } catch {
            // Si no existe entraremos en este catch y crearemos el directorio.
            await fs.mkdir(uploadsPath);
        }

        // Convertimos la imagen a un objeto tipo Sharp para poder redimensionarla.
        const sharpImg = sharp(img.data);

        // Redimensionamos la imagen. El parámetro "width" representa un ancho en píxeles.
        sharpImg.resize(width);

        // Generamos un nombre único para la imagen.
        const imgName = `${uuid.v4()}.jpg`;

        // Generamos la ruta absoluta a la imagen.
        const imgPath = path.join(uploadsPath, imgName);

        // Guardamos la imagen en el disco.
        await sharpImg.toFile(imgPath);

        // Retornamos el nombre que le hemos dado a la imagen.
        return imgName;
    } catch (err) {
        console.error(err);
        saveFileError();
    }
};

module.exports = savePhoto;
