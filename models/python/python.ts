
import {Schema,model} from "mongoose";


interface python{
    clave:string,
    descripcion: string,
    codigo: string
}

const pythonSchema = new Schema<python>({
    clave:{
        type:String,
        required:true,
    },
    descripcion:{
        type:String,
        required:true
    },
    codigo:{
        type:String,
        required:true,
        unique:true,
    },
});

const PythonModel = model('Python_Codigo',pythonSchema,"python_codigos");

export {PythonModel};