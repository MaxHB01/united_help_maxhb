import { lazy } from "react";

const DateSelector = lazy(() => import("./date/date-selector"));
const MultipleDateSelector = lazy(() => import("./date/multiple/multiple-date-selector"));

export {
    DateSelector,
    MultipleDateSelector
}