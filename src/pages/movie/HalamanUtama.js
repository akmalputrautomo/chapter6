import React from "react";
import Headers from "../../assets/component/navbar/Header";
import NowPlaying from "../../assets/component/halamanutama/NowPlaying";
import { PopularMovie } from "../../assets/component/halamanutama/PopularMovie";
import { useSelector } from "react-redux";

const HalamanUtama = () => {
  // const Data = useSelector((state) => state.auth);
  // console.log(Data, "data Halaman Utama");

  return (
    <div className="bg-black">
      <Headers />
      <NowPlaying />
      <PopularMovie />
    </div>
  );
};
export default HalamanUtama;
