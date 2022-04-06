import { gql } from 'apollo-server-express';

const tiposEnums= gql`
    enum Enum_Clave{
        Exploring
        String
        Filtering,
        Joining
        Dataframe
        Date
        Groupby
        Print
        Dict
        List
    }

`;

export {tiposEnums};