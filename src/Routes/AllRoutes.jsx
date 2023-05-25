import React from "react";
import { Route, Routes } from "react-router-dom";
import Life from "../components/Life/Life";
import Main from "../components/Main/Main";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/life" element={<Life />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
