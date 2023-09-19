// Función controladora para el middleware de error
const errorController = (err, req, res, next) => {
    console.error(err);

    res.status(err.httpStatus || 500).send({
        status: 'error',
        message: err.message,
    });
};

module.exports = errorController;