import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailMovie from "../pages/movie/DetailMovie";
import { Register } from "../pages/auth/Register";
import { Loginpage } from "../pages/auth/Loginpage";
import PageSearch from "../pages/movie/PageSearch";
import { SeAllMovie } from "../pages/movie/SeAllMovie";
import HalamanUtama from "../pages/movie/HalamanUtama";
import TokenProtected from "../assets/component/protected/protec";

export const Routerlist = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/" element={<Loginpage />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route
          path="/halaman"
          element={
            <TokenProtected>
              <HalamanUtama />
            </TokenProtected>
          }
        />
        <Route path="/searchresult/:namemovie" element={<PageSearch />} />
        <Route path="/allmovie" element={<SeAllMovie />} />
        <Route path="/detail/:movieId" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  );
};
