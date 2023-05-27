import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "../components/Cart/Registration";
import Ticket from "../components/Cart/Ticket";
import Chill from "../components/Chill/Chill";
import Danger from "../components/Danger/Danger";
import Journey from "../components/Journey/Journey";
import Life from "../components/Life/Life";
import Main from "../components/Main/Main";
import Work from "../components/Work/Work";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/life" element={<Life />} />
        <Route path="/chil" element={<Chill />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/work" element={<Work />} />
        <Route path="/danger" element={<Danger />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/ticket" element={<Ticket />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
