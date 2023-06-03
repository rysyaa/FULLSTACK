import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PeopleContextProvider from "./context/PeopleContextProvider";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import FavContextProvider from "./context/FavContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FavContextProvider>
      <CartContextProvider>
        <AuthContextProvider>
          <PeopleContextProvider>
            <App />
          </PeopleContextProvider>
        </AuthContextProvider>
      </CartContextProvider>
    </FavContextProvider>
  </BrowserRouter>
);
