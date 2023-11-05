import React, { useEffect } from "react";
import { useAlQuranDataSurahDetail } from "../../../query/data";

const ApiRead = () => {
  const { data } = useAlQuranDataSurahDetail();
  useEffect(() => {
  }, [data]);
  return (
    <div className="w-full mt-4">
      <div className="flex flex-row-reverse flex-wrap">
        {data?.ayahs?.map((data) => (
          <div className="m-4" key={data?.number?.inQuran}>
            <div className="flex flex-row-reverse justify-evenly">
              <p className="text-2xl text-right tracking-wide">{data?.arab}</p>
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
