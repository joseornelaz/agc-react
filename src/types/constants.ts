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
    NOTFOUND: '*'
} as const;

export type AppRoutingPaths = typeof AppRoutingPaths;

// export const YACHTS_ENDPOINTS = {
//     GET_ALL: '/page/yachts-list/Classic',
//     GET_BY_ID: '/page/yachts-by-id/'
// }

// export type YACHTS_ENDPOINTS = typeof YACHTS_ENDPOINTS;