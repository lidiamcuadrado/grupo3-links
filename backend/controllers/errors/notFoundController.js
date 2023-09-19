// Importamos las funciones de error.
const { notFoundError } = require("../../services/errorService.js")

// Función controladora final que retorna error 404.
const notFoundController = (req, res, next) => {
    next(notFoundError());
}

module.exports =  notFoundController;