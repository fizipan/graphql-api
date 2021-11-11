const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    _id: ID!
    title: String!
    author: String!
    description: String
    release_year: Int!
    genre: String!
  }

  type Query {
    getAllBooks: [Book]!
    getBook(_id: ID!): Book
  }

  type Mutation {
    createBook(
      title: String!
      author: String!
      description: String
      release_year: Int!
      genre: String!
    ): Book!

    updateBook(
      _id: ID!
      title: String
      author: String
      description: String
      release_year: Int
      genre: String
    ): Book!

    deleteBook(_id: ID): Boolean
  }
`;

module.exports = typeDefs;
