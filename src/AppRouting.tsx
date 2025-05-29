import App from "./App";
import { AppRoutingPaths } from "@constants";
import { createHashRouter } from "react-router-dom";
// createBrowserRouter
import { 
    Calificaciones,
    Home, 
    MainTemplate, 
    MiRuta,
    NotFound
} from "@components";

export const AppRouting = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainTemplate />,
        children: [
          {
            index: true, // Equivalente a path: ""
            element: <Home />
          },
          {
            path: AppRoutingPaths.CALIFICACIONES,
            element: <Calificaciones />
          },
          {
            path: AppRoutingPaths.MIRUTA,
            element: <MiRuta />
          },
          // Ruta para manejar 404 en GitHub Pages
          {
            path: '*',
            element: <NotFound /> // Crea este componente
          }
        ]
      }
    ]
  }
]);
// export const AppRouting = createHashRouter([
//     {
//         Component: App,
//         children: [
//             {
//                 path: "/",
//                 Component: MainTemplate,
//                 children: [
//                     {
//                         path: AppRoutingPaths.BLANK,
//                         Component: Home,
//                     },
//                     {
//                         path: AppRoutingPaths.CALIFICACIONES,
//                         Component: Calificaciones,
//                     },
//                     {
//                         path: AppRoutingPaths.MIRUTA,
//                         Component: MiRuta,
//                     },
//                 ]
//             },
//         ],
//     }
// ]);