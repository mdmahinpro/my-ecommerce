import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import OrderReview from "./components/OrderReview/OrderReview.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import Shop from "./components/Shop/Shop.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/" element={<Navigate to='/shop'/>}></Route>
        <Route path="/product/:key" element={<ProductDetails></ProductDetails>}></Route>
        <Route path="/orderreview" element={<OrderReview></OrderReview>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
