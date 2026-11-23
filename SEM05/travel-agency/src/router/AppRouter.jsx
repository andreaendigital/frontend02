import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import DestinationList from "../pages/DestinationList";
import DestinationDetail from "../pages/DestinationDetail";
import Flights from "../pages/Flights";
import Hotels from "../pages/Hotels";
import NotFound from "../pages/NotFound";

// =====================================================
// LAYOUT PRINCIPAL – contiene Navbar + contenido
// =====================================================
function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

// =====================================================
// RUTAS de la aplicación
//
//  /                          → Home
//  /destinations              → DestinationList   (API REST mock)
//  /destinations/:id          → DestinationDetail (API REST mock)
//  /destinations/:id/flights  → Flights           (GraphQL mock)
//  /destinations/:id/hotels   → Hotels            (GraphQL mock)
//  *                          → NotFound
// =====================================================
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "destinations",
        element: <DestinationList />,
      },
      {
        path: "destinations/:id",
        element: <DestinationDetail />,
        // Rutas hijas renderizadas con <Outlet> dentro de DestinationDetail
        children: [
          {
            path: "flights",
            element: <Flights />,
          },
          {
            path: "hotels",
            element: <Hotels />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
