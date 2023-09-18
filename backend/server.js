import express from "express"
import { PORT } from './config.js'
import cors from "cors"
import bodyParser from 'body-parser'


// Errors.
import error404 from "./controllers/errors/error404.js"
import error500 from "./controllers/errors/error500.js"
import userRoutes from "./routes/userRoutes.js"


const app = express()


// Dependencias.
app.use(cors())
app.use(express.json())
app.use(bodyParser.json());


// Middlewares errors handling.
app.use(error404)
app.use(error500)


// Endpoints. (8)
app.get('/', (req, res) => {
  res.send({ message: 'Welcome' })
})
app.use('/users', userRoutes)


// Llamamos al servidor y lo hacemos funcionar en el puerto determinado.
app.listen(3000, () => {
  console.log(`Server listening at -> http://localhost:${PORT}\n`)
})