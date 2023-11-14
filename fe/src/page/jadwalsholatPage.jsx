import React, { useEffect } from "react";
import Navbar from "../component/layout/navbar";

const JadwalSholatPage = () => {
  useEffect(() => {
    const linkElement = document.querySelector("link[rel*='icon']");
    linkElement.href = "/iconSholat.png";
    window.document.title = "home Jadwal Sholat";
  }, []);
  return (
    <div className="flex flex-col">
      <Navbar type="home" typeHome="sholat" />
      <div className="mt-20">
        <p className="text-center font-bold text-2xl">dalam tahap pembaruan...</p>
        <p className="text-center">tunggu beberapa waktu...</p>
      </div>
    </div>
  );
};

export default JadwalSholatPage;
