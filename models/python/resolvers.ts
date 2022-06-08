import { PythonModel } from "./python";
import { AuthenticationError } from 'apollo-server'

const resolversPython ={

    Query:{
        getCodigos: async (parent,args)=>{
            const codigos=await PythonModel.find({...args.filtro})
            return codigos;
        }
    },
        
    Mutation:{
        crearCodigo:async(parent,args)=>{
            const codigoCreado=await PythonModel.create({
                clave:args.clave,
                tipo:args.tipo,
                descripcion:args.descripcion,
                codigo:args.codigo,
                }   
            );
            return  codigoCreado;
        },
        
        eliminarCodigo: async(parent,args,context)=>{
            if (context.password===process.env.PASSWORD ){
                console.log("la contraseña es correcta")
                if(Object.keys(args).includes('_id')){
                    const codigoEliminado=PythonModel.findOneAndDelete
                        ({
                        _id:args._id
                        });
                    return codigoEliminado;
                }  
            }
        },
           
        editarCodigo:  async(parent,args,context)=>{

                console.log("la contraseña es:",context)
                if (context.password===process.env.PASSWORD ){
                    console.log("la contraseña es correcta")
                    const codigoEditado= await PythonModel.findByIdAndUpdate(args._id,{
                        clave:args.clave,
                        tipo:args.tipo,
                        descripcion:args.descripcion,
                        codigo:args.codigo,        
                    },
                        {new:true}  
                    );
                    return codigoEditado;     
                } else{
                    throw new AuthenticationError('You must be logged in');
                }
   
        },
        
    }
}

export {resolversPython};