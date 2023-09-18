import express from "express"

const app = express()

// Llamamos al servidor y lo hacemos funcionar en el puerto determinado.
app.listen(3000, () => {
  console.log(`El servidor está funcionando correctamente en http://localhost:3000`)
})