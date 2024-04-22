import { BrowserRouter as Router } from "react-router-dom";
import { Suspense } from "react";
import { AppRouter } from "./Router";
import { Load } from "./components/Load";

export function App(){

    return(
        <Router>
            <Suspense fallback={<Load/>}>
                <AppRouter/>
            </Suspense>
        </Router>
    );
}