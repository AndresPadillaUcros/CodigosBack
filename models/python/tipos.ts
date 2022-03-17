import { gql } from 'apollo-server-express';

const tiposPython= gql`

    type Python_Codigo{
        _id:ID!
        clave:String!
        descripcion:String!
        codigo:String!
    }
    type Query{
        Codigos:[Python_Codigo]         
    }
    
    """ Codigos es el nombre que se le asigna a la query, asi debe ir en Query en el file resolvers.ts """

    type Mutation{

        crearCodigo(
            clave:String!
            descripcion:String!
            codigo:String!
        ):Python_Codigo

        eliminarCodigo(
            _id:String
        ):Python_Codigo

        editarCodigo(
            _id:String!
            clave:String!
            descripcion:String!
            codigo:String!
        ):Python_Codigo
    
    }
`;

export {tiposPython};