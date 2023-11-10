import React, { useEffect } from "react";
import Navbar from "../component/layout/navbar";
// import { useAllDataDoaDoa } from "../query/data";
import Error408 from "../component/message/errorMessage/error408";
import ApiAllDoa from "../component/fragment/doadoa/apiAllDoa";
import NavbarLoading from "../component/message/loadingMessage/navbarLoading";

const DoaPage = () => {
//   const { data, error, isLoading } = useAllDataDoaDoa();
  useEffect(() => {
    window.document.title = "home doa-doa";
    const linkElement = document.querySelector("link[rel*='icon']");
    linkElement.href = "/icondoa.png";
  },[]);
  return (
    <div className="w-full">
      {/* {isLoading ? (
        <NavbarLoading />
      ) : (
        data && <Navbar typeHome="asmaulhusna" type="home" />
      )}
      <div className="flex flex-col">
        {error ? <Error408 /> : isLoading ? "" : data && <ApiAllDoa />}
      </div> */}
    </div>
  );
};

export default DoaPage;
