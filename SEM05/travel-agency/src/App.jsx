import { ApolloProvider } from "@apollo/client";
import client from "./graphql/apolloClient";
import AppRouter from "./router/AppRouter";
import "./styles/global.css";

// =====================================================
// App raíz:
//  ApolloProvider  → provee el cliente GraphQL mock
//  AppRouter       → provee React Router v6
// =====================================================
export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
}
