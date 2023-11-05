import React, { useContext, useEffect } from "react";
import { Icon } from "@iconify/react";
import { OptionContext } from "../../context/opsi";
import Input from "../element/input";
import style from "../../styles/animation.module.scss";
import { useParams } from "react-router-dom";

const Navbar = ({ type, children }) => {
  const {
    searchAlert,
    setSearchAlert,
    valueSearchSurah,
    setValueSearchSurah,
    opsiTafsir,
    valueSearchSurahById,
    setValueSearchSurahById,
    opsiSurah,
  } = useContext(OptionContext);
  const { id } = useParams();
  useEffect(() => {
    onCloseSearchHandler();
  }, [id]);
  const onSearchHandler = (e) => {
    setSearchAlert(true);
  };
  const onCloseSearchHandler = () => {
    setSearchAlert(false);
    setValueSearchSurah("");
    setValueSearchSurahById("");
  };
  return (
    <div
      className={`${
        opsiTafsir && "blur-[2px]"
      } w-full h-12 bg-black fixed z-40`}
    >
      {type === "home" && (
        <div className="relative">
          <div className="flex ">
            {searchAlert && (
              <div
                className={`${style.animatedSearch} fixed right-0  p-1  h-full w-1/4`}
              >
                <form className={`flex items-center`} action="">
                  <Input
                    inputClass="w-full h-full outline-none bg-none p-2 placeholder:tracking-wider"
                    inputValue={valueSearchSurah}
                    inputType="number"
                    inputChange={(e) => setValueSearchSurah(e.target.value)}
                    inputPlaceholder="cari surah"
                  />
                  <Icon
                    onClick={onCloseSearchHandler}
                    className="text-white text-2xl mx-2"
                    icon="octicon:x-12"
                  />
                </form>
              </div>
            )}
            <div className="h-12 w-1/4 flex justify-start items-center ">
              <img className="h-full mx-4" src={`/iconQuran.png`} alt="" />
              <p className="text-white tracking-wide mx-4">al-Quran</p>
            </div>
            <div className="flex w-3/4 text-white justify-end items-center gap-5 text-2xl">
              <Icon icon="uiw:setting" />
              <Icon icon="fluent:info-12-filled" />
              <Icon
                onClick={onSearchHandler}
                className="mr-10"
                icon="material-symbols:search"
              />
            </div>
          </div>
        </div>
      )}
      {type === "detailSurah" && (
        <div className="relative">
          <div className="flex ">
            {searchAlert && (
              <div
                className={`${style.animatedSearch} fixed right-0  p-1  h-full w-1/4`}
              >
                <form className={`flex items-center`} action="">
                  <Input
                    inputClass="w-full h-full outline-none bg-none p-2 placeholder:tracking-wider"
                    inputValue={valueSearchSurahById}
                    inputType="number"
                    inputChange={(e) => setValueSearchSurahById(e.target.value)}
                    inputPlaceholder="cari surah"
                  />
                  <Icon
                    onClick={onCloseSearchHandler}
                    className="text-white text-2xl mx-2"
                    icon="octicon:x-12"
                  />
                </form>
              </div>
            )}
            <div className="h-12 w-1/4 flex justify-start items-center ">
              <img className="h-full mx-4" src={`/iconQuran.png`} alt="" />
              <p className="text-white tracking-wide mx-4">al-Quran</p>
            </div>
            <div className={`${!opsiSurah && "mx-16"} flex w-3/4 text-white justify-end items-center gap-5 text-2xl`}>
              <Icon icon="uiw:setting" />
              <Icon icon="fluent:info-12-filled" />
              <Icon
                onClick={onSearchHandler}
                className={`${!opsiSurah && "hidden"} mr-10`}
                icon="material-symbols:search"
              />
            </div>
          </div>
        </div>
      )}
      {children}
    </div>
  );
};

export default Navbar;
