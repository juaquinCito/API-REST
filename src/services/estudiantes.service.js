import Factory from "../models/Factory.js"

class EstudiantesService {

    constructor() {
        this.model = Factory.get("MEM")
    }

    getEstudiantes = async () => {
        const estudiantes = await this.model.getEstudiantes()
        return estudiantes
    };

    postEstudiantes = async (data) => {
        const estudiante = await this.model.postEstudiantes(data)
        return estudiante
    };

    patchEstudiantes = async (nombre, data) => {
        const update = await this.model.patchEstudiantes(nombre, data)
        return update
    };
}

export default EstudiantesService