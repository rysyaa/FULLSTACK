import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "../components/Cart/Registration";
import Ticket from "../components/Cart/Ticket";
import Chill from "../components/Chill/Chill";
import Cyprus from "../components/Chill/Cyprus";
import Türkiye from "../components/Chill/Türkiye";
import Uae from "../components/Chill/Uae";
import Danger from "../components/Danger/Danger";
import Georgia from "../components/Journey/Georgia";
import India from "../components/Journey/India";
import Italy from "../components/Journey/Italy";
import Japan from "../components/Journey/Japan";
import Journey from "../components/Journey/Journey";
import Norway from "../components/Journey/Norway";
import Finland from "../components/Life/Finland";
import Germany from "../components/Life/Germany";
import Iceland from "../components/Life/Iceland";
import Life from "../components/Life/Life";
import Netherlands from "../components/Life/Netherlands";
import Switzerland from "../components/Life/Switzerland";
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
        <Route path="/sweden" element={<Switzerland />} />
        <Route path="/nether" element={<Netherlands />} />
        <Route path="/ice" element={<Iceland />} />
        <Route path="ger" element={<Germany />} />
        <Route path="/fin" element={<Finland />} />
        <Route path="/nor" element={<Norway />} />
        <Route path="/geor" element={<Georgia />} />
        <Route path="/ind" element={<India />} />
        <Route path="/ita" element={<Italy />} />
        <Route path="/jap" element={<Japan />} />
        <Route path="/tur" element={<Türkiye />} />
        <Route path="/cyp" element={<Cyprus />} />
        <Route path="/uae" element={<Uae />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
