import React from "react";
import { Route, Routes } from "react-router-dom";
import Life from "../components/Life/Life";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/life" element={<Life />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
