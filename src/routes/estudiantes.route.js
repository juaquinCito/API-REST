import EstudiantesController from "../controllers/estudiantes.controller.js"
import express from "express"

class EstudiantesRoutes {
    constructor() {
        this.router = express.Router()
        this.controller = new EstudiantesController()
    }

    start() {
        this.router.get("/estudiantes", this.controller.getEstudiantes)
        this.router.post("/estudiantes", this.controller.postEstudiantes)
        this.router.patch("/estudiantes/update/:nombre", this.controller.patchEstudiantes)

        return this.router
    }
}

export default EstudiantesRoutes