import React, { useEffect } from "react";
import { useAllDoa } from "../../../query/data";
import style from "../../../styles/animation.module.scss";
const ApiDoa = () => {
  const { data } = useAllDoa();
  useEffect(() => {
  }, [data]);

  return (
    <div className="w-full flex justify-around flex-wrap gap-2">
      {data.map((item) => (
        <div
          className={`${style.items} w-[47%] border border-amber-400 min-h-[5rem] p-4 max-[650px]:w-full`}
          key={item.id}
        >
          <h1 className="text-center tracking-wide text-base font-bold">
            {item.title}
          </h1>
          <div className="my-2">
            <p className="text-right text-base my-2">{item.arabic}</p>
            <p className="tracking-wider text-left">{item.latin}</p>
            <div className="tracking-wider text-left my-3">
              <span className="font-bold">artinya : </span>
              <p className="mt-2 text-sm">{item.translation}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApiDoa;
