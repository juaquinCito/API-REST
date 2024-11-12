import EstudiantesController from "../controllers/estudiantes.controller"
import express from "express"

class EstudiantesRoutes {
    constructor() {
        this.router = express.Router()
        this.controller = new EstudiantesController()
    }

    start() {
        this.router.get("/words", this.controller.getEstudiantes)
        this.router.post("/words", this.controller.postEstudiantes)
        this.router.patch("/words/update/:nombre", this.controller.patchEstudiantes)

        return this.router
    }
}

export default EstudiantesRoutes