// importamos variables de entorno de nuestro fichero .env
require('dotenv').config();

// importamos las dependencias
const express = require('express');
const fileupload = require('express-fileupload')
const morgan = require('morgan');
const cors = require('cors');

// importamos las rutas
const routes = require('./routes');

// Importamos las funciones controladoras de errores.
const { 
    errorController,
    notFoundController,
} = require('./controllers/errors');

// creamos el servidor
const app = express();

// middleware que desrealiza un boy en formato "raw" creando la propiedad "body" en el objeto request
app.use(express.json());

// middleware que permite leer en form-data
app.use(fileupload());
// middleware que muestra por consola información de la petición entrante
app.use(morgan('dev'));

// middleware que evita problemas con las CORS cuando intentamos conectar el cliente con el servidor
app.use(cors());

// middleware que indica a express donde se encuentran las rutas
app.use(routes);

// middleware ruta no encontrada
app.use(notFoundController);

// middleware error
app.use(errorController);

// ponemos a funcionar el servidor en el puerto dado
app.listen(process.env.PORT, () => {
  console.log(`Server listening at: http://localhost:${process.env.PORT}`);
});

