import React, { useContext, useEffect } from "react";
import ApiSurahDetail from "../component/fragment/detailSurah/apiSurah";
import Navbar from "../component/layout/navbar";
import { OptionContext } from "../context/opsi";

const DetailAlQuranPAge = () => {
  const { opsiDarkmode } = useContext(OptionContext);
useEffect(()=>{
  window.document.title ="detail al-Quran"
})
  return (
    <div>
      <Navbar type="detailSurah" />
      <div className={`${opsiDarkmode && "bg-black"} flex flex-col items-center min-h-screen p-3`}>
        <ApiSurahDetail />
      </div>
    </div>
  );
};

export default DetailAlQuranPAge;
