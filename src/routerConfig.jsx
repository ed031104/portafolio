
import { Home , Project, ErrorPage} from "./pages";

export const routes = [
    {
        path: '/',
        Component: <Home/>
    },
    {
        path : '/Projects',
        Component: <Project/>    
    },
    {
        path: '*',
        Component: <ErrorPage/>
    },
]