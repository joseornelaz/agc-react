export const AppRoutingPaths = {
    BLANK: "",
    HOME: "/",
    CALENDARIO: "/calendario",
    MIRUTA: "/miruta",
    BIBLIOTECA: "/biblioteca",
    CALIFICACIONES: "/calificaciones",
    LOGIN: "/login",
    ERROR: "/error",
    NOTFOUND: '*'
} as const;

export type AppRoutingPaths = typeof AppRoutingPaths;