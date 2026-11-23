import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  Observable,
} from "@apollo/client";
import { FLIGHTS_DATA, HOTELS_DATA } from "./mockData";

// =====================================================
// APOLLO CLIENT con MockLink (sin servidor real)
// Intercepta las queries y devuelve datos locales
// =====================================================

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Resolvedor local que simula un servidor GraphQL
async function resolveQuery(operationName, variables) {
  await delay(Math.random() * 500 + 200);

  if (operationName === "GetFlights") {
    const { destinationId } = variables;
    const flights = FLIGHTS_DATA[destinationId] ?? [];
    return { data: { flights } };
  }

  if (operationName === "GetHotels") {
    const { destinationId } = variables;
    const hotels = HOTELS_DATA[destinationId] ?? [];
    return { data: { hotels } };
  }

  return { data: null, errors: [{ message: `Query desconocida: ${operationName}` }] };
}

// Link personalizado que intercepta todas las operaciones
const mockLink = new ApolloLink((operation) => {
  return new Observable((observer) => {
    const { operationName, variables } = operation;

    resolveQuery(operationName, variables)
      .then((result) => {
        observer.next(result);
        observer.complete();
      })
      .catch((error) => {
        observer.error(error);
      });
  });
});

const client = new ApolloClient({
  link: mockLink,
  cache: new InMemoryCache(),
});

export default client;
