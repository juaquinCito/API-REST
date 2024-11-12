import express from 'express'
import EstudiantesRouter from '../TP2-Taller2/src/routes/estudiantes.route.js'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/", new EstudiantesRouter().start())



app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
app.on("error", (error) => {
    console.log(`Error: ${error}`)
})