import { gql } from 'apollo-server-express';

const tiposPython= gql`

    type Python_Codigo{
        _id:ID!
        clave:Enum_Clave!
        tipo: String!
        descripcion:String
        codigo:String!
    }

    input FiltroCodigos{
        clave:Enum_Clave
    }

    type Query{
        getCodigos(filtro:FiltroCodigos):[Python_Codigo]       
    }
    
    """ getCodigos es el nombre que se le asigna a la query, asi debe ir en Query en el file resolvers.ts """

    type Mutation{

        crearCodigo(
            clave:Enum_Clave!
            tipo:String
            descripcion:String
            codigo:String!
        ):Python_Codigo

        eliminarCodigo(
            _id:String
        ):Python_Codigo

        editarCodigo(
            _id:String!
            clave:Enum_Clave!
            tipo:String
            descripcion:String
            codigo:String!
        ):Python_Codigo
    
    }
`;

export {tiposPython};