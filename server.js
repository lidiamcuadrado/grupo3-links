// importamos variables de entorno de nuestro fichero .env
require('dotenv').config();

// importamos las dependencias
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// importamos las rutas
const routes = require('./backend/routes');

// Importamos las funciones controladoras de errores.
const { 
        errorController,
        notFounderController,
        notFoundController,
} = require('./backend/controllers/errors');

// creamos el servidor
const app = express();

// middleware que desrealiza un boy en formato "raw" creando la propiedad "body" en el objeto request
app.use(express.json())

// middleware que muestra por consola información de la petición entrante
app.use(morgan('dev'));

// middleware que evita problemas con las CORS cuando intentamos conectar el cliente con el servidor
app.use(cors());

// middleware que indica a express donde se encuentran las rutas
app.use(routes);

// middleware ruta no encontrada
app.use(notFoundController);

// middleware error
// eslint-disable-next-line no-unused-vars
app.use(errorController);

// ponemos a funcionar el servidor en el puerto dado
app.listen(process.env.PORT, () => {
  console.log(`Server listening at: http://localhost:${process.env.PORT}`);
});

