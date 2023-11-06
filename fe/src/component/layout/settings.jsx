import React, { useContext, useEffect } from "react";
import { OptionContext } from "../../context/opsi";
import { Icon } from "@iconify/react";
import style from "../../styles/animation.module.scss";
const Settings = ({ type }) => {
  const { opsiSetting, setOpsiSetting, opsiDarkmode, setOpsiDarkmode } =
    useContext(OptionContext);
  const onCloseSearchHandler = () => {
    setOpsiSetting(!opsiSetting);
  };
  const onDarkmodeHandler = (e) => {
    e.preventDefault();
    setOpsiDarkmode(false);
  };
  const onNotDarkmodeHandler = (e) => {
    e.preventDefault();
    setOpsiDarkmode(true);
  };
  return (
    <div
      className={`${style.animatedTrash} absolute text-white right-0 w-1/4 bg-black min-h-screen z-10 max-[550px]:w-4/5`}
    >
      {type === "home" && (
        <div>
          <div className="p-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-widest">Settings</h1>
            <Icon
              onClick={onCloseSearchHandler}
              className="text-white text-2xl mx-2 cursor-pointer"
              icon="octicon:x-12"
            />
          </div>
          <div className="p-4">
            <h1 className="tracking-widest">Tema</h1>
            <div className="flex justify-center w-full gap-2 mt-4">
              <div
                onClick={onDarkmodeHandler}
                className={`${!opsiDarkmode && "bg-amber-700 "} ${style.opsiSurah} w-1/2 border border-white p-2 flex items-center justify-evenly cursor-pointer`}
              >
                <Icon className="2xl" icon="ic:sharp-brightness-4" />
                <h1 className="">Mode Terang</h1>
              </div>
              <div
                onClick={onNotDarkmodeHandler}
                className={`${
                  opsiDarkmode && "bg-amber-700"
                } ${style.opsiSurah} cursor-pointer w-1/2 border border-white p-2 flex items-center justify-evenly`}
              >
                <Icon icon="mdi:brightness-3" />
                <h1>Mode Gelap</h1>
              </div>
            </div>
          </div>
        </div>
      )}
      {type === "detailSurah" && (
        <div>
          <div className="p-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-widest">Settings</h1>
            <Icon
              onClick={onCloseSearchHandler}
              className="text-white text-2xl mx-2"
              icon="octicon:x-12"
            />
          </div>
          <div className="p-4">
            <h1 className="tracking-widest">Tema</h1>
            <div className="flex justify-center w-full gap-2 mt-4">
              <div
                onClick={onDarkmodeHandler}
                className={`${!opsiDarkmode && "bg-amber-700"} ${style.opsiSurah} w-1/2 border border-white p-2 flex items-center justify-evenly cursor-pointer`}
              >
                <Icon className="2xl" icon="ic:sharp-brightness-4" />
                <h1 className="">Mode Terang</h1>
              </div>
              <div
                onClick={onNotDarkmodeHandler}
                className={`${
                  opsiDarkmode && "bg-amber-700"
                } ${style.opsiSurah} w-1/2 border border-white p-2 flex items-center justify-evenly cursor-pointer`}
              >
                <Icon icon="mdi:brightness-3" />
                <h1>Mode Gelap</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
