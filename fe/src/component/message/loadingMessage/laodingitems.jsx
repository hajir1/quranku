import React from "react";
import sekeleton from "../../../styles/sekeleton.module.scss";
const LoadingItems = () => {
  return (
    <div className={`mt-12 min-h-screen flex flex-col`}>
      <div className="w-full flex items-center mt-20 flex-col">
        <div className={`${sekeleton.sekeleton} w-48 h-10`}></div>
      </div>
      <div className="w-full flex flex-wrap h-auto justify-center gap-4 mt-10">
        <div
          className={`${sekeleton.sekeleton} w-[28%] h-[4rem] max-[650px]:w-[90%] max-[1100px]:w-[45%]`}
        ></div>
        <div
          className={`${sekeleton.sekeleton} w-[28%] h-[4rem] max-[650px]:w-[90%] max-[1100px]:w-[45%]`}
        ></div>
        <div
          className={`${sekeleton.sekeleton} w-[28%] h-[4rem] max-[650px]:w-[90%] max-[1100px]:w-[45%]`}
        ></div>
        <div
          className={`${sekeleton.sekeleton} w-[28%] h-[4rem] max-[650px]:w-[90%] max-[1100px]:w-[45%]`}
        ></div>
        <div
          className={`${sekeleton.sekeleton} w-[28%] h-[4rem] max-[650px]:w-[90%] max-[1100px]:w-[45%]`}
        ></div>
        <div
          className={`${sekeleton.sekeleton} w-[28%] h-[4rem] max-[650px]:w-[90%] max-[1100px]:w-[45%]`}
        ></div>
        <div
          className={`${sekeleton.sekeleton} w-[28%] h-[4rem] max-[650px]:w-[90%] max-[1100px]:w-[45%]`}
        ></div>
        <div
          className={`${sekeleton.sekeleton} w-[28%] h-[4rem] max-[650px]:w-[90%] max-[1100px]:w-[45%]`}
        ></div>
      </div>
    </div>
  );
};

export default LoadingItems;
