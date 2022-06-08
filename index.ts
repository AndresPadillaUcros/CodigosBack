import Express from 'express';
import Cors from 'cors';
import dotenv from 'dotenv';
import {conectarBD} from './db/db';
import {ApolloServer} from 'apollo-server-express';
import {tipos} from './graphql/tipos'
import {resolvers} from './graphql/resolvers'



dotenv.config();

const server= new ApolloServer({ 
    typeDefs:tipos,
    resolvers:resolvers,
    context:({req})=>{
        const token=req.headers?.authorization ??null;
        if(token){
            const password=token.split(' ')[1]
            return {password}
          }
        return null;
      }
}) 

const app= Express();



app.use(Express.json());
app.use(Cors());




/* app.post('/password',(req,res)=>{
    res.send('ok, se hizo el post')
    app.locals.contraseña=req.body
    
})


app.get('/print', (req, res)=>{
    res.send(app.locals.contraseña)
}) */





/* ||4000 significa que si no existe vaya al puerto 4000 */

app.listen({port:process.env.PORT || 4000},async()=>{
    await conectarBD();
    await server.start();  

    server.applyMiddleware({ app }); /* agregar Middleware adicionales  */
    console.log("servidor listo")

})