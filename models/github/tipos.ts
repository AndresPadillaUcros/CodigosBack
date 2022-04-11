import { gql } from 'apollo-server-express';

const tiposGithub= gql`

    type Github_Codigo{
        _id:ID!
        descripcion:String!
        codigo:String!
    }


    type Query{
        getCodigosGithub:[Github_Codigo]       
    }
    
    """ getCodigos es el nombre que se le asigna a la query, asi debe ir en Query en el file resolvers.ts """

    type Mutation{

        crearCodigoGithub(
            descripcion:String!
            codigo:String!
        ):Github_Codigo

        eliminarCodigoGithub(
            _id:String
        ):Github_Codigo

        editarCodigoGithub(
            _id:String!
            descripcion:String
            codigo:String!
        ):Github_Codigo
    
    }
`;

export {tiposGithub};