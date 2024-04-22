import { Route, Routes } from "react-router-dom"
import { routes as routesConfig} from "./routerConfig"

export const AppRouter = () => {
    <Routes>
        {
            routesConfig.map( (route, index ) => (
                <Route key={index} path={route.path} element={route.element} />
            ))
        }
    </Routes>
}