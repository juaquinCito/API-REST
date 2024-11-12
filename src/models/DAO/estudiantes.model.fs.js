import fs from "fs";

class EstudiantesFsModel {
    constructor() {
        this.estudiantes = "estudiantes.json";
    }

    getEstudiantes = async () => {
        const estudiantesJson = await fs.promises.readFile(this.estudiantes, "utf-8");
        const estudiantesArr = await JSON.parse(estudiantesJson);

        let resp;
        if (estudiantesArr.length > 0) {
            const estuds = this.estudiantes.map((e) => { return e.nombre + " " + e.edad + " " + e.nota })
            resp = estuds.join(", ")
        } else {
            resp = "No hay estudiantes";
        }
        return resp;
    };

    postEstudiantes = async (data) => {
        const estudiantesJson = await fs.promises.readFile(this.estudiantes, "utf-8");
        const estudiantesArr = await JSON.parse(estudiantesJson)
        estudiantesArr.push(data)

        let newJson = JSON.stringify(estudiantesArr);
        await fs.promises.writeFile(this.estudiantes, newJson); // Persisto

        return data
    };

    patchEstudiantes = async (nombre, data) => {
        const estudiantesJson = await fs.promises.readFile(this.estudiantes, "utf-8");
        const estudiantesArr = await JSON.parse(estudiantesJson);

        try {
            const index = estudiantesArr.findIndex((e) => e.nombre == nombre)
            if (index == -1) throw new Error("El nombre no coincide con ningún estudiante.")
            const obj = { ...this.estudiantes[index], ...data }  //destructuring para combinar el cambio, con el objeto
            this.words.splice(index, 1, obj)    //reemplazo el objeto con el splice

            let newJson = JSON.stringify(estudiantesArr);
            await fs.promises.writeFile(this.estudiantes, newJson); // Persisto

            return obj

        } catch (error) {
            console.error("Ocurrió un error en la modificación.")
        }

    }


}

export default EstudiantesFsModel;
