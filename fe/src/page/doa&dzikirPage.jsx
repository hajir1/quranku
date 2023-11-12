import React, { useContext, useEffect } from "react";
import Navbar from "../component/layout/navbar";
import {  useAllDoa } from "../query/data";
import Error408 from "../component/message/errorMessage/error408";
import ApiAllDoa from "../component/fragment/doaDzikir/mainDoaDzikir";
import NavbarLoading from "../component/message/loadingMessage/navbarLoading";
import { OptionContext } from "../context/opsi";
import LoadingItems from "../component/message/loadingMessage/laodingitems";

const DoaPage = () => {
  const { data, error, isLoading } = useAllDoa();
  const {opsiDarkmode} =useContext(OptionContext)
  useEffect(() => {
    window.document.title = "home doa-doa";
    const linkElement = document.querySelector("link[rel*='icon']");
    linkElement.href = "/icondoa.png";
  },[]);
  return (
    <div className="w-full">
      {isLoading ? (
        <NavbarLoading />
      ) : (
        data && <Navbar typeHome="doa" type="home" />
      )}
      <div className={`${opsiDarkmode && "bg-black text-white"} flex flex-col`}>
        {error ? <Error408 /> : isLoading ? <LoadingItems/> : data && <ApiAllDoa />}
      </div>
    </div>
  );
};

export default DoaPage;
