import React, { useEffect } from "react";
import { useAllDoaDoa } from "../../../query/data";
import style from "../../../styles/animation.module.scss";
const ApiAllDoa = () => {
  const { data } = useAllDoaDoa();
  return (
    <div className="mt-20 w-full mb-2">
      <h1 className="text-center text-3xl">
        ِبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم
      </h1>
      <div className="flex justify-center w-full flex-wrap flex-row-reverse gap-2 mt-10">
        {data[0].result.map((item) => (
          <div
            key={item.latin}
            className={`${style.items} flex-col p-4 w-[45%] flex border border-amber-400 max-[650px]:w-[90%]`}
          >
            <div className="w-full text-center my-1">
              <h1 className="font-bold tracking-wide">{item.doa}</h1>
            </div>
            <div className="w-full flex flex-col justify-start my-2">
              <p className="text-right text-2xl my-2">{item.arab}</p>
              <p>{item.latin}</p>
            </div>
            <div className="w-full ">
              <span className="font-bold my-1">artinya :</span>
              <p className="text-sm"> {item.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiAllDoa;
