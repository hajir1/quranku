import React from "react";
import ApiSurahDetail from "../component/fragment/detailSurah/apiSurah";
import Navbar from "../component/layout/navbar";

const DetailAlQuranPAge = () => {
  return (
    <div>
      <Navbar type="detailSurah" />
      <div className="flex flex-col items-center min-h-screen p-2">
        <ApiSurahDetail />
      </div>
    </div>
  );
};

export default DetailAlQuranPAge;
