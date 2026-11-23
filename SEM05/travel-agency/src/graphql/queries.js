import { gql } from "@apollo/client";

// =====================================================
// QUERIES GraphQL – Vuelos y Hoteles
// =====================================================

export const GET_FLIGHTS = gql`
  query GetFlights($destinationId: ID!) {
    flights(destinationId: $destinationId) {
      id
      airline
      origin
      destination
      departure
      arrival
      duration
      price
      seats
      class
      stops
    }
  }
`;

export const GET_HOTELS = gql`
  query GetHotels($destinationId: ID!) {
    hotels(destinationId: $destinationId) {
      id
      name
      stars
      pricePerNight
      image
      amenities
      available
      address
      checkIn
      checkOut
      reviews
    }
  }
`;
