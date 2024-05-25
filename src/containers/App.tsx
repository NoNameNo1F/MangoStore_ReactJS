import React from "react";
import { Header, Footer } from "../components/Layout";
import {
    AccessDenied,
  Authentication,
  AuthenticationTestAdmin,
  Home,
  Login,
  MenuItemDetails,
  NotFound,
  Register,
  ShoppingCart,
} from "../pages";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { useGetShoppingCartQuery } from "../apis/shoppingCartApi";
import { setShoppingCart } from "../store/redux/shoppingCartSlice";
import { userModel } from "../interfaces";
import { jwtDecode } from "jwt-decode";
import { setLoggedInUser } from "../store/redux/userAuthSlice";
import { RootState } from "../store/redux/store";

function App() {
  const dispatch = useDispatch();
    const userData : userModel = useSelector((state: RootState) => state.userAuthStore);
  const { data, isLoading } = useGetShoppingCartQuery(
    userData.id
);
  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      const { fullName, id, email, role }: userModel = jwtDecode(localToken);
      dispatch(setLoggedInUser({ fullName, id, email, role }));
    }
  }, []);

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
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/authentication" element={<Authentication />} />
          <Route path="/authorization" element={<AuthenticationTestAdmin />} />
          <Route path="/access-denied" element={<AccessDenied />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
