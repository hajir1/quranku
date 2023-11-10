import React from "react";

const Page404 = () => {
  return (
    <div className="w-full h-full justify-center flex">
      <div className="w-4/5 h-4/5 flex justify-center flex-col items-center p-10 max-[800px]:w-full max-[800px]:h-full">
        <p className="text-3xl">kesalahan route...</p>
        <img className="w-full h-full" src="/notfound.png" alt="" />
      </div>
    </div>
  );
};

export default Page404;
