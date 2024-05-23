
import {lazy} from "react";

export {default as Button} from './button/button.jsx';
export {default as Form} from './form/form.jsx';

const CountingAnimation = lazy(() => import('./counting-animation.jsx'));

const Navigation = lazy(() => import('./nav/navigation.tsx'));

export {default as SkeletonCard} from './skeleton.jsx'
export {default as ToolTip} from './tooltip.jsx';
export {default as LineChart } from './line-chart.jsx'



// input
export * from './input';
export * from './container';
export * from './error'

export {Navigation, CountingAnimation}

