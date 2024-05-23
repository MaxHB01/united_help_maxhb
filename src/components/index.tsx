/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";

const Navigation = lazy(() => import("./navigation/navigation"));
const ToolTip = lazy(() => import("./tooltip/tooltip"));

const LineChart = lazy(() => import("./data/line-chart"));



export * from './sales';
export * from './animation'
export * from './input'

export {
    Navigation,
    ToolTip,
    LineChart
}