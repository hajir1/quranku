import { useContext, useEffect } from "react";
import { useAlQuranDataSurahDetail } from "../../../query/data";
import Button from "../../element/Button";
import { OptionContext } from "../../../context/opsi";
import style from "../../../styles/animation.module.scss";
import { Icon } from "@iconify/react";
import ApiTerjmah from "./apiTerjemah";
import ApiRead from "./apiRead";
const ApiSurahDetail = () => {
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
  } = useContext(OptionContext);
  const onStartAudioAllHandler = () => {
    setOpsiOneAudio(false);
    setOpsiAllAudio(true);
  };
  const onStopAudioAllHandler = () => {
    setOpsiAllAudio(false);
  };

  return (
    <div className={`${``} w-full flex justify-center mt-20`}>
      <div className=" flex justify-center flex-col w-[90%]">
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
          } flex justify-between items-center mt-10`}
        >
          <div className="w-2/5 h-12 p-1 border border-black flex ">
            <Button
              buttonClick={() => setOpsiSurah(true)}
              buttonClass={`${opsiSurah && "border border-b-black"} ${
                style.opsiSurah
              } w-1/2 h-full mx-4 outline-none text-black`}
            >
              Terjemahkan
            </Button>
            <Button
              buttonClick={() => setOpsiSurah(false)}
              buttonClass={`${!opsiSurah && "border border-b-black"}  ${
                style.opsiSurah
              }  w-1/2 h-full mx-4 outline-none`}
            >
              baca
            </Button>
          </div>
          <div className="w-3/5 h-12 flex justify-end items-center">
            {opsiAllAudio ? (
              <div
                onClick={onStopAudioAllHandler}
                className="flex justify-around items-center border border-black w-2/6 h-full"
              >
                <Icon className="text-2xl" icon="carbon:pause-outline" />

                <p className="text-[1.2rem] font-bold">Matikan Audio</p>
              </div>
            ) : (
              <div
                onClick={onStartAudioAllHandler}
                className="flex justify-around items-center border border-black w-2/6 h-full"
              >
                <Icon className="text-2xl" icon="radix-icons:resume" />
                <p className="text-[1.2rem] font-bold">Putar Audio</p>
              </div>
            )}
          </div>
        </div>
        {opsiSurah ? <ApiTerjmah /> : <ApiRead/>}
      </div>
      {opsiAllAudio && (
        <div className="w-full fixed bottom-0">
          <audio
            className="w-full rounded-none"
            onEnded={() => {
              setOpsiAllAudio(false);
            }}
            controls
            autoPlay
          >
            <source src={data?.audio} />
          </audio>
        </div>
      )}
      {opsiOneAudio && (
        <div className="w-full fixed bottom-0">
          <audio
            ref={audioRef}
            id={`audio-${audioOne.id}`}
            className="w-full rounded-none"
            onEnded={()=>setOpsiOneAudio(false)}
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
