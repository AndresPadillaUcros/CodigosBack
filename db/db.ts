import moongose from 'mongoose';


const conectarBD = async() => {
    return await moongose.connect(process.env.DATABASE_URL)
        .catch((e)=>{
            console.error('Error conectando a la bd',e);
        })
        .then(()=>{
            console.log('Conexion exitosa');
        });

};

export { conectarBD };