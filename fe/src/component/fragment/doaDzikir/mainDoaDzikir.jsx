import React, { useContext, useEffect } from "react";
import style from "../../../styles/animation.module.scss";
import Button from "../../element/Button";
import { OptionContext } from "../../../context/opsi";
import ApiDoa from "./apiDoa";
import MainApiDzikir from "./apiDzikir/mainApi";
const ApiAllDoa = () => {
  const {
    opsiDoa,
    setOpsiDoa,
    opsiDarkmode,
    valueOpsiDzikir,
    setValueOpsiDzikir,
  } = useContext(OptionContext);
  useEffect(() => {}, [valueOpsiDzikir]);
  return (
    <div className="mt-20 w-full mb-2 p-4">
      <h1 className="text-center text-3xl">
        ِبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْم
      </h1>
      <div className="w-full p-2 flex justify-between items-center mt-4 ">
        <div
          className={`${
            opsiDarkmode ? " border-white" : " border-black"
          } w-2/6 p-1 border max-[650px]:w-[60%]`}
        >
          <Button
            buttonClick={() => setOpsiDoa(true)}
            buttonClass={`${style.options} ${opsiDoa && " border-b-[1px] "} ${
              opsiDarkmode ? "border-b-white" : "border-b-black "
            } w-1/2 p-2`}
          >
            Do'a
          </Button>
          <Button
            buttonClick={() => setOpsiDoa(false)}
            buttonClass={`${style.options} ${!opsiDoa && " border-b-[1px] "}  ${
              opsiDarkmode ? "border-b-white" : "border-b-black "
            } w-1/2 p-2`}
          >
            dzikir
          </Button>
        </div>
        <div className={`${opsiDoa && "hidden"} w-2/7 border border-black max-[650px]:w-[35%] `}>
          <select
            className={`${opsiDarkmode && "bg-white text-black"} p-2 max-[650px]:w-full`}
            value={valueOpsiDzikir}
            onChange={(e) => setValueOpsiDzikir(e.target.value)}
            name="opsiDzikir"
            id=""
          >
            <option value="semuaDzikir">semua dzikir</option>
            <option value="sesudahSholat">sesudah sholat</option>
            <option value="pagiHari">pagi hari</option>
            <option value="malamHari">sore dan malam hari</option>
          </select>
        </div>
      </div>
      {opsiDoa ? <ApiDoa /> : <MainApiDzikir />}
    </div>
  );
};

export default ApiAllDoa;
