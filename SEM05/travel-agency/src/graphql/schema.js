import { gql } from "@apollo/client";

// =====================================================
// SCHEMA GraphQL – Vuelos y Hoteles
// =====================================================

export const typeDefs = gql`
  type Flight {
    id: ID!
    airline: String!
    origin: String!
    destination: String!
    departure: String!
    arrival: String!
    duration: String!
    price: Float!
    seats: Int!
    class: String!
    stops: Int!
  }

  type Hotel {
    id: ID!
    name: String!
    stars: Int!
    pricePerNight: Float!
    image: String!
    amenities: [String!]!
    available: Boolean!
    address: String!
    checkIn: String!
    checkOut: String!
    reviews: Float!
  }

  type Query {
    flights(destinationId: ID!): [Flight!]!
    hotels(destinationId: ID!): [Hotel!]!
    flight(id: ID!): Flight
    hotel(id: ID!): Hotel
  }
`;
