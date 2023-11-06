import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import Navbar from "../component/layout/navbar";
import { OptionContext } from "../context/opsi";
import style from "../styles/animation.module.scss";
import { ApiAlQuranSurahById } from "../services/service";
import AlertMessageNotP from "../component/alertMessage/alertNotP";
const BookMarkPage = () => {
  const { id, page } = useParams();
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
  } = useContext(OptionContext);
  const [lihatDetail, setLihatDetail] = useState(false);
  const [alertHapusBookmark, setAlertHapusBookmark] = useState(false);
  useEffect(() => {
    ApiAlQuranSurahById(id, page, (data) => {
      setDataSurahById(data);
    });
  }, []);
  useEffect(() => {}, [dataSurahById]);
  const onTafsirHandler = (e, idAyah) => {
    e.preventDefault();
    setOpsitafsir(true);
    ApiAlQuranSurahById(id, idAyah, (data) => {
      setDataSurahById(data);
    });
    window.scrollTo({
      top: 350,
      behavior: "smooth",
    });

    setSearchAlert(false);
  };

  const dataLokal = localStorage.getItem("bookMark");
  const data = JSON.parse(dataLokal);
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
      <Navbar type="detailSurah" />

      <div
        className={`${
          opsiDarkmode && "bg-black text-white"
        } w-full h-screen flex flex-col `}
      >
        <div className="mt-20">
          {alertHapusBookmark && (
            <>
              <AlertMessageNotP
                onCloseHandler={() => setAlertHapusBookmark(false)}
                classIcon={`text-black`}
                classContaint={`${style.animationTafsir} ${
                  opsiDarkmode && "bg-white z-20 opacity-100 m-0"
                } w-52 h-16 bg-black absolute z-20 text-white p-2 m-4 opacity-80`}
              >
                <p className={`${opsiDarkmode && "text-black"} text-center w-full text-sm mt-2`}>
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
              <div className="flex items-center flex-col p-10">
                <div className="flex items-center w-full">
                  <div className="w-[3%] mr-16">
                    <div className="w-10 h-10 border mx-4 rotate-45 border-amber-400 grid place-content-center">
                      <div className="-rotate-45">
                        <p>{dataSurahById?.number?.inSurah}</p>
                      </div>
                    </div>
                  </div>
                  <h1 className="w-full text-white text-center text-3xl tracking-wider">
                    {dataSurahById?.arab}
                  </h1>
                </div>
                <p className="text-white text-center text-[0.8rem] mt-4 tracking-wide">
                  <span className="font-bold">
                    artinya &nbsp;&nbsp;:&nbsp;&nbsp;{" "}
                  </span>
                  {dataSurahById?.translation}
                </p>
              </div>
              <div className="w-full p-10">
                <h1 className="tracking-widest font-bold">Tafsir Quraish :</h1>
                <p className="text-sm tracking-wide mt-4">
                  {dataSurahById?.tafsir?.quraish}
                </p>
              </div>
              <div className="w-full p-10">
                <h1 className="tracking-widest font-bold">Tafsir Jalalyn :</h1>
                <p className="text-sm tracking-wide mt-4">
                  {dataSurahById?.tafsir?.jalalayn}
                </p>
              </div>
              <div className="w-full p-10">
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
                  <div className="w-full p-10  my-4">
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
            } w-full h-auto min-h-[16rem] mt-2 border-b-[1px] border-b-black p-2 relative`}
            key={dataSurahById?.number?.inQuran}
          >
            <div className="absolute top-0 w-16 h-full">
              <div className="flex flex-col items-center h-auto w-full ">
                <div className="border border-amber-400 w-10 h-10 grid place-content-center rotate-45 m-4">
                  <div className="-rotate-45">
                    <p className="">{dataSurahById?.number?.inSurah}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-end h-full">
                  {opsiOneAudio ? (
                    <Icon
                      onClick={() => onStopOneAudioHandler()}
                      className="text-2xl cursor-pointer"
                      icon="carbon:pause-outline"
                    />
                  ) : (
                    <Icon
                      onClick={() =>
                        onStartOneAudioHandler(
                          dataSurahById.number.inSurah,
                          dataSurahById.audio.alafasy
                        )
                      }
                      className="text-2xl cursor-pointer"
                      icon="radix-icons:resume"
                    />
                  )}

                  <Icon
                    onClick={(e) =>
                      onTafsirHandler(e, dataSurahById.number.inSurah)
                    }
                    className="text-2xl my-4 cursor-pointer"
                    icon="ion:book-sharp"
                  />

                  <Icon
                    onClick={() => {
                      onRemoveBookmarkHandler(dataSurahById.number.inQuran);
                    }}
                    className="text-2xl cursor-pointer"
                    icon="mdi:bookmark-off"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex justify-end">
                <img
                  className={`${opsiDarkmode && "bg-white"} w-2/4`}
                  src={dataSurahById?.image?.primary}
                  alt=""
                />
              </div>
              <div className="w-4/5 mx-14  mt-4 min-h-[8rem] flex items-end">
                <p className="tracking-wider">
                  <span className="font-bold">artinya : </span>
                  {dataSurahById?.translation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMarkPage;
