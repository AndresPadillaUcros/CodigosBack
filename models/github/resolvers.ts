import { GithubModel } from "./github";

const resolversGithub ={

    Query:{
        getCodigosGithub: async (parent,args)=>{
            const codigos=await GithubModel.find()
            return codigos;
        }
    },
        
    Mutation:{
        crearCodigoGithub:async(parent,args)=>{
            const codigoCreado=await GithubModel.create({
                descripcion:args.descripcion,
                codigo:args.codigo,
                }   
            );
            return  codigoCreado;
        },
        
        eliminarCodigoGithub: async(parent,args,context)=>{
            if (context.password===process.env.PASSWORD ){
                console.log("la contraseña es correcta")
                if(Object.keys(args).includes('_id')){
                    const codigoEliminado=GithubModel.findOneAndDelete
                        ({
                        _id:args._id
                        });
                    return codigoEliminado;
                }  
            }
        },
           
        editarCodigoGithub:  async(parent,args,context)=>{
            if (context.password===process.env.PASSWORD ){
                console.log("la contraseña es correcta")
                const codigoEditado= await GithubModel.findByIdAndUpdate(args._id,{
                    descripcion:args.descripcion,
                    codigo:args.codigo,        
                },
                    {new:true}  
                );
                return codigoEditado;   
            }  
        },
        
    }
}

export {resolversGithub};