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
}) 

const app= Express();

app.use(Express.json());
app.use(Cors());

/* ||4000 significa que si no existe vaya al puerto 4000 */

app.listen({port:process.env.PORT || 4000},async()=>{
    await conectarBD();
    await server.start();  

    server.applyMiddleware({ app }); /* agregar Middleware adicionales  */
    console.log("servidor listo")
})