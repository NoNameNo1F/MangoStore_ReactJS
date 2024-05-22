import React from "react";
import { Header, Footer } from "../components/Layout";
import { Home, MenuItemDetails, NotFound, ShoppingCart } from "../pages";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { UseDispatch, useDispatch } from "react-redux";
import { useGetShoppingCartQuery } from "../apis/shoppingCartApi";
import { setShoppingCart } from "../store/redux/shoppingCartSlice";

function App() {
  const dispatch = useDispatch();

  const { data, isLoading } = useGetShoppingCartQuery(
    "ef103d14-904a-4adc-b0f3-0593a253986b"
  );

  useEffect(() => {
    if (!isLoading) {
      console.log(data.result);
      dispatch(setShoppingCart(data.result?.cartItems));
    }
  }, [data]);
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
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
