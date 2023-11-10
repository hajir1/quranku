import React from "react";
import sekeleton from "../../../styles/sekeleton.module.scss";
const AsmaulHusnaLoading = () => {
  return (
    <div className={`mt-12 min-h-screen flex flex-col`}>
      <div className="w-full flex justify-center mt-20">
        <div className={`${sekeleton.sekeleton} w-48 h-10`}></div>
      </div>
      <div className="w-full flex justify-center flex-wrap">
        <div
          className={`${sekeleton.sekeleton} w-[28%] min-h-28 max-[650px]:w-[90%] max-[1100px]:w-[45%]`}
        ></div>
        <div
          className={`${sekeleton.sekeleton} w-[28%] min-h-28 max-[650px]:w-[90%] max-[1100px]:w-[45%]`}
        ></div>
        <div
          className={`${sekeleton.sekeleton} w-[28%] min-h-28 max-[650px]:w-[90%] max-[1100px]:w-[45%]`}
        ></div>
        <div
          className={`${sekeleton.sekeleton} w-[28%] min-h-28 max-[650px]:w-[90%] max-[1100px]:w-[45%]`}
        ></div>
      </div>
    </div>
  );
};

export default AsmaulHusnaLoading;
