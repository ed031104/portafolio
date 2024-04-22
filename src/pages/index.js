import React from "react";
import Home from "../components/home/Home";

export { Home }

export const Project = React.lazy(() => import("../components/projects/ProjectsPage"));
export const ErrorPage = React.lazy(() => import("../components/ErrorPage"));