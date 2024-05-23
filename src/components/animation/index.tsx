import { lazy } from "react";

const CountingAnimation = lazy(() => import("./counting-animation"));
const SkeletonCard = lazy(() => import("./skeleton/skeleton-card"));

export {
    CountingAnimation,
    SkeletonCard
}