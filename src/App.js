import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Main from "./components/Main/Main";
import Registration from "./components/Cart/Registration";
import EditPeople from "./components/Cart/EditPeople";
import People from "./components/Cart/People";
import AllRoutes from "./Routes/AllRoutes";

const App = () => {
  return (
    <div>
      <Header />
      <AllRoutes />
    </div>
  );
};

export default App;
