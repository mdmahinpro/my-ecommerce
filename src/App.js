import React, { createContext, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import OrderReview from './components/OrderReview/OrderReview.jsx';
import PrivateOutlet from "./components/PrivateOutlet.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import Shipment from "./components/Shipment/Shipment.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Test1 from './Test1';

export const UserContext= createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Navbar></Navbar>
      <Routes>
        <Route path="/shop" element={<Shop></Shop>}></Route>
        <Route path="/" element={<Navigate to="/shop" />}></Route>
        <Route
          path="/product/:key"
          element={<ProductDetails></ProductDetails>}
        ></Route>
       
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/shipment" element={<Shipment></Shipment>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
        <Route path="/*" element={<PrivateOutlet></PrivateOutlet>}>
          <Route path="orderreview" element={<OrderReview></OrderReview>} ></Route>
          <Route path="manageinventory" element={<Test1></Test1>} ></Route>
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
