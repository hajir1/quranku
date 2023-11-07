import React, { useContext, useEffect, useState } from "react";
import { useAlQuranDataSurahDetail } from "../../../query/data";
import { OptionContext } from "../../../context/opsi";
import { Icon } from "@iconify/react";
import {
  ApiAlQuranSurahById,
  ApiAlQuranSurahByIdSearch,
} from "../../../services/service";
import { useParams } from "react-router-dom";
import style from "../../../styles/animation.module.scss";
import AlertMessageNotP from "../../alertMessage/alertNotP";
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
    dataSurahByIdSearch,
    setDataSurahByIdSearch,
  } = useContext(OptionContext);

  useEffect(() => {
    localStorage.setItem("bookMark", JSON.stringify({ data: opsiBookmark }));
  }, [dataSurahById, opsiBookmark]);

  useEffect(() => {
    if (valueSearchSurahById === "") {
      setDataSurahByIdSearch("");
    } else {
      ApiAlQuranSurahByIdSearch(idSurah, valueSearchSurahById, (data) => {
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
  }, [audioOne.id]);
  useEffect(() => {}, [dataSurahByIdSearch]);
  useEffect(() => {}, [alertBookmark]);
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
    ApiAlQuranSurahById(idSurah, idAyah, (data) => {
      setDataSurahById(data);
    });
    window.scrollTo({
      top: 550,
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
                      top: 400,
                      behavior: "smooth",
                    });
                }}
                icon="ph:arrow-up-bold"
              />
            </div>
          )}
        </div>
      )}
      <div className={`${opsiTafsir && "blur-[2px]"} w-full mt-4`}>
        <h1 className="text-center text-3xl"> {data?.bismillah?.arab}</h1>
        <p className="text-center max-[550px]:text-sm mt-2">
          {data?.bismillah?.translation}
        </p>
      </div>
      {dataSurahByIdSearch ? (
        <div
          className={`${opsiTafsir && "blur-[2px]"} ${
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
                {opsiOneAudio &&
                audioOne.id === dataSurahByIdSearch.number.inSurah ? (
                  <Icon
                    onClick={() => onStopOneAudioHandler()}
                    className="text-2xl"
                    icon="carbon:pause-outline"
                  />
                ) : (
                  <Icon
                    onClick={() =>
                      onStartOneAudioHandler(
                        dataSurahByIdSearch.number.inSurah,
                        dataSurahByIdSearch.audio.alafasy
                      )
                    }
                    className="text-2xl"
                    icon="radix-icons:resume"
                  />
                )}

                <Icon
                  onClick={(e) => {
                    onTafsirHandler(e, dataSurahByIdSearch.number.inSurah);
                  }}
                  className="text-2xl my-2"
                  icon="ion:book-sharp"
                />

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
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 h-full min-[800px]:hidden ">
            {opsiOneAudio &&
            audioOne.id === dataSurahByIdSearch.number.inSurah ? (
              <Icon
                onClick={() => onStopOneAudioHandler()}
                className="text-2xl"
                icon="carbon:pause-outline"
              />
            ) : (
              <Icon
                onClick={() =>
                  onStartOneAudioHandler(
                    dataSurahByIdSearch.number.inSurah,
                    dataSurahByIdSearch.audio.alafasy
                  )
                }
                className="text-2xl cursor-pointer"
                icon="radix-icons:resume"
              />
            )}

            <Icon
              onClick={(e) => {
                onTafsirHandler(e, dataSurahByIdSearch.number.inSurah);
              }}
              className="text-2xl my-4 cursor-pointer "
              icon="ion:book-sharp"
            />

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
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex justify-end">
              <img
                className="w-2/4 max-[550px]:w-full"
                src={dataSurahByIdSearch?.image?.primary}
                alt=""
              />
            </div>
            <div className="w-4/5 mx-14  mt-4 min-h-[8rem] flex items-end max-[800px]:items-start max-[550px]:mx-0">
              <div className="">
                <p className="font-bold">artinya : </p>
                <p className="max-[600px]:text-sm">
                  {dataSurahByIdSearch?.translation}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        data?.ayahs?.map((item) => (
          <div
            className={`${opsiTafsir && "blur-[2px]"} ${
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
                    <Icon
                      onClick={() => onStopOneAudioHandler()}
                      className="text-2xl"
                      icon="carbon:pause-outline"
                    />
                  ) : (
                    <Icon
                      onClick={() =>
                        onStartOneAudioHandler(
                          item.number.inSurah,
                          item.audio.alafasy
                        )
                      }
                      className="text-2xl cursor-pointer"
                      icon="radix-icons:resume"
                    />
                  )}

                  <Icon
                    onClick={(e) => onTafsirHandler(e, item.number.inSurah)}
                    className="text-2xl my-4 cursor-pointer"
                    icon="ion:book-sharp"
                  />

                  <Icon
                    onClick={(e) =>
                      onBookMarkHandler(
                        e,
                        item.number.inSurah,
                        item.number.inQuran
                      )
                    }
                    className="text-2xl cursor-cell "
                    icon="fluent:bookmark-add-24-filled"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 h-full min-[800px]:hidden">
              {opsiOneAudio && audioOne.id === item.number.inSurah ? (
                <Icon
                  onClick={() => onStopOneAudioHandler()}
                  className="text-2xl"
                  icon="carbon:pause-outline"
                />
              ) : (
                <Icon
                  onClick={() =>
                    onStartOneAudioHandler(
                      item.number.inSurah,
                      item.audio.alafasy
                    )
                  }
                  className="text-2xl cursor-pointer"
                  icon="radix-icons:resume"
                />
              )}

              <Icon
                onClick={(e) => onTafsirHandler(e, item.number.inSurah)}
                className="text-2xl my-4 cursor-pointer"
                icon="ion:book-sharp"
              />

              <Icon
                onClick={(e) =>
                  onBookMarkHandler(e, item.number.inSurah, item.number.inQuran)
                }
                className="text-2xl cursor-cell "
                icon="fluent:bookmark-add-24-filled"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className={` flex justify-end`}>
                <img
                  className={`${
                    opsiDarkmode && "bg-white"
                  } w-2/4 max-[800px]:w-full`}
                  src={item?.image?.primary}
                  alt=""
                />
              </div>
              <div className="w-4/5 mx-14  mt-4 min-h-[8rem] flex items-end max-[800px]:items-start max-[550px]:mx-0">
                <div className="">
                  <p className="font-bold">artinya : </p>
                  <p className="max-[600px]:text-sm">{item?.translation}</p>
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
