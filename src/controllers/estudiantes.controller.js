import EstudiantesService from "../services/estudiantes.service.js"

class EstudiantesController {
    constructor() {
        this.service = new EstudiantesService();
    }

    getEstudiantes = async (req, res) => {
        const estudiantes = await this.service.getEstudiantes()
        res.send(estudiantes)
    };

    postEstudiantes = async (req, res) => {
        const data = req.body
        const newEstudiante = await this.service.postEstudiantes(data)
        res.send(newEstudiante)
    };

    patchEstudiantes = async (req, res) => {
        const { nombre } = req.params
        const data = req.body
        const update = await this.service.patchEstudiantes(nombre, data)
        res.send(update)
    };
}

export default EstudiantesController;