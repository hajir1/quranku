import { useContext, useEffect, useState } from "react";
import NavbarLoading from "../component/message/loadingMessage/navbarLoading";
import Navbar from "../component/layout/navbar";
import { useAllAsmaulHusna } from "../query/data";
import Error408 from "../component/message/errorMessage/error408";
import { OptionContext } from "../context/opsi";

import style from "../styles/animation.module.scss";
import { getAsmaulHusnaSearch } from "../services/service";
import LoadingItems from "../component/message/loadingMessage/laodingitems";
const AsmaulHusnaPage = () => {
  const { data, isLoading, error } = useAllAsmaulHusna();
  const { valueSearchAsmaulHusna, opsiSetting, opsiDarkmode } =
    useContext(OptionContext);
  const [dataAsmaulHusnaSearch, setDataAsmaulHusnaSearch] = useState("");
  useEffect(() => {
    window.document.title = "home asmaul-husna";
    const linkElement = document.querySelector("link[rel*='icon']");
    linkElement.href = "/iconasma.png";
  }, []);
  useEffect(() => {
    if (valueSearchAsmaulHusna === "") {
      setDataAsmaulHusnaSearch("");
    } else {
      getAsmaulHusnaSearch(valueSearchAsmaulHusna, (data) => {
        setDataAsmaulHusnaSearch(data.data);
      });
    }
  }, [valueSearchAsmaulHusna]);
  useEffect(() => {}, [dataAsmaulHusnaSearch]);
  return (
    <div className="w-full">
      {isLoading ? (
        <NavbarLoading />
      ) : (
        data && <Navbar typeHome="asmaulhusna" type="home" />
      )}
      <div className=" flex flex-col">
        {error ? (
          <Error408 />
        ) : isLoading ? (
          <LoadingItems />
        ) : (
          data && (
            <div
              className={`${opsiSetting && "blur-[4px]"} ${
                opsiDarkmode && "bg-black text-white"
              } mt-12 min-h-screen`}
            >
              <div className="flex justify-center w-full my-6">
                <p className="font-bold text-[2rem] tracking-tighter">
                  {" للّٰهُ لَآ اِلٰهَ اِلَّا هُوَۚ اَلْحَيُّ الْقَيُّوْمُ"}
                </p>
              </div>
              <div className="w-full flex flex-row-reverse flex-wrap justify-center gap-2">
                {dataAsmaulHusnaSearch !== "" ? (
                  <div
                    className={`${style.items} w-[28%] min-h-28 border border-amber-400 cursor-pointer p-2 flex justify-center items-center max-[650px]:w-[90%] max-[1100px]:w-[45%]`}
                  >
                     <div className="relative ml-4">
                        <div
                          className={`${style.number} border border-amber-400 rotate-45 w-10 h-10 rounded-md`}
                        ></div>
                        <div className="absolute top-1/4 -translate-x-1/2 left-1/2">
                          <h1 className="">{dataAsmaulHusnaSearch?.urutan}</h1>
                        </div>
                      </div>
                    <div className="flex flex-col w-3/5 justify-center items-center p-1">
                      <p className="text-center font-bold">
                        {dataAsmaulHusnaSearch?.latin}
                      </p>
                      <p className="text-sm text-center">
                        {dataAsmaulHusnaSearch?.arti}
                      </p>
                    </div>
                    <div className="flex items-center justify-center w-1/5">
                      <h1 className="text-2xl text-center">
                        {dataAsmaulHusnaSearch?.arab}
                      </h1>
                    </div>
                  </div>
                ) : (
                  data.map((item) => (
                    <div
                      key={item.urutan}
                      className={`${style.items} w-[28%] cursor-pointer min-h-28 border border-amber-400 p-2 flex justify-center items-center max-[650px]:w-[90%] max-[1100px]:w-[45%]`}
                    >
                      <div className="relative ml-4">
                        <div
                          className={`${style.number} border border-amber-400 rotate-45 w-10 h-10 rounded-md`}
                        ></div>
                        <div className="absolute top-1/4 -translate-x-1/2 left-1/2">
                          <h1 className="">{item?.urutan}</h1>
                        </div>
                      </div>
                      <div className="flex flex-col w-3/5 justify-center items-center p-1">
                        <p className="text-center font-bold">{item.latin}</p>
                        <p className="text-sm text-center">{item.arti}</p>
                      </div>
                      <div className="flex items-center justify-center w-1/5">
                        <h1 className="text-2xl text-center">{item.arab}</h1>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AsmaulHusnaPage;
