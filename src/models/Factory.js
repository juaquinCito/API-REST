import EstudiantesMemModel from "./DAO/estudiantes.model.mem.js"
//import EstudiantesFsModel from "./DAO/estudiantes.model.fs.js"

class Factory {
    static get(persistencia) {
        switch (persistencia) {
            case "MEM":
                console.warn("Persistencia en memoria del servidor.")
                return new EstudiantesMemModel();
            /*case "FS":
                console.warn("Persistiendo en File System")
                return new EstudiantesFsModel()*/

            default:
                console.warn("Persistencia por default.")
                return new EstudiantesMemModel();
        }
    }
}
export default Factory