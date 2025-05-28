import App from "./App";
import { AppRoutingPaths } from "@constants";
import { createBrowserRouter } from "react-router-dom";

import { 
    Calificaciones,
    Home, 
    MainTemplate, 
    MiRuta
} from "@components";

export const AppRouting = createBrowserRouter([
    {
        Component: App,
        children: [
            {
                path: "/",
                Component: MainTemplate,
                children: [
                    {
                        path: AppRoutingPaths.BLANK,
                        Component: Home,
                    },
                    {
                        path: AppRoutingPaths.CALIFICACIONES,
                        Component: Calificaciones,
                    },
                    {
                        path: AppRoutingPaths.MIRUTA,
                        Component: MiRuta,
                    },
                ]
            },
        ],
    }
]);