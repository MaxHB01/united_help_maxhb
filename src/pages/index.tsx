import { lazy } from "react";

const SalesDashboard = lazy(() => import("./sales/sales-dashboard"));
const FrequentItems = lazy(() => import("./frequent-items/frequent-items"));
const PredictedSalesDashboard = lazy(() => import("./predicted-sales/predicted-sales-dashboard"));

export { SalesDashboard, FrequentItems, PredictedSalesDashboard };
