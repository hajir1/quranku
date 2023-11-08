import React, { useContext, useEffect, useRef } from "react";
import { OptionContext } from "../../context/opsi";
import { Icon } from "@iconify/react";
import style from "../../styles/animation.module.scss";
import sekeleton from "../../styles/sekeleton.module.scss";
import Button from "../element/Button";
const Settings = ({ type }) => {
  const {
    opsiSetting,
    setOpsiSetting,
    opsiDarkmode,
    setOpsiDarkmode,
    countFont,
    setCountFont,
    ukuranGambarRef,
    settingModalRef,
    valueAudio,
    setValueAudio,
  } = useContext(OptionContext);
  useEffect(() => {
    if (countFont.current === 1) {
      ukuranGambarRef.current.style.width = "70%";
    } else if (countFont.current === 2) {
      ukuranGambarRef.current.style.width = "80%";
    } else if (countFont.current === 3) {
      ukuranGambarRef.current.style.width = "85%";
    } else if (countFont.current === 4) {
      ukuranGambarRef.current.style.width = "90%";
    } else if (countFont.current === 5) {
      ukuranGambarRef.current.style.width = "100%";
    }
  }, [countFont]);
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
  const onPlusHandler = () => {
    if (countFont < 5) {
      setCountFont(countFont + 1);
    }
  };
  const onMinusHandler = () => {
    if (countFont > 1) {
      setCountFont(countFont - 1);
    }
  };
  return (
    <div
      ref={settingModalRef}
      className={`${
        opsiSetting && style.animatedTrash
      } absolute text-white right-0 w-1/4 bg-black min-h-screen z-10 max-[700px]:w-4/5 max-[1000px]:w-3/5 max-[1400px]:w-2/6`}
    >
      {type === "homeQuran" && (
        <div className="p-2">
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
                className={`${!opsiDarkmode && "bg-amber-700 "} ${
                  style.opsiSurah
                } w-1/2 border border-white p-2 flex items-center justify-evenly cursor-pointer`}
              >
                <Icon className="2xl" icon="ic:sharp-brightness-4" />
                <h1 className="max-[450px]:text-sm">Mode Terang</h1>
              </div>
              <div
                onClick={onNotDarkmodeHandler}
                className={`${opsiDarkmode && "bg-amber-700"} ${
                  style.opsiSurah
                } cursor-pointer w-1/2 border border-white p-2 flex items-center justify-evenly`}
              >
                <Icon icon="mdi:brightness-3" />
                <h1 className="max-[450px]:text-sm">Mode Gelap</h1>
              </div>
            </div>
          </div>
        </div>
      )}
      {type === "detailSurah" && (
        <div className="p-2">
          <div className="p-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold tracking-widest">Settings</h1>
            <Icon
              onClick={onCloseSearchHandler}
              className="text-white text-2xl mx-2"
              icon="octicon:x-12"
            />
          </div>
          <div className="p-4  border-b-2">
            <h1 className="tracking-widest">Tema</h1>
            <div className="flex justify-center w-full gap-2 mt-4">
              <div
                onClick={onDarkmodeHandler}
                className={`${!opsiDarkmode && "bg-amber-700"} ${
                  style.opsiSurah
                } w-1/2 border border-white p-2 flex items-center justify-evenly cursor-pointer`}
              >
                <Icon className="2xl" icon="ic:sharp-brightness-4" />
                <h1 className="max-[450px]:text-sm">Mode Terang</h1>
              </div>
              <div
                onClick={onNotDarkmodeHandler}
                className={`${opsiDarkmode && "bg-amber-700"} ${
                  style.opsiSurah
                } w-1/2 border border-white p-2 flex items-center justify-evenly cursor-pointer`}
              >
                <Icon icon="mdi:brightness-3" />
                <h1 className="max-[450px]:text-sm">Mode Gelap</h1>
              </div>
            </div>
          </div>
          <div className="p-4 text-white">
            <div>
              <h1 className="tracking-widest">Ukuran Font al-Qur'an</h1>
              <div className="flex justify-center my-4">
                <Button
                  buttonClass={`w-1/6 p-2 border border-white`}
                  buttonClick={onPlusHandler}
                >
                  +
                </Button>
                <div className="w-1/3 flex p-2 justify-center">{countFont}</div>
                <Button
                  buttonClass={`w-1/6 p-2 border border-white`}
                  buttonClick={onMinusHandler}
                >
                  -
                </Button>
              </div>
            </div>
            <div className="w-full bg-white flex justify-end">
              <img
                ref={ukuranGambarRef}
                className="mt-1"
                src="/testimony.png"
                alt=""
              />
            </div>
            <div className="w-full text-center my-4">
              <p
                className={`${countFont === 1 && "text-xs"} ${
                  countFont === 2 && "text-[0.8rem]"
                } ${countFont === 3 && "text-[0.9rem]"} ${
                  countFont === 4 && "text-[1rem]"
                } ${countFont === 5 && "text-[1.1rem]"}`}
              >
                Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.
              </p>
            </div>
          </div>
          <div className="p-4 text-white">
            <div className=" flex justify-between">
              <h1 className="tracking-widest">Audio</h1>
              <div className={`w-2`}>
                <div
                  className={`${sekeleton.iconSetting} w-3 h-3 absolute right-3 rounded-full bg-red-700`}
                ></div>
                <Icon
                  className="cursor-pointer text-2xl"
                  icon="majesticons:bell-line"
                />
              </div>
            </div>
            <div className="w-full grid justify-center">
              <select
                value={valueAudio}
                name=""
                onChange={(e)=>setValueAudio(e.target.value)}
                id=""
                className="bg-black p-2 border border-white"
              >
                <option value="alafasy">Alafasy</option>
                <option value="ahmedajamy">Ahmedajamy</option>
                <option value="husarymujawwad">Husarymujawwad</option>
                <option value="minshawi">Minshawi</option>
                <option value="muhammadayyoub">Muhammadayyoub</option>
                <option value="muhammadjibreel">Muhammadjibreel</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Settings;
