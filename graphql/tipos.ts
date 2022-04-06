import { gql } from "apollo-server-express";
import { tiposPython } from "../models/python/tipos";
import { tiposEnums } from "../models/enums/tipos";

const tiposGlobales= gql`
    scalar Date
`;

export const tipos=[tiposGlobales,tiposPython,tiposEnums] 