import React, { useContext, useEffect } from "react";
import ApiSurahDetail from "../component/fragment/detailSurah/apiSurah";
import Navbar from "../component/layout/navbar";
import { OptionContext } from "../context/opsi";
import { useAlQuranDataSurahDetail } from "../query/data";
import Error408 from "../component/message/errorMessage/error408";
import NavbarLoading from "../component/message/loadingMessage/navbarLoading";
import LoadingDataSurah from "../component/message/loadingMessage/loadingDetailSurah";

const DetailAlQuranPAge = () => {
  const { opsiDarkmode } = useContext(OptionContext);
  const { data, isLoading, error } = useAlQuranDataSurahDetail();
  useEffect(() => {
    window.document.title = "detail al-Quran";
  });
  return (
    <div>
      {isLoading ? <NavbarLoading /> : data && <Navbar type="detailSurah" />}
      <div
        className={`${
          opsiDarkmode && "bg-black"
        } flex flex-col items-center min-h-screen p-3`}
      >
        {error ? <Error408 /> : isLoading ? <LoadingDataSurah/> : data && <ApiSurahDetail />}
      </div>
    </div>
  );
};

export default DetailAlQuranPAge;
