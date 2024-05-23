import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Navigation } from "@components";
import { SalesDashboard, FrequentItems, PredictedSalesDashboard } from "@pages";
import { Suspense } from "react";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Suspense>
        <Routes>
          <Route path="/" element={<SalesDashboard />} />
          <Route path="/SamenGekocht" element={<FrequentItems />} />
          <Route path="/Voorspeld" element={<PredictedSalesDashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
