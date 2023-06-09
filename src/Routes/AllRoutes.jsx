import React from "react";
import { Route, Routes } from "react-router-dom";
import Registration from "../components/Cart/Registration";
import Ticket from "../components/Cart/Ticket";
import Chill from "../components/Chill/Chill";
import Cyprus2 from "../components/Chill/Chill2/Cyprus2";
import Greece2 from "../components/Chill/Chill2/Greece2";
import Thailand2 from "../components/Chill/Chill2/Thailand2";
import Turkiye2 from "../components/Chill/Chill2/Turkiye2";
import Uae2 from "../components/Chill/Chill2/Uae2";
import Cyprus from "../components/Chill/Cyprus";
import Greece from "../components/Chill/Greece";
import Thailand from "../components/Chill/Thailand";
import Türkiye from "../components/Chill/Türkiye";
import Uae from "../components/Chill/Uae";
import Afghanistan from "../components/Danger/Afghanistan";
import Danger from "../components/Danger/Danger";
import Papua2 from "../components/Danger/Danger2/Papua2";
import Salvador2 from "../components/Danger/Danger2/Salvador2";
import Venezuela2 from "../components/Danger/Danger2/Venezuela2";
import Nigeria from "../components/Danger/Nigeria";
import Papua from "../components/Danger/Papua";
import Salvador from "../components/Danger/Salvador";
import Venezuela from "../components/Danger/Venezuela";
import Georgia from "../components/Journey/Georgia";
import India from "../components/Journey/India";
import Italy from "../components/Journey/Italy";
import Japan from "../components/Journey/Japan";
import Journey from "../components/Journey/Journey";
import Georgia2 from "../components/Journey/Journey2/Georgia2";
import India2 from "../components/Journey/Journey2/India2";
import Italy2 from "../components/Journey/Journey2/Italy2";
import Japan2 from "../components/Journey/Journey2/Japan2";
import Norway2 from "../components/Journey/Journey2/Norway2";
import Norway from "../components/Journey/Norway";
import Finland from "../components/Life/Finland";
import Germany from "../components/Life/Germany";
import Iceland from "../components/Life/Iceland";
import Life from "../components/Life/Life";
import Finland2 from "../components/Life/Life2/Finland2";
import Germany2 from "../components/Life/Life2/Germany2";
import Iceland2 from "../components/Life/Life2/Iceland2";
import Netherlands2 from "../components/Life/Life2/Netherlands2";
import Switzerland2 from "../components/Life/Life2/Switzerland2";
import Netherlands from "../components/Life/Netherlands";

import Switzerland from "../components/Life/Switzerland";
import Main from "../components/Main/Main";
import Australia from "../components/Work/Australia";
import Canada from "../components/Work/Canada";
import GreatBritain from "../components/Work/GreatBritain";
import USA from "../components/Work/USA";
import Work from "../components/Work/Work";
import Australia2 from "../components/Work/Work2/Australia2";
import Canada2 from "../components/Work/Work2/Canada2";
import GreatBritain2 from "../components/Work/Work2/GreatBritain2";
import USA2 from "../components/Work/Work2/USA2";
import Login from "../components/Cart/Login";
import ShopTickets from "../components/Cart/ShopTickets";
import Cart from "../components/Cart/Cart";
import Favorites from "../components/Cart/Favorites";
import Country from "../components/Cart/Country";
import Reviews from "../components/Cart/Reviews";

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
        <Route path="/swi2" element={<Switzerland2 />} />
        <Route path="/ned2" element={<Netherlands2 />} />
        <Route path="/ice2" element={<Iceland2 />} />
        <Route path="/ger2" element={<Germany2 />} />
        <Route path="/fin2" element={<Finland2 />} />
        <Route path="/nor2" element={<Norway2 />} />
        <Route path="/geo2" element={<Georgia2 />} />
        <Route path="/ind2" element={<India2 />} />
        <Route path="/ita2" element={<Italy2 />} />
        <Route path="/jap2" element={<Japan2 />} />
        <Route path="/tur2" element={<Turkiye2 />} />
        <Route path="/cyp2" element={<Cyprus2 />} />
        <Route path="/tha2" element={<Thailand2 />} />
        <Route path="/uae2" element={<Uae2 />} />
        <Route path="/gre2" element={<Greece2 />} />
        <Route path="/ang2" element={<GreatBritain2 />} />
        <Route path="/usa2" element={<USA2 />} />
        <Route path="/can2" element={<Canada2 />} />
        <Route path="/ger2" element={<Germany2 />} />
        <Route path="/aus2" element={<Australia2 />} />
        <Route path="/sal2" element={<Salvador2 />} />
        <Route path="/ven2" element={<Venezuela2 />} />
        <Route path="/pap2" element={<Papua2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<ShopTickets />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/country" element={<Country />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
