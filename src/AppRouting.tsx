import App from "./App";
import { AppRoutingPaths } from "@constants";
import { createHashRouter } from "react-router-dom";
// createBrowserRouter
// createHashRouter
import { 
    Calificaciones,
    Home, 
    MainTemplate, 
    MiRuta,
    NotFound,
    ToDo
} from "@components";

import { LoginPage } from "./components/pages/Login/Login";
import { ProtectedRoute } from "./components/templates/ProtectedRoute";

export const AppRouting = createHashRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        path: AppRoutingPaths.LOGIN,
        Component: LoginPage,
      },
      {
        Component: ProtectedRoute,
        children: [
          {
            Component: MainTemplate, // Layout para las rutas protegidas
            children: [
              {
                path: AppRoutingPaths.BLANK,
                Component: Home
              },
              {
                path: AppRoutingPaths.CALIFICACIONES,
                Component: Calificaciones
              },
              {
                path: AppRoutingPaths.MIRUTA,
                Component: MiRuta
              },
              {
                path: AppRoutingPaths.TODO,
                Component: ToDo
              },
            ]
          }
        ]
      },
      {
        path: '*',
        Component: NotFound
      }
    ]
  }
]);


// export const AppRouting = createBrowserRouter([
//     {
//         Component: App,
//         children: [
//             {
//                 path: '/',
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
//                     {
//                         path: AppRoutingPaths.NOTFOUND,
//                         Component: NotFound
//                     }
//                 ]
//             },
//         ],
//     }
// ]);