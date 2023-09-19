module.exports = {
    deleteFileError() {
        throw {
            httpStatus: 500, // Internal server error
            code: 'FILE_DELETE_FAILED',
            message: 'Error al eliminar el archivo del disco',
        };
    },
    emailAlreadyRegisteredError() {
        throw {
            httpStatus: 409, // Conflict
            code: 'EMAIL_ALREADY_REGISTERED',
            message: 'El email ya está registrado',
        };
    },
    invalidCredentialsError() {
        throw {
            httpStatus: 401, // Unauthorized
            code: 'INVALID_CREDENTIALS',
            message: 'Credenciales inválidas',
        };
    },
    invalidTokenError() {
        throw {
            httpStatus: 401, // Unauthorized
            code: 'INVALID_TOKEN',
            message: 'Token inválido',
        };
    },
    likeAlreadyExistsError() {
        throw {
            httpStatus: 409, // Conflict
            code: 'LIKE_ALREADY_EXISTS',
            message: 'No se puede dar like más de una vez al mismo elemento',
        };
    },
    notAuthenticatedError() {
        throw {
            httpStatus: 401, // Unauthorized
            code: 'NOT_AUTHENTICATED',
            message: "Debe enviar un token en el header 'Authorization'",
        };
    },
    notFoundError(resource = '') {
        throw {
            httpStatus: 404, // Not found
            code: 'RESOURCE_NOT_FOUND',
            message: `El recurso requerido "${resource}" no existe`,
        };
    },
    saveFileError() {
        throw {
            httpStatus: 500, // Internal server error
            code: 'FILE_SAVE_FAILED',
            message: 'Error al guardar el archivo en disco',
        };
    },
    unauthorizedUserError() {
        throw {
            httpStatus: 403, // Forbbiden
            code: 'UNAUTHORIZED',
            message: 'El usuario no está autorizado para hacer esta operación',
        };
    },
    userAlreadyRegisteredError() {
        throw {
            httpStatus: 409, // Conflict
            code: 'USER_ALREADY_REGISTERED',
            message: 'El nombre de usuario ya está registrado',
        };
    },
};
