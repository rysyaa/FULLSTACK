import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import AllRoutes from "./Routes/AllRoutes";

const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname === "/register" || location.pathname === "/login" ? null : <Header />}
      {/* <Header /> */}
      <AllRoutes />
    </div>
  );
};

export default App;
