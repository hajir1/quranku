import React, { useEffect } from "react";
import Navbar from "../component/layout/navbar";

const KisahNabiPage = () => {
    useEffect(() => {
        const linkElement = document.querySelector("link[rel*='icon']");
        linkElement.href = "/iconNabi.png";
        window.document.title = "home kisah nabi";
      }, []);
  return (
    <div className="flex flex-col">
      <Navbar type="home" typeHome="kisahnabi" />
      <div className="mt-20">
        <p className="text-center font-bold text-2xl">
          dalam tahap pembaruan...
        </p>
        <p className="text-center">tunggu beberapa waktu...</p>
      </div>
    </div>
  );
};

export default KisahNabiPage;
