
import {Schema,model} from "mongoose";


interface github{
    descripcion:string,
    codigo: string
}

const githubSchema = new Schema<github>({

    descripcion:{
        type:String,
        required:true,
    },
    codigo:{
        type:String,
        required:true,
        unique:true,
    },
});

const GithubModel = model('Github_Codigo',githubSchema,"github_codigos");

export {GithubModel};