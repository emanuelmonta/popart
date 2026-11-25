import InicioPage from "../pages/InicioPage";
import LineUpPage from "../pages/LineUpPage";
import MapaPage from "../pages/MapaPage";
import GaleriaPage from "../pages/GaleriaPage";
import EntradasPage from "../pages/EntradasPage";
import ClubPage from "../pages/ClubPage";

export let router = [
    {
        path:'/',
        element: <InicioPage />
    },
    {
        path:'/LineUp',
        element: <LineUpPage />
    },
    {
        path:'/galeria',
        element: <GaleriaPage />
    },
    {
        path:'/entradas',
        element: <EntradasPage />
    },
    {
        path:'/mapa',
        element: <MapaPage />
    },
    {
        path:'club',
        element: <ClubPage />
    }
]