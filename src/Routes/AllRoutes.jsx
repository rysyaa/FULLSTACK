import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "../components/Cart/Registration";
import Ticket from "../components/Cart/Ticket";
import Chill from "../components/Chill/Chill";
import Cyprus from "../components/Chill/Cyprus";
import Greece from "../components/Chill/Greece";
import Thailand from "../components/Chill/Thailand";
import Türkiye from "../components/Chill/Türkiye";
import Uae from "../components/Chill/Uae";
import Afghanistan from "../components/Danger/Afghanistan";
import Danger from "../components/Danger/Danger";
import Nigeria from "../components/Danger/Nigeria";
import Papua from "../components/Danger/Papua";
import Salvador from "../components/Danger/Salvador";
import Venezuela from "../components/Danger/Venezuela";
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
import Australia from "../components/Work/Australia";
import Canada from "../components/Work/Canada";
import GreatBritain from "../components/Work/GreatBritain";
import USA from "../components/Work/USA";
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
        <Route path="/thi" element={<Thailand />} />
        <Route path="/gre" element={<Greece />} />
        <Route path="/ang" element={<GreatBritain />} />
        <Route path="/usa" element={<USA />} />
        <Route path="/can" element={<Canada />} />
        <Route path="/aus" element={<Australia />} />
        <Route path="/sal" element={<Salvador />} />
        <Route path="/ven" element={<Venezuela />} />
        <Route path="/nig" element={<Nigeria />} />
        <Route path="/pap" element={<Papua />} />
        <Route path="/afg" element={<Afghanistan />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
