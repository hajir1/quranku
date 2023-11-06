import { useContext, useEffect, useState } from "react";
import { useAlQuranDataSurah } from "../../../query/data";
import { OptionContext } from "../../../context/opsi";
import { ApiAlQuranSurahSearch } from "../../../services/service";
import style from "../../../styles/animation.module.scss";
import { Link } from "react-router-dom";
const AllAlQuranApi = () => {
  const { data } = useAlQuranDataSurah();
  const { valueSearchSurah, opsiSetting } =
    useContext(OptionContext);
  const [dataSurahById, setDataSurahById] = useState("");
  useEffect(() => {
    if (valueSearchSurah !== "") {
      ApiAlQuranSurahSearch(valueSearchSurah, (dataApi) => {
        setDataSurahById(dataApi);
      });
    } else {
      setDataSurahById("");
    }
  }, [valueSearchSurah]);
  return (
    <div
      className={`${
        opsiSetting && "blur-[2px]"
       }  flex justify-around w-[90%] flex-wrap gap-2 max-[550px]:w-full`}
    >
      {dataSurahById !== "" ? (
        <div
          className="w-[30%] border border-amber-400 flex h-20 items-center max-[550px]:w-[100%]"
          key={dataSurahById.number}
        >
          <div className="border border-amber-400 rotate-45 w-10 h-10 ml-4">
            <div className="-rotate-45 w-10 h-10 grid place-content-center">
              <h1>{dataSurahById.number}</h1>
            </div>
          </div>
          <div className="flex flex-col w-[55%] items-center">
            <h1 className="font-bold">{dataSurahById.englishName}</h1>
            <p className="text-center text-sm">
              {dataSurahById.englishNameTranslation}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center w-auto h-full">
            <p className="font-bold text-base text-center">
              {dataSurahById.name}
            </p>
            <p className="text-sm">{dataSurahById.numberOfAyahs} ayat</p>
          </div>
        </div>
      ) : (
        data?.data?.map((data) => (
          <Link
            to={`/surah/${data.number}`}
            className={`${style.items} w-[30%] outline-none border rounded-md border-amber-400 flex h-20 items-center max-[550px]:w-[100%] `}
            key={data.number}
          >
            <div
              className={`${style.items__content} border border-amber-400 rotate-45 w-10 h-10 ml-4 rounded-md`}
            >
              <div className="-rotate-45 w-10 h-10 grid place-content-center">
                <h1>{data.number}</h1>
              </div>
            </div>
            <div className="flex flex-col w-[55%] items-center">
              <h1 className="font-bold">{data.englishName}</h1>
              <p className="text-center text-sm">
                {data.englishNameTranslation}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-auto h-full">
              <p className="font-bold text-base text-center">{data.name}</p>
              <p className="text-sm">{data.numberOfAyahs} ayat</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default AllAlQuranApi;
