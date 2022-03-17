import { PythonModel } from "./python";

const resolversPython ={

    Query:{
        Codigos: async (parent,args)=>{
            const codigos=await PythonModel.find()
            return codigos;
        }
    },
        
    Mutation:{
        crearCodigo:async(parent,args)=>{
            const codigoCreado=await PythonModel.create({
                clave:args.clave,
                descripcion:args.descripcion,
                codigo:args.codigo,
                }   
            );
            return  codigoCreado;
        },
        
        eliminarCodigo: async(parent,args)=>{
            if(Object.keys(args).includes('_id')){
                const codigoEliminado=PythonModel.findOneAndDelete
                    ({
                    _id:args._id
                    });
                return codigoEliminado;
            }  
        },
           
        editarCodigo:  async(parent,args)=>{
            const codigoEditado= await PythonModel.findByIdAndUpdate(args._id,{
                clave:args.clave,
                descripcion:args.descripcion,
                codigo:args.codigo,        
            },
                {new:true}  
            );
            return codigoEditado;     
        },
        
    }
}

export {resolversPython};