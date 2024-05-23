import { lazy } from "react";

const CenteredLayout = lazy(() => import("./centered/centered")); 
const SalesLayout = lazy(() => import("./sales/sales"));

export { CenteredLayout, SalesLayout };