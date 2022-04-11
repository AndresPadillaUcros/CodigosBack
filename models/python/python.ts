
import {Schema,model} from "mongoose";
import {Enum_Clave} from "../enums/enums"

interface python{
    clave:Enum_Clave,
    tipo:string,
    descripcion: string,
    codigo: string
}

const pythonSchema = new Schema<python>({
    clave:{
        type:String,
        enum:Enum_Clave,
        required:true,
    },
    tipo:{
        type:String,
    },
    descripcion:{
        type:String,
    },
    codigo:{
        type:String,
        required:true,
        unique:true,
    },
});

const PythonModel = model('Python_Codigo',pythonSchema,"python_codigos");

export {PythonModel};