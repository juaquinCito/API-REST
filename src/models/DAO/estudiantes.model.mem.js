class EstudiantesMemModel {
    constructor() {
        this.estudiantes = [
            { nombre: "Laura", edad: 38, nota: 8 },
            { nombre: "Axel", edad: 32, nota: 6 },
            { nombre: "Santi", edad: 28, nota: 5 }
        ]
    }

    getEstudiantes = async () => {
        let result = 0
        if (this.estudiantes.length != 0) {
            const estudiantess = this.estudiantes.map((e) => { return e.nombre + " " + e.edad + " " + e.nota })
            result = estudiantess.join(", ")
        } else {
            console.log(`No hay estudiantes`)

        }
        return result
    };

    postEstudiantes = async (data) => {
        this.estudiantes.push(data)
        return data
    };

    patchEstudiantes = async (nombre, data) => {
        try {
            const index = this.estudiantes.findIndex((e) => e.nombre == nombre)
            if (index == -1) throw new Error("El nombre no coincide con ningún estudiante.")
            const obj = { ...this.estudiantes[index], ...data }//destructuring para combinar el cambio, con el objeto
            this.words.splice(index, 1, obj)//reemplazo el objeto con el splice
            return obj
        } catch (error) {
            console.error("Ocurrió un error en la modificación.")
        }
    }

}

export default EstudiantesMemModel