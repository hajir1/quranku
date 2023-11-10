import React, { useContext, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { OptionContext } from "../../context/opsi";
import Input from "../element/input";
import style from "../../styles/animation.module.scss";
import { Link, useParams } from "react-router-dom";
import Settings from "./settings";

const Navbar = ({ type, typeHome }) => {
  const { id } = useParams();
  const {
    searchAlert,
    setSearchAlert,
    valueSearchSurah,
    setValueSearchSurah,
    opsiTafsir,
    valueSearchSurahById,
    setValueSearchSurahById,
    opsiSurah,
    opsiSetting,
    setOpsiSetting,
    opsiDarkmode,
    setOpsiHome,
    opsiHome,
    settingModalRef,
    valueSearchAsmaulHusna,
    setValueSearchAsmaulHusna,
  } = useContext(OptionContext);
  const opsiHomeRef = useRef(null);
  useEffect(() => {
    onCloseSearchHandler();
  }, [id]);
  useEffect(() => {
    return () => {
      if (opsiSetting) {
        setOpsiSetting(false);
      }
    };
  }, []);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        settingModalRef.current &&
        !settingModalRef.current.contains(event.target)
      ) {
        setOpsiSetting(false);
      }
    };

    if (opsiSetting) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [opsiSetting]);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        opsiHomeRef.current &&
        !opsiHomeRef.current.contains(event.target)
      ) {
        setOpsiHome(false);
      }
    };

    if (opsiHome) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [opsiHome]);
  useEffect(() => {
    return () => {
      setOpsiHome(false);
    };
  }, []);
  const onSearchHandler = (e) => {
    setSearchAlert(!searchAlert);
    setOpsiHome(false)
  };
  const onCloseSearchHandler = () => {
    setSearchAlert(false);
    setValueSearchSurah("");
    setValueSearchSurahById("");
    setValueSearchAsmaulHusna("");
  };
  const onSettingHandler = (e) => {
    setOpsiHome(false);
    setOpsiSetting(true);
  };
  const onOpsiHomeHandler = (e) => {
    setOpsiSetting(false);
    setOpsiHome(!opsiHome);
  };

  return (
    <div
      className={`${opsiTafsir && "blur-[2px]"} ${
        opsiDarkmode && "border-b-2 text-white"
      } w-full h-12 bg-black fixed z-40 max-[550px]:h-14 `}
    >
      {type === "home" && (
        <div className="relative h-full">
          {opsiSetting && <Settings type="homeQuran" />}
          {opsiHome && (
            <div
              ref={opsiHomeRef}
              className={`${style.iconSurah} my-2 absolute text-white bg-black w-1/5 h-96 z-30 p-4 max-[650px]:w-3/4 max-[900px]:w-2/4`}
            >
              <div className="flex p-2 justify-between items-center my-4 border-b-[1px]">
                {typeHome === "Quran" && (
                  <img className="w-10 h-10" src="/iconQuran.png" alt="" />
                )}
                {typeHome === "asmaulhusna" && (
                  <img className="w-10 h-10" src="/iconasma.png" alt="" />
                )}
                {typeHome === "doa" && (
                  <img className="w-10 h-10" src="/icondoa.png" alt="" />
                )}
                <Icon
                  onClick={() => setOpsiHome(!opsiHome)}
                  className="text-white text-2xl"
                  icon="octicon:x-12"
                />
              </div>
              <div>
                {typeHome === "Quran" && (
                  <div className="flex flex-col">
                    <Link to={"/"} className="border-b-[1px] my-1 p-2">
                      Al-Qur'an
                    </Link>
                    <Link to={"/asmaulhusna"} className="my-1 p-2">
                      Asmaul Husna
                    </Link>
                    <Link to={"/doa"} className="my-1 p-2">
                      doa doa
                    </Link>
                  </div>
                )}
                {typeHome === "asmaulhusna" && (
                  <div className="flex flex-col">
                    <Link to={"/"} className=" my-1 p-2">
                      Al-Qur'an
                    </Link>
                    <Link
                      to={"/asmaulhusna"}
                      className="border-b-[1px] my-1 p-2"
                    >
                      Asmaul Husna
                    </Link>
                    <Link
                      to={"/doa"}
                      className="my-1 p-2"
                    >
                      doa doa
                    </Link>
                  </div>
                )}
                {typeHome === "doa" && (
                  <div className="flex flex-col">
                    <Link to={"/"} className=" my-1 p-2">
                      Al-Qur'an
                    </Link>
                    <Link
                      to={"/asmaulhusna"}
                      className="my-1 p-2"
                    >
                      Asmaul Husna
                    </Link>
                    <Link
                      to={"/asmaulhusna"}
                      className="border-b-[1px] my-1 p-2"
                    >
                      doa doa
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
          <div
            className={`${opsiSetting && "blur-[2px]"} flex max-[550px]:p-1`}
          >
            {searchAlert && (
              <div
                className={`${style.animatedSearch} fixed right-0 w-1/4 max-[750px]:w-4/5 max-[1100px]:w-1/2`}
              >
                {typeHome === "Quran" && (
                  <form className={`flex items-center bg-black p-1`} action="">
                    <Input
                      inputClass={`${
                        opsiDarkmode && "text-black"
                      }   w-full outline-none bg-none p-2 placeholder:tracking-wider rounded-lg`}
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
                )}
                {typeHome === "asmaulhusna" && (
                  <form className={`flex items-center bg-black p-1`} action="">
                    <Input
                      inputClass={`${
                        opsiDarkmode && "text-black"
                      }   w-full outline-none bg-none p-2 placeholder:tracking-wider rounded-lg`}
                      inputValue={valueSearchAsmaulHusna}
                      inputType="number"
                      inputChange={(e) =>
                        setValueSearchAsmaulHusna(e.target.value)
                      }
                      inputPlaceholder="cari asmaul husna"
                    />
                    <Icon
                      onClick={onCloseSearchHandler}
                      className="text-white text-2xl mx-2"
                      icon="octicon:x-12"
                    />
                  </form>
                )}
              </div>
            )}
            <div className="h-12 w-1/4 flex justify-start items-center max-[800px]:w-1/2">
              {typeHome === "Quran" && (
                <img
                  onClick={onOpsiHomeHandler}
                  className="h-full mx-4 max-[550px]:m-2"
                  src={`/iconQuran.png`}
                  alt=""
                />
              )}
              {typeHome === "asmaulhusna" && (
                <img
                  onClick={onOpsiHomeHandler}
                  className="h-4/5 mx-4 max-[550px]:m-2"
                  src={`/iconasma.png`}
                  alt=""
                />
              )}
              {typeHome === "doa" && (
                <img
                  onClick={onOpsiHomeHandler}
                  className="h-4/5 mx-4 max-[550px]:m-2"
                  src={`/icondoa.png`}
                  alt=""
                />
              )}
              {typeHome === "Quran" && (
                <p className="text-white tracking-wide mx-4">al-Quran</p>
              )}
              {typeHome === "asmaulhusna" && (
                <p className="text-white tracking-wide mx-4">asmaul husna</p>
              )}
              {typeHome === "doa" && (
                <p className="text-white tracking-wide mx-4">doa doa</p>
              )}
            </div>
            <div className="flex w-3/4 text-white justify-end items-center gap-5 text-2xl max-[800px]:w-1/2">
              <Icon onClick={onSettingHandler} icon="uiw:setting" />
              <Icon icon="fluent:info-12-filled" />
              <Icon
                onClick={onSearchHandler}
                className="mr-10 max-[550px]:mr-2"
                icon="material-symbols:search"
              />
            </div>
          </div>
        </div>
      )}
      {type === "detailSurah" && (
        <div className={`relative h-full`}>
          {opsiSetting && <Settings type="detailSurah" />}
          <div
            className={`${opsiSetting && "blur-[2px]"} flex max-[550px]:p-1 `}
          >
            {searchAlert && (
              <div
                className={`${style.animatedSearch} fixed right-0  p-1 h-full w-1/4 max-[750px]:w-2/5`}
              >
                <form className={`flex items-center bg-black`} action="">
                  <Input
                    inputClass={`${
                      opsiDarkmode && "text-black"
                    }  w-full h-full outline-none bg-none p-2 placeholder:tracking-wider rounded-lg`}
                    inputValue={valueSearchSurahById}
                    inputType="number"
                    inputChange={(e) => setValueSearchSurahById(e.target.value)}
                    inputPlaceholder="cari ayat"
                  />
                  <Icon
                    onClick={onCloseSearchHandler}
                    className="text-white text-2xl mx-2"
                    icon="octicon:x-12"
                  />
                </form>
              </div>
            )}
            <div className="h-12 w-1/4 flex justify-start items-center max-[800px]:w-1/2 ">
              <img
                className="h-full mx-4 max-[550px]:m-2"
                src={`/iconQuran.png`}
                alt=""
              />
              <p className="text-white tracking-wide mx-4">al-Quran</p>
            </div>
            <div
              className={`${
                !opsiSurah && ""
              } flex w-3/4 text-white justify-end items-center gap-5 text-2xl max-[800px]:w-1/2`}
            >
              <Icon
                onClick={onSettingHandler}
                className="cursor-pointer"
                icon="uiw:setting"
              />
              <Icon className={`${!opsiSurah && "mx-4"} cursor-pointer `} icon="fluent:info-12-filled" />
              <Icon
                onClick={onSearchHandler}
                className={`${
                  !opsiSurah && "hidden"
                } mr-10 cursor-pointer max-[550px]:mr-2`}
                icon="material-symbols:search"
              />
            </div>
          </div>
        </div>
      )}
      {type === "bookMark" && (
        <div className="relative h-full">
          {opsiSetting && <Settings type="detailSurah" />}
          <div className="flex max-[550px]:p-1 ">
            {searchAlert && (
              <div
                className={`${style.animatedSearch} fixed right-0  p-1 h-full w-1/4 max-[750px]:w-2/5`}
              >
                <form className={`flex items-center bg-black`} action="">
                  <Input
                    inputClass={`${
                      opsiDarkmode && "text-black"
                    }  w-full h-full outline-none bg-none p-3 placeholder:tracking-wider rounded-lg`}
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
            <div className="h-12 w-1/4 flex justify-start items-center max-[800px]:w-1/2 ">
              <img
                className="h-full mx-4 max-[550px]:m-2"
                src={`/iconQuran.png`}
                alt=""
              />
              <p className="text-white tracking-wide mx-4">al-Quran</p>
            </div>
            <div
              className={`${
                !opsiSurah && "mx-16"
              } flex w-3/4 text-white justify-end items-center gap-5 text-2xl max-[800px]:w-1/2`}
            >
              <Icon
                onClick={onSettingHandler}
                className="cursor-pointer"
                icon="uiw:setting"
              />
              <Icon
                className="cursor-pointer mx-4"
                icon="fluent:info-12-filled"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
