
import { Home , Project, ErrorPage} from "./pages";

export const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path : '/Projects',
        element: <Project/>    
    },
    {
        path: '*',
        element: <ErrorPage/>
    },
]