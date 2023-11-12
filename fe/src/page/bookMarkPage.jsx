import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import Navbar from "../component/layout/navbar";
import { OptionContext } from "../context/opsi";
import style from "../styles/animation.module.scss";
import { getAlQuranSurahById } from "../services/service";
import AlertMessageNotP from "../component/message/alertMessage/alertNotP";
const BookMarkPage = () => {
  const { id, page } = useParams();
  useEffect(() => {
    window.document.title = "bookMark al-Quran";
  });
  const {
    setOpsiAllAudio,
    audioOne,
    setAudioOne,
    opsiOneAudio,
    opsiTafsir,
    setOpsitafsir,
    setOpsiOneAudio,
    setSearchAlert,
    setDataBookmark,
    dataBookmark,
    audioRef,
    opsiDarkmode,
    dataSurahById,
    setDataSurahById,
    countFont,
    valueAudio,
  } = useContext(OptionContext);
  const [lihatDetail, setLihatDetail] = useState(false);
  const [alertHapusBookmark, setAlertHapusBookmark] = useState(false);
  const dataLokal = localStorage.getItem("bookMark");
  const data = JSON.parse(dataLokal);
  useEffect(() => {
    getAlQuranSurahById(id, page, (data) => {
      setDataSurahById(data);
    });
  }, []);
  useEffect(() => {}, [dataSurahById]);

  useEffect(() => {
    setDataBookmark(data?.data);
  }, []);
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        setOpsiOneAudio(false);
        audioRef.current.pause();
      }
    };
  }, []);
  const onStopOneAudioHandler = () => {
    setOpsiOneAudio(false);
  };
  const onTafsirHandler = (e, idAyah) => {
    e.preventDefault();
    setOpsitafsir(true);
    getAlQuranSurahById(id, idAyah, (data) => {
      setDataSurahById(data);
    });
    window.scrollTo({
      top: 350,
      behavior: "smooth",
    });

    setSearchAlert(false);
  };
  const onStartOneAudioHandler = (id, audioUrl) => {
    setOpsiAllAudio(false);
    setAudioOne({ id, audioUrl });
    setOpsiOneAudio(true);
  };
  const onRemoveBookmarkHandler = (numberQuran) => {
    const updatedDataBookmark = dataBookmark.filter(
      (item) => item.numberQuran !== numberQuran
    );
    setDataBookmark(updatedDataBookmark);
    localStorage.setItem(
      "bookMark",
      JSON.stringify({ data: updatedDataBookmark })
    );
    setAlertHapusBookmark(true);
  };
  return (
    <div className="w-full">
      <Navbar type="bookMark" />

      <div
        className={`${
          opsiDarkmode && "bg-black text-white"
        } w-full h-screen flex flex-col `}
      >
        <div className="mt-20">
          {alertHapusBookmark && (
            <>
              <AlertMessageNotP
                onCloseHandler={() => {
                  setAlertHapusBookmark(false), (window.location.href = "/");
                }}
                classIcon={`${opsiDarkmode ? "text-black" : "text-white"} `}
                classContaint={`${style.animationTafsir} ${
                  opsiDarkmode && "bg-white z-20 opacity-95 m-0 z-20"
                } w-52 h-16 bg-black absolute z-20 text-white p-2 m-4 opacity-90 cursor-pointer`}
              >
                <p
                  className={`${
                    opsiDarkmode && "text-black"
                  } text-center w-full text-sm mt-2`}
                >
                  berhasil di hapus
                </p>
              </AlertMessageNotP>
            </>
          )}
          {opsiTafsir && (
            <div
              className={`${style.animationTafsir} w-full min-h-screen bg-slate-800 text-white z-20 absolute`}
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
                    <h1 className="tracking-widest font-bold">
                      Tafsir detail :
                    </h1>
                    <p className="text-sm tracking-wide mt-4">
                      {dataSurahById?.tafsir?.kemenag.long}
                    </p>
                  </div>
                  <Icon
                    className="text-center w-full text-2xl cursor-pointer"
                    onClick={() => setLihatDetail(!lihatDetail)}
                    icon="ph:arrow-up-bold"
                  />
                </div>
              )}
            </div>
          )}
          {opsiOneAudio && (
            <div className="fixed bottom-0 w-full z-10">
              <audio
                className="w-full"
                ref={audioRef}
                onEnded={() => setOpsiOneAudio(false)}
                src={audioOne.audioUrl}
                autoPlay
                controls
              ></audio>
            </div>
          )}
          <div
            className={`${opsiTafsir && "blur-[2px]"} ${
              opsiDarkmode && "border-b-white"
            } w-full h-auto min-h-[16rem] mt-2 border-b-[1px] border-b-black p-4 relative`}
            key={dataSurahById?.number?.inQuran}
          >
            <div className="absolute top-0 h-full my-3 max-[800px]:h-16 max-[800px]:-top-10 max-[800px]:right-0">
              <div className="flex flex-col items-center w-full max-[800px]:flex-row-reverse">
                <div className="border border-amber-400 w-10 h-10 grid place-content-center rotate-45 m-4">
                  <div className="-rotate-45">
                    <p className="">{dataSurahById?.number?.inSurah}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-end h-full max-[800px]:flex-row">
                  {opsiOneAudio ? (
                    <div className={style.tooltipOpsiHome}>
                      <Icon
                        onClick={() => onStopOneAudioHandler()}
                        className="text-2xl cursor-pointer"
                        icon="carbon:pause-outline"
                      />
                      <p
                        className={`${style.tooltipAlertleft} bg-black text-white z-10`}
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
                            audio = dataSurahById?.audio.alafasy;
                          } else if (valueAudio === "ahmedajamy") {
                            audio = dataSurahById?.audio.ahmedajamy;
                          } else if (valueAudio === "husarymujawwad") {
                            audio = dataSurahById?.audio.husarymujawwad;
                          } else if (valueAudio === "minshawi") {
                            audio = dataSurahById?.audio.minshawi;
                          } else if (valueAudio === "muhammadayyoub") {
                            audio = dataSurahById?.audio.muhammadayyoub;
                          } else if (valueAudio === "muhammadjibreel") {
                            audio = dataSurahById?.audio.muhammadjibreel;
                          }
                          onStartOneAudioHandler(
                            dataSurahById?.number.inSurah,
                            audio
                          );
                        }}
                        className="text-2xl cursor-pointer"
                        icon="radix-icons:resume"
                      />
                      <p
                        className={`${style.tooltipAlertleft} bg-black text-white z-10`}
                      >
                        putar audio
                      </p>
                    </div>
                  )}

                  <div className={`${style.tooltipOpsiHome}`}>
                    <Icon
                      onClick={(e) =>
                        onTafsirHandler(e, dataSurahById.number.inSurah)
                      }
                      className="text-2xl my-4 cursor-pointer max-[800px]:mx-2"
                      icon="ion:book-sharp"
                    />
                    <p
                      className={`${style.tooltipAlertleft} bg-black -my-4 text-white z-10`}
                    >
                      lihat tafsir
                    </p>
                  </div>

                  <div className={`${style.tooltipOpsiHome} ${alertHapusBookmark && "blur-[2px]"}`}>
                    <Icon
                      onClick={() => {
                        onRemoveBookmarkHandler(dataSurahById.number.inQuran);
                      }}
                      className="text-2xl cursor-pointer"
                      icon="mdi:bookmark-off"
                    />

                    <p
                      className={`${style.tooltipAlertleft} bg-black text-white z-10`}
                    >
                      hapus bookMark
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex justify-end">
                <img
                  className={`${opsiDarkmode && "bg-white"} ${
                    opsiDarkmode && "bg-white"
                  } ${countFont === 1 && "w-[35%]  max-[800px]:w-[80%]"} ${
                    countFont === 2 && "w-2/5 max-[800px]:w-[85%]"
                  } ${countFont === 3 && "w-[45%] max-[800px]:w-[90%]"} ${
                    countFont === 4 && "w-[50%] max-[800px]:w-[95%]"
                  } ${countFont === 5 && "w-[60%] max-[800px]:w-full"} my-8`}
                  src={dataSurahById?.image?.primary}
                  alt=""
                />
              </div>
              <div className="w-4/5 mx-14  mt-4 min-h-[8rem] flex items-end max-[550px]:items-start max-[550px]:mx-0 max-[550px]:w-full">
                <div className={`tracking-wider`}>
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
                    } font-bold`}
                  >
                    artinya :{" "}
                  </p>
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
                    {dataSurahById?.translation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMarkPage;
