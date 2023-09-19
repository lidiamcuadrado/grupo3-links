//Importamos las dependencias.
const jwt = require ('jsonwebtoken';)
const bcrypt = require('bcrypt');

const selectUserByEmail = require("./selectUserByEmail");
const { invalidCredentialsError } = require('../../services/errorService');


const loginUserController = async (req, res, next) => {
    try {
        //Obtenemos los datos necesarios del body.
        const { email, password } = req.body;
        // si falta algún campo lanzamos error
    if (!email || !password) {
        missingFieldsError();
    }

    // Otenemos los datos del usario.
    const user = await selectUserByEmail(email);

    //Comprobamos si las contraseñas que ha insertadi el usuario es correcta.
    const validPass = await bcrypt.compare(password, user.password);

    // Si la contraseña no coincide lnzamos un error.
    if (!validPass){
        invalidCredentialsError()
    }
    // Generamos un objeto con la información que queremos agregar al token.
    const tokenInfo = {
        id: user.id,
        role: user.role,
    };

    //Generamos el token
    const token = jwt.sign(tokenInfo, process.env.SECRET, {
        expiresIn: '7d'
    });
    
    res.send({
        status: 'ok',
        data: {
            token,
        },
})
    
    } catch (errr) {
        next(err);
    }
}

module.exports = loginUserController;