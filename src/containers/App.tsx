import React from "react";
import { Header, Footer } from "../components/Layout";
import { Home, MenuItemDetails, NotFound } from "../pages";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <div className="pb-5">
        <Routes>
          <Route index element={<Home />} />
          <Route
            path="/menuItemDetails/:menuItemId"
            element={<MenuItemDetails />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
