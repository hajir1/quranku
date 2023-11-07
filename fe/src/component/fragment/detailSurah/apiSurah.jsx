import { useContext, useEffect, useRef } from "react";
import { useAlQuranDataSurahDetail } from "../../../query/data";
import Button from "../../element/Button";
import { OptionContext } from "../../../context/opsi";
import style from "../../../styles/animation.module.scss";
import { Icon } from "@iconify/react";
import ApiTerjmah from "./apiTerjemah";
import ApiRead from "./apiRead";
import { useParams } from "react-router-dom";
const ApiSurahDetail = () => {
  const { id } = useParams();
  const { data } = useAlQuranDataSurahDetail();
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
    dataSurahByIdSearch,
  } = useContext(OptionContext);
  useEffect(() => {
    onStopAudioAllHandler();
  }, [id]);
  const audioAllRef = useRef(null);
  const onStartAudioAllHandler = () => {
    setOpsiOneAudio(false);
    setOpsiAllAudio(true);
  };
  const onStopAudioAllHandler = () => {
    setOpsiAllAudio(false);
  };

  return (
    <div
      className={`${
        opsiDarkmode && "text-white"
      } w-full flex justify-center mt-20`}
    >
      <div className=" flex justify-center flex-col w-[90%] max-[600px]:w-full">
        <div className={`${opsiTafsir && "blur-[3px]"} w-full`}>
          <h1 className="text-center text-[2rem] font-bold">{data?.name}</h1>
          <p className="text-center">{data?.translation}</p>
        </div>
        <div className={`${opsiTafsir && "blur-[3px]"} w-full mt-4`}>
          <p>
            <span className="font-bold">deskripsi : </span>
            {data?.description}
          </p>
          <p>
            <span className="font-bold">jumlah ayat : </span>
            {data?.numberOfAyahs}
          </p>
        </div>
        <div
          className={`${
            opsiTafsir && "blur-[3px]"
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
                style.opsiSurah
              } ${opsiDarkmode && "border-b-white"} ${dataSurahByIdSearch !== "" && "w-full"} w-1/2 h-full outline-none `}
            >
              Terjemahkan
            </Button>
            <Button
              buttonClick={() => setOpsiSurah(false)}
              buttonClass={`${!opsiSurah && "border-b-2 border-b-black"}  ${
                style.opsiSurah
              } ${opsiDarkmode && "border-b-white"} ${dataSurahByIdSearch !== "" && "hidden"}  w-1/2 h-full outline-none`}
            >
              baca
            </Button>
          </div>
          <div className="w-3/5 h-12 flex justify-end items-center max-[800px]:w-2/5 ">
            {opsiAllAudio ? (
              <div
                onClick={onStopAudioAllHandler}
                className={`${
                  opsiDarkmode && "border-white"
                } flex justify-around items-center border border-black w-2/6 h-full mx-1 max-[800px]:w-full  `}
              >
                <Icon className="text-2xl" icon="carbon:pause-outline" />

                <p className="text-[1.2rem] font-bold max-[550px]:text-sm">
                  Matikan Audio
                </p>
              </div>
            ) : (
              <div
                onClick={onStartAudioAllHandler}
                className={`${
                  opsiDarkmode && "border-white"
                } flex justify-around items-center border border-black w-2/6 h-full mx-1 max-[800px]:w-full`}
              >
                <Icon className="text-2xl" icon="radix-icons:resume" />
                <p className="text-[1.2rem] font-bold max-[550px]:text-sm">
                  Putar Audio
                </p>
              </div>
            )}
          </div>
        </div>
        {opsiSurah ? <ApiTerjmah /> : <ApiRead />}
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
