import React, { useContext, useEffect, useRef, useState } from "react";
import { useAlQuranDataSurahDetail } from "../../../query/data";
import { OptionContext } from "../../../context/opsi";
import { Icon } from "@iconify/react";
import {
  getAlQuranSurahByIdSearch,
  getAlQuranSurahById,
} from "../../../services/service";
import { useParams } from "react-router-dom";
import style from "../../../styles/animation.module.scss";
const ApiTerjemah = () => {
  const { data } = useAlQuranDataSurahDetail();
  const [alertBookmark, setAlertBookmark] = useState(false);
  const [lihatDetail, setLihatDetail] = useState(false);
  const { id: idSurah } = useParams();
  const {
    setOpsiAllAudio,
    audioOne,
    setAudioOne,
    opsiOneAudio,
    opsiTafsir,
    setOpsitafsir,
    setOpsiOneAudio,
    audioRef,
    opsiBookmark,
    valueSearchSurahById,
    setOpsiBookmark,
    dataSurahById,
    setDataSurahById,
    setSearchAlert,
    opsiDarkmode,
    opsiSetting,
    dataSurahByIdSearch,
    setDataSurahByIdSearch,
    countFont,
    valueAudio,
  } = useContext(OptionContext);
  const tafsirModalRef = useRef(null);
  useEffect(() => {
    if (valueSearchSurahById === "") {
      setDataSurahByIdSearch("");
    } else {
      getAlQuranSurahByIdSearch(idSurah, valueSearchSurahById, (data) => {
        setDataSurahByIdSearch(data);
      });
    }
  }, [valueSearchSurahById]);

  useEffect(() => {
    if (audioOne.id !== null && opsiOneAudio) {
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
  }, [audioOne.id, valueAudio]);
  useEffect(() => {
    if (dataSurahById === "ERR_BAD_REQUEST") {
      setDataSurahByIdSearch("");
    }
  }, [dataSurahByIdSearch]);
  useEffect(() => {
    localStorage.setItem("bookMark", JSON.stringify({ data: opsiBookmark }));
  }, [alertBookmark]);
  useEffect(() => {
    setOpsitafsir(false);
  }, [idSurah]);
  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        tafsirModalRef.current &&
        !tafsirModalRef.current.contains(event.target)
      ) {
        setOpsitafsir(false);
        window.location.reload();
      }
    }

    if (opsiTafsir) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [opsiTafsir]);
  const onStopOneAudioHandler = () => {
    setOpsiOneAudio(false);
  };

  const onStartOneAudioHandler = (id, audioUrl) => {
    setOpsiAllAudio(false);
    setAudioOne({ id, audioUrl });
    if (audioOne.id === id) {
      setOpsiOneAudio(false);
    }
    setOpsiOneAudio(true);
  };

  const onTafsirHandler = (e, idAyah) => {
    setOpsitafsir(!opsiTafsir);
    getAlQuranSurahById(idSurah, idAyah, (data) => {
      setDataSurahById(data);
    });
    window.scrollTo({
      top: 200,
      behavior: "smooth",
    });
    setSearchAlert(false);
  };

  const onBookMarkHandler = (e, numberSurah, numberQuran) => {
    e.preventDefault();
    setOpsiBookmark([
      ...opsiBookmark,
      {
        id: idSurah,
        numberSurah: numberSurah,
        numberQuran: numberQuran,
      },
    ]);

    setAlertBookmark(true);
  };

  return (
    <div className="w-full mt-4 min-h-screen">
      {opsiTafsir && (
        <div
          ref={tafsirModalRef}
          className={`${style.animationTafsir} w-full min-h-screen bg-slate-800 text-white`}
        >
          <div className="p-2">
            <Icon
              onClick={() => {
                setOpsitafsir(!opsiTafsir);
              }}
              className="text-white text-2xl mx-2  mt-4 cursor-pointer"
              icon="octicon:x-12"
            />
          </div>
          <div className="flex items-center flex-col p-10 max-[650px]:p-3">
            <div className="flex items-center w-full max-[650px]:flex-col ">
              <div className="w-[3%] mr-16 max-[650px]:w-full max-[650px]:flex max-[650px]:justify-center max-[650px]:my-4 max-[650px]:mr-0 ">
                <div className="w-10 h-10 border mx-4 rotate-45 border-amber-400 grid place-content-center">
                  <div className="-rotate-45">
                    <p>{dataSurahById?.number?.inSurah}</p>
                  </div>
                </div>
              </div>
              <h1 className="w-full text-white text-center text-3xl tracking-wider max-[650px]:hidden">
                {dataSurahById?.arab}
              </h1>
              <p className="w-full text-white text-center text-2xl tracking-wider max-[650px]:tracking-normal min-[650px]:hidden">
                {dataSurahById?.arab}
              </p>
            </div>
            <p className="text-white text-center text-[0.8rem] mt-4 tracking-wide">
              <span className="font-bold">
                artinya &nbsp;&nbsp;:&nbsp;&nbsp;{" "}
              </span>
              {dataSurahById?.translation}
            </p>
          </div>
          <div className="w-full p-10 max-[650px]:p-2">
            <h1 className="tracking-widest font-bold">Tafsir Quraish :</h1>
            <p className="text-sm tracking-wide mt-4">
              {dataSurahById?.tafsir?.quraish}
            </p>
          </div>
          <div className="w-full p-10 max-[650px]:p-2">
            <h1 className="tracking-widest font-bold">Tafsir Jalalyn :</h1>
            <p className="text-sm tracking-wide mt-4">
              {dataSurahById?.tafsir?.jalalayn}
            </p>
          </div>
          <div className="w-full p-10 max-[650px]:p-2">
            <h1 className="tracking-widest font-bold">Tafsir Kemenag :</h1>
            <p className="text-sm tracking-wide mt-4">
              {dataSurahById?.tafsir?.kemenag?.short}
            </p>
          </div>
          <p
            onClick={() => setLihatDetail(!lihatDetail)}
            className="text-center tracking-wider cursor-pointer"
          >
            {lihatDetail ? "" : "lihat detail"}
          </p>
          {lihatDetail && (
            <div className="w-full">
              {" "}
              <div className="w-full p-10  my-4 max-[650px]:p-2">
                <h1 className="tracking-widest font-bold">Tafsir detail :</h1>
                <p className="text-sm tracking-wide mt-4">
                  {dataSurahById?.tafsir?.kemenag.long}
                </p>
              </div>
              <Icon
                className="text-center w-full text-2xl cursor-pointer"
                onClick={() => {
                  setLihatDetail(!lihatDetail),
                    window.scrollTo({
                      top: 200,
                      behavior: "smooth",
                    });
                }}
                icon="ph:arrow-up-bold"
              />
            </div>
          )}
        </div>
      )}
      <div
        className={`${opsiTafsir && "blur-[2px]"} ${
          opsiSetting && "blur-[2px]"
        } w-full mt-4`}
      >
        <h1
          className={`${countFont === 1 && "text-[1.2rem]"} ${
            countFont === 2 && "text-[1.4rem]"
          } ${countFont === 3 && "text-[1.6rem]"} ${
            countFont === 4 && "text-[1.8rem]"
          } ${countFont === 5 && "text-[2rem]"} text-center`}
        >
          {" "}
          {data?.bismillah?.arab}
        </h1>
        <p className={`text-center max-[550px]:text-sm mt-2`}>
          {data?.bismillah?.translation}
        </p>
      </div>
      {dataSurahByIdSearch ? (
        <div
          className={`${opsiTafsir && "blur-[2px]"} ${
            opsiSetting && "blur-[2px]"
          } ${
            opsiDarkmode && "border-b-white"
          } w-full h-auto min-h-[16rem] mt-2 border-b-[1px] border-b-black p-2 relative`}
          key={dataSurahByIdSearch?.number?.inQuran}
        >
          <div className="absolute top-0 w-16 h-full">
            <div className="flex flex-col items-center h-auto w-full ">
              <div className="border border-amber-400 w-10 h-10 grid place-content-center rotate-45 m-4">
                <div className="-rotate-45">
                  <p className="">{dataSurahByIdSearch?.number?.inSurah}</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-end h-full  max-[800px]:hidden">
                <div className={`${style.tooltipOpsiHome}`}>
                  {opsiOneAudio &&
                  audioOne.id === dataSurahByIdSearch.number.inSurah ? (
                    <Icon
                      onClick={() => onStopOneAudioHandler()}
                      className="text-2xl"
                      icon="carbon:pause-outline"
                    />
                  ) : (
                    <Icon
                      onClick={() => {
                        let audio = null;
                        if (valueAudio === "alafasy") {
                          audio = dataSurahByIdSearch.audio.alafasy;
                        } else if (valueAudio === "ahmedajamy") {
                          audio = dataSurahByIdSearch.audio.ahmedajamy;
                        } else if (valueAudio === "husarymujawwad") {
                          audio = dataSurahByIdSearch.audio.husarymujawwad;
                        } else if (valueAudio === "minshawi") {
                          audio = dataSurahByIdSearch.audio.minshawi;
                        } else if (valueAudio === "muhammadayyoub") {
                          audio = dataSurahByIdSearch.audio.muhammadayyoub;
                        } else if (valueAudio === "muhammadjibreel") {
                          audio = dataSurahByIdSearch.audio.muhammadjibreel;
                        }
                        onStartOneAudioHandler(
                          dataSurahByIdSearch.number.inSurah,
                          audio
                        );
                      }}
                      className="text-2xl"
                      icon="radix-icons:resume"
                    />
                  )}
                  <p
                    className={`${style.tooltipAlertleft} bg-black text-white`}
                  >
                    putar audio
                  </p>
                </div>

                <div className={`${style.tooltipOpsiHome}`}>
                  <Icon
                    onClick={(e) => {
                      onTafsirHandler(e, dataSurahByIdSearch.number.inSurah);
                    }}
                    className="text-2xl my-4 cursor-pointer"
                    icon="ion:book-sharp"
                  />
                  <p
                    className={`${style.tooltipAlertleft} bg-black text-white`}
                  >
                    lihat tafsir
                  </p>
                </div>

                <div className={`${style.tooltipOpsiHome}`}>
                  <Icon
                    onClick={(e) =>
                      onBookMarkHandler(
                        e,
                        dataSurahByIdSearch.number.inSurah,
                        dataSurahByIdSearch.number.inQuran
                      )
                    }
                    className="text-2xl "
                    icon="fluent:bookmark-add-24-filled"
                  />
                  <p
                    className={`${style.tooltipAlertleft} bg-black text-white`}
                  >
                    tambahkan ke bookmark
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 h-full min-[800px]:hidden ">
            <div className={`${style.tooltipSettings}`}>
              {opsiOneAudio &&
              audioOne.id === dataSurahByIdSearch.number.inSurah ? (
                <Icon
                  onClick={() => onStopOneAudioHandler()}
                  className="text-2xl"
                  icon="carbon:pause-outline"
                />
              ) : (
                <Icon
                  onClick={() => {
                    let audio = null;
                    if (valueAudio === "alafasy") {
                      audio = dataSurahByIdSearch.audio.alafasy;
                    } else if (valueAudio === "ahmedajamy") {
                      audio = dataSurahByIdSearch.audio.ahmedajamy;
                    } else if (valueAudio === "husarymujawwad") {
                      audio = dataSurahByIdSearch.audio.husarymujawwad;
                    } else if (valueAudio === "minshawi") {
                      audio = dataSurahByIdSearch.audio.minshawi;
                    } else if (valueAudio === "muhammadayyoub") {
                      audio = dataSurahByIdSearch.audio.muhammadayyoub;
                    } else if (valueAudio === "muhammadjibreel") {
                      audio = dataSurahByIdSearch.audio.muhammadjibreel;
                    }
                    onStartOneAudioHandler(
                      dataSurahByIdSearch.number.inSurah,
                      audio
                    );
                  }}
                  className="text-2xl cursor-pointer"
                  icon="radix-icons:resume"
                />
              )}
              <p className={`${style.tooltipAlertright} z-10`}>putar audio</p>
            </div>

            <div className={`${style.tooltipSettings}`}>
              <Icon
                onClick={(e) => {
                  onTafsirHandler(e, dataSurahByIdSearch.number.inSurah);
                }}
                className="text-2xl my-4 cursor-pointer "
                icon="ion:book-sharp"
              />
              <p className={`${style.tooltipAlertright} z-10 `}>lihat tafsir</p>
            </div>

            <div className={`${style.tooltipSettings}`}>
              <Icon
                onClick={(e) =>
                  onBookMarkHandler(
                    e,
                    dataSurahByIdSearch.number.inSurah,
                    dataSurahByIdSearch.number.inQuran
                  )
                }
                className="text-2xl cursor-cell "
                icon="fluent:bookmark-add-24-filled"
              />
              <p className={`${style.tooltipAlertright} z-10`}>
                tambahkan Ke BookMark
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex justify-end">
              <img
                className={` ${
                  countFont === 1 && "w-[35%]  max-[800px]:w-[80%]"
                } ${countFont === 2 && "w-2/5 max-[800px]:w-[85%]"} ${
                  countFont === 3 && "w-[45%] max-[800px]:w-[90%]"
                } ${countFont === 4 && "w-[50%] max-[800px]:w-[95%]"} ${
                  countFont === 5 && "w-[60%] max-[800px]:w-full"
                } bg-white mt-2`}
                src={dataSurahByIdSearch?.image?.primary}
                alt=""
              />
            </div>
            <div className="w-4/5 mx-14  mt-4 min-h-[8rem] flex items-end max-[800px]:items-start max-[550px]:mx-0">
              <div className="">
                <p className="font-bold">artinya : </p>
                <p
                  className={`${countFont === 1 && "text-xs"} ${
                    countFont === 2 && "text-[0.8rem]"
                  } ${countFont === 3 && "text-[0.9rem]"} ${
                    countFont === 4 && "text-[1rem]"
                  } ${countFont === 5 && "text-[1.1rem]"}`}
                >
                  {dataSurahByIdSearch?.translation}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        data?.ayahs?.map((item) => (
          <div
            className={`${opsiTafsir && "blur-[2px]"}  ${
              opsiSetting && "blur-[2px]"
            } ${
              opsiDarkmode && "border-b-white"
            } w-full h-auto min-h-[16rem] mt-2 border-b-[1px] border-b-black p-2 relative`}
            key={item?.number?.inQuran}
          >
            <div className="absolute top-0 w-16 h-full">
              <div className="flex flex-col items-center h-auto w-full ">
                <div className="border border-amber-400 w-10 h-10 grid place-content-center rotate-45 m-4">
                  <div className="-rotate-45">
                    <p className="">{item?.number?.inSurah}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-end h-full max-[800px]:hidden">
                  {opsiOneAudio && audioOne.id === item.number.inSurah ? (
                    <div className={`${style.tooltipOpsiHome}`}>
                      <Icon
                        onClick={() => onStopOneAudioHandler()}
                        className="text-2xl"
                        icon="carbon:pause-outline"
                      />
                      <p
                        className={`${style.tooltipAlertleft} bg-black text-white`}
                      >
                        hentikan audio
                      </p>
                    </div>
                  ) : (
                    <div className={`${style.tooltipOpsiHome}`}>
                      <Icon
                        onClick={() => {
                          let audio = null;
                          if (valueAudio === "alafasy") {
                            audio = item.audio.alafasy;
                          } else if (valueAudio === "ahmedajamy") {
                            audio = item.audio.ahmedajamy;
                          } else if (valueAudio === "husarymujawwad") {
                            audio = item.audio.husarymujawwad;
                          } else if (valueAudio === "minshawi") {
                            audio = item.audio.minshawi;
                          } else if (valueAudio === "muhammadayyoub") {
                            audio = item.audio.muhammadayyoub;
                          } else if (valueAudio === "muhammadjibreel") {
                            audio = item.audio.muhammadjibreel;
                          }
                          onStartOneAudioHandler(item.number.inSurah, audio);
                        }}
                        className="text-2xl cursor-pointer"
                        icon="radix-icons:resume"
                      />
                      <p
                        className={`${style.tooltipAlertleft} bg-black text-white`}
                      >
                        putar audio per ayat
                      </p>
                    </div>
                  )}

                  <div className={`${style.tooltipOpsiHome}`}>
                    <Icon
                      onClick={(e) => onTafsirHandler(e, item.number.inSurah)}
                      className="text-2xl my-4 cursor-pointer"
                      icon="ion:book-sharp"
                    />
                    <p
                      className={`${style.tooltipAlertleft} bg-black text-white -my-4 z-10`}
                    >
                      tafsir per ayat
                    </p>
                  </div>

                  <div className={`${style.tooltipOpsiHome}`}>
                    <Icon
                      onClick={(e) =>
                        onBookMarkHandler(
                          e,
                          item.number.inSurah,
                          item.number.inQuran
                        )
                      }
                      className="text-2xl cursor-pointer"
                      icon="fluent:bookmark-add-24-filled"
                    />
                    <p
                      className={`${style.tooltipAlertleft} bg-black text-white`}
                    >
                      tambahkan ke BookMark
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2  my-4 h-full min-[800px]:hidden">
              <div className={`${style.tooltipSettings}`}>
                {opsiOneAudio && audioOne.id === item.number.inSurah ? (
                  <div className={`${style.tooltipOpsiHome}`}>
                    <Icon
                      onClick={() => onStopOneAudioHandler()}
                      className="text-2xl"
                      icon="carbon:pause-outline"
                    />
                    <p
                      className={`${style.tooltipAlertleft} bg-black text-white`}
                    >
                      hentikan audio
                    </p>
                  </div>
                ) : (
                  <div className={`${style.tooltipOpsiHome}`}>
                    <Icon
                      onClick={() => {
                        let audio = null;
                        if (valueAudio === "alafasy") {
                          audio = item.audio.alafasy;
                        } else if (valueAudio === "ahmedajamy") {
                          audio = item.audio.ahmedajamy;
                        } else if (valueAudio === "husarymujawwad") {
                          audio = item.audio.husarymujawwad;
                        } else if (valueAudio === "minshawi") {
                          audio = item.audio.minshawi;
                        } else if (valueAudio === "muhammadayyoub") {
                          audio = item.audio.muhammadayyoub;
                        } else if (valueAudio === "muhammadjibreel") {
                          audio = item.audio.muhammadjibreel;
                        }
                        onStartOneAudioHandler(item.number.inSurah, audio);
                      }}
                      className="text-2xl cursor-pointer"
                      icon="radix-icons:resume"
                    />
                    <p
                      className={`${style.tooltipAlertleft} bg-black text-white`}
                    >
                      putar audio
                    </p>
                  </div>
                )}
              </div>
              <div className={`${style.tooltipOpsiHome}`}>
                <Icon
                  onClick={(e) => onTafsirHandler(e, item.number.inSurah)}
                  className="text-2xl cursor-pointer"
                  icon="ion:book-sharp"
                />
                <p className={`${style.tooltipAlertleft} bg-black text-white`}>
                  tafsir per ayat
                </p>
              </div>

              <div className={`${style.tooltipOpsiHome}`}>
                <Icon
                  onClick={(e) =>
                    onBookMarkHandler(
                      e,
                      item.number.inSurah,
                      item.number.inQuran
                    )
                  }
                  className="text-2xl cursor-pointer "
                  icon="fluent:bookmark-add-24-filled"
                />
                <p className={`${style.tooltipAlertleft} bg-black text-white`}>
                  tambahkan ke bookMark
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className={` flex justify-end`}>
                <img
                  className={`${opsiDarkmode && "bg-white"} ${
                    countFont === 1 && "w-[35%]  max-[800px]:w-[80%]"
                  } ${countFont === 2 && "w-2/5 max-[800px]:w-[85%]"} ${
                    countFont === 3 && "w-[45%] max-[800px]:w-[90%]"
                  } ${countFont === 4 && "w-[50%] max-[800px]:w-[95%]"} ${
                    countFont === 5 && "w-[60%] max-[800px]:w-full"
                  } my-1`}
                  src={item?.image?.primary}
                  alt=""
                />
              </div>
              <div className="w-4/5 mx-14  mt-4 min-h-[8rem] flex items-end max-[800px]:items-start max-[600px]:mx-0 max-[600px]:w-full">
                <div className="">
                  <p className="font-bold">artinya : </p>
                  <p
                    className={`${
                      countFont === 1 &&
                      "text-[0.8rem] max-[650px]:text-[0.7rem]"
                    } ${
                      countFont === 2 &&
                      "text-[0.9rem] max-[650px]:text-[0.8rem]"
                    } ${
                      countFont === 3 && "text-[1rem] max-[650px]:text-[0.9rem]"
                    } ${
                      countFont === 4 && "text-[1.1rem] max-[650px]:text-[1rem]"
                    } ${
                      countFont === 5 &&
                      "text-[1.2rem] max-[650px]:text-[1.1rem]"
                    }`}
                  >
                    {item?.translation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ApiTerjemah;
