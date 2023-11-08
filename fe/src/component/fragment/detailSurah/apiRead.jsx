import React, { useContext, useEffect } from "react";
import { useAlQuranDataSurahDetail } from "../../../query/data";
import { OptionContext } from "../../../context/opsi";

const ApiRead = () => {
  const { data } = useAlQuranDataSurahDetail();
  const { countFont ,opsiSetting} = useContext(OptionContext);
  useEffect(() => {}, [data]);
  return (
    <div className={`${opsiSetting && "blur-[2px]"} w-full mt-4`}>
      <div className="flex flex-row-reverse flex-wrap">
        {data?.ayahs?.map((data) => (
          <div className="m-4" key={data?.number?.inQuran}>
            <div className="flex flex-row-reverse justify-evenly items-center">
              <p
                className={`${countFont === 1 && "text-[1.2rem]"} ${
                  countFont === 2 && "text-[1.4rem]"
                } ${countFont === 3 && "text-[1.6rem]"} ${
                  countFont === 4 && "text-[1.8rem]"
                } ${
                  countFont === 5 && "text-[2rem]"
                } text-right tracking-wide max-[550px]:text-sm`}
              >
                {data?.arab}
              </p>
              <div className="">
                <div className="w-8 h-8 border mx-4 rotate-45 border-amber-400 grid place-content-center">
                  <div className="-rotate-45">
                    <p>{data?.number?.inSurah}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiRead;
