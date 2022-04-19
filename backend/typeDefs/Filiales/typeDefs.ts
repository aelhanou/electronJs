import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Filiale {
    id: ID!
    name: String!
    description: String!
    image: File
  }
  

  input FilialeInput {
    name: String!
    description: String!
    image: Upload
  }

  type Query {
    Filiales: [Filiale]
  }
  type Mutation {
    addFiliale(input: FilialeInput): Filiale
    deleteFiliale(id: ID!): Boolean
  }
  
`;

