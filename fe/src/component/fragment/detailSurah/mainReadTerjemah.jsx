import { useContext, useEffect, useRef, useState } from "react";
import {
  useAlQuranDataSurah,
  useAlQuranDataSurahDetail,
} from "../../../query/data";
import Button from "../../element/Button";
import { OptionContext } from "../../../context/opsi";
import style from "../../../styles/animation.module.scss";
import { Icon } from "@iconify/react";
import ApiTerjmah from "./apiTerjemah";
import ApiRead from "./apiRead";
import { Link, useParams } from "react-router-dom";
const ApiSurahDetail = () => {
  const { id } = useParams();
  const { data } = useAlQuranDataSurahDetail();
  const { data: dataAllSurah } = useAlQuranDataSurah();
  const [iconSurah, setIconSurah] = useState(false);
  const iconModalRef = useRef(null);
  const {
    opsiSurah,
    setOpsiSurah,
    opsiAllAudio,
    setOpsiAllAudio,
    opsiOneAudio,
    audioOne,
    audioRef,
    opsiTafsir,
    setOpsiOneAudio,
    opsiDarkmode,
    opsiSetting,
    setOpsiSetting,
    dataSurahByIdSearch,
    countFont,
  } = useContext(OptionContext);
  const audioAllRef = useRef(null);
  useEffect(() => {
    onStopAudioAllHandler();
  }, [id]);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        iconModalRef.current &&
        !iconModalRef.current.contains(event.target)
      ) {
        setIconSurah(false);
        window.location.reload();
      }
    };

    if (iconSurah) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [iconSurah]);
  const onStartAudioAllHandler = () => {
    setOpsiOneAudio(false);
    setOpsiAllAudio(true);
  };
  const onStopAudioAllHandler = () => {
    setOpsiAllAudio(false);
  };
  const onIconSurahHandler = () => {
    setIconSurah(!iconSurah);
    setOpsiSetting(false);
  };
  return (
    <div
      className={`${
        opsiDarkmode && "text-white"
      } w-full flex justify-center mt-16 `}
    >
      <div className=" flex justify-center flex-col w-[90%] max-[600px]:w-[98%]">
        <div className={`${opsiTafsir && "hidden"} justify-between flex`}>
          <div
            className={`${
              opsiSetting && "blur-[2px]"
            } flex justify-start items-center`}
          >
            <div className={`${style.tooltipOpsiHome} `}>
              <Link to={`/`}>
                <Icon className="text-2xl" icon="uil:home" />
                <p className={`${style.tooltipAlertleft} bg-black text-white`}>
                  pergi ke home
                </p>
              </Link>
            </div>
            <div className={`${style.tooltipOpsiHome} flex `}>
              <p onClick={onIconSurahHandler} className="mx-2 cursor-pointer">
                &frasl;&nbsp;&nbsp; Halaman
              </p>
              <p className={`${style.tooltipAlertleft} bg-black text-white`}>
                cari surah
              </p>
            </div>
            <p>{data?.number}</p>
          </div>

          {iconSurah && (
            <div
              ref={iconModalRef}
              className={`${style.iconSurah} absolute w-1/4 p-4 left-0 bg-black mx-1 text-white z-10 h-screen overflow-y-auto max-[800px]:w-3/5`}
            >
              <div className="flex justify-between border-b-white border-b-[1px] p-2 sha">
                <p className="tracking-wider font-medium">{data?.name}</p>
                <Icon
                  onClick={() => {
                    setIconSurah(!iconSurah);
                    window.location.reload();
                  }}
                  className="text-white text-2xl mx-2 cursor-pointer"
                  icon="octicon:x-12"
                />
              </div>
              <div className="p-2 flex justify-evenly w-full">
                <div className="w-4/5 p-1">
                  {dataAllSurah?.data?.map((item) => (
                    <Link
                      to={`/surah/${item.number}`}
                      className="flex w-full justify-between p-2 items-center"
                      key={item.number}
                    >
                      <p className="font-thin w-auto mx-1">{item.number}</p>
                      <div className="font-thin w-[90%] flex justify-center">
                        <p>{item.englishName}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className={`${opsiTafsir && "hidden"} ${
            opsiSetting && "blur-[3px]"
          } w-full `}
        >
          <h1 className={`text-center text-[2rem] font-bold`}>{data?.name}</h1>
          <p className="text-center">{data?.translation}</p>
        </div>
        <div
          className={`${opsiTafsir && "hidden"} ${
            opsiSetting && "blur-[3px]"
          } w-full mt-4`}
        >
          <div className="">
            <p
              className={`${
                countFont === 1 && "text-[0.8rem] max-[650px]:text-[0.7rem]"
              } ${
                countFont === 2 && "text-[0.9rem] max-[650px]:text-[0.8rem]"
              } ${countFont === 3 && "text-[1rem] max-[650px]:text-[0.9rem]"} ${
                countFont === 4 && "text-[1.1rem] max-[650px]:text-[1rem]"
              } ${
                countFont === 5 && "text-[1.2rem] max-[650px]:text-[1.1rem]"
              } font-bold`}
            >
              deskripsi :{" "}
            </p>
            <p
              className={`${
                countFont === 1 && "text-[0.8rem] max-[650px]:text-[0.7rem]"
              } ${
                countFont === 2 && "text-[0.9rem] max-[650px]:text-[0.8rem]"
              } ${countFont === 3 && "text-[1rem] max-[650px]:text-[0.9rem]"} ${
                countFont === 4 && "text-[1.1rem] max-[650px]:text-[1rem]"
              } ${
                countFont === 5 && "text-[1.2rem] max-[650px]:text-[1.1rem]"
              }`}
            >
              {data?.description}
            </p>
          </div>
          <div className="flex gap-2">
            <p
              className={`${
                countFont === 1 && "text-[0.8rem] max-[650px]:text-[0.7rem]"
              } ${
                countFont === 2 && "text-[0.9rem] max-[650px]:text-[0.8rem]"
              } ${countFont === 3 && "text-[1rem] max-[650px]:text-[0.9rem]"} ${
                countFont === 4 && "text-[1.1rem] max-[650px]:text-[1rem]"
              } ${
                countFont === 5 && "text-[1.2rem] max-[650px]:text-[1.1rem]"
              } font-bold`}
            >
              jumlah ayat :{" "}
            </p>
            <p
              className={`${
                countFont === 1 && "text-[0.8rem] max-[650px]:text-[0.7rem]"
              } ${
                countFont === 2 && "text-[0.9rem] max-[650px]:text-[0.8rem]"
              } ${countFont === 3 && "text-[1rem] max-[650px]:text-[0.9rem]"} ${
                countFont === 4 && "text-[1.1rem] max-[650px]:text-[1rem]"
              } ${
                countFont === 5 && "text-[1.2rem] max-[650px]:text-[1.1rem]"
              }`}
            >
              {data?.numberOfAyahs}
            </p>
          </div>
        </div>
        <div
          className={`${opsiTafsir && "hidden"} ${
            opsiSetting && "blur-[3px]"
          } flex justify-between items-center mt-10 w-full`}
        >
          <div
            className={`${
              opsiDarkmode && "border-white"
            } w-2/5 h-12 p-1 border border-black flex max-[800px]:w-3/5`}
          >
            <Button
              buttonClick={() => setOpsiSurah(true)}
              buttonClass={`${opsiSurah && "border-b-2 border-b-black"} ${
                style.options
              } ${opsiDarkmode && "border-b-white"} ${
                dataSurahByIdSearch !== "" && "w-full"
              } w-1/2 h-full outline-none `}
            >
              Terjemahkan
            </Button>
            <Button
              buttonClick={() => setOpsiSurah(false)}
              buttonClass={`${!opsiSurah && "border-b-2 border-b-black"}  ${
                style.options
              } ${opsiDarkmode && "border-b-white"} ${
                dataSurahByIdSearch !== "" && "hidden"
              }  w-1/2 h-full outline-none`}
            >
              baca
            </Button>
          </div>
          <div
            className={` ${
              dataSurahByIdSearch !== "" && "hidden"
            } w-3/5 h-12 flex justify-end items-center max-[800px]:w-2/5`}
          >
            {opsiAllAudio ? (
              <div className={`${style.tooltipCenter} w-full h-full mx-1 min-[800px]:w-2/6`}>
                <div
                  onClick={onStopAudioAllHandler}
                  className={`${
                    opsiDarkmode && "border-white"
                  } cursor-pointer flex justify-around items-center border h-full border-black `}
                >
                  <Icon className="text-2xl" icon="carbon:pause-outline" />

                  <p className="text-[1.2rem] font-bold max-[550px]:text-sm">
                    Matikan Audio
                  </p>
                </div>
                <p className={`${style.tooltipAlertcenter} bg-black text-white`}>hentikan audio</p>
              </div>
            ) : (
              <div className={`${style.tooltipCenter} w-full h-full mx-1 min-[800px]:w-2/6`}>
                <div
                  onClick={onStartAudioAllHandler}
                  className={`${
                    opsiDarkmode && "border-white"
                  } cursor-pointer flex justify-around items-center border border-black h-full `}
                >
                  <Icon className="text-2xl" icon="radix-icons:resume" />
                  <p className="text-[1.2rem] font-bold max-[550px]:text-sm">
                    Putar Audio
                  </p>
                </div>
                <p className={`${style.tooltipAlertcenter} bg-black text-white`}>putar audio</p>
              </div>
            )}
          </div>
        </div>
        <div className={`${opsiTafsir ? "mt-48" : "0"}`}>
          {opsiSurah ? <ApiTerjmah /> : <ApiRead />}
        </div>
      </div>
      {opsiAllAudio && (
        <div className="w-full fixed bottom-0">
          <audio
            className="w-full rounded-none"
            onEnded={() => {
              setOpsiAllAudio(false);
            }}
            ref={audioAllRef}
            controls
            autoPlay
            src={data?.audio}
          ></audio>
        </div>
      )}
      {opsiOneAudio && (
        <div className="w-full fixed bottom-0">
          <audio
            ref={audioRef}
            id={`audio-${audioOne.id}`}
            className="w-full rounded-none"
            onEnded={() => setOpsiOneAudio(false)}
            src={audioOne.audioUrl}
            controls
            autoPlay
          ></audio>
        </div>
      )}
    </div>
  );
};

export default ApiSurahDetail;
