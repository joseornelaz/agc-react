export const AppRoutingPaths = {
    BLANK: "",
    HOME: "/",
    CALENDARIO: "/calendario",
    MIRUTA: "/miruta",
    BIBLIOTECA: "/biblioteca",
    CALIFICACIONES: "/calificaciones",
    LOGIN: "/login",
    ERROR: "/error",
    TODO: "/todo",
    PREGUNTAS_FRECUENTES: "/faqs",
    AYUDA_EXTERIOR: "/help-ext",
    NOTFOUND: '*'
} as const;

export type AppRoutingPaths = typeof AppRoutingPaths;

// export const LOGIN_ENDPOINTS = {
//     POST_LOGIN: '/login',
// }

// export type LOGIN_ENDPOINTS = typeof LOGIN_ENDPOINTS;