import { createContext, useRef, useState } from "react";

export const OptionContext = createContext();
const OptionProvider = ({ children }) => {
  const [searchAlert, setSearchAlert] = useState(false);
  const [valueSearchSurah, setValueSearchSurah] = useState("");
  const [opsiSurah, setOpsiSurah] = useState(true);
  const [opsiAllAudio, setOpsiAllAudio] = useState(false);
  const [opsiOneAudio, setOpsiOneAudio] = useState(false);
  const audioRef = useRef(null);
  const [audioOne, setAudioOne] = useState({ id: null, audioUrl: "" });
  const [opsiTafsir, setOpsitafsir] = useState(false);
  const [opsiBookmark, setOpsiBookmark] = useState([]);
  const [valueSearchSurahById, setValueSearchSurahById] = useState("");
  const [dataSurahById, setDataSurahById] = useState("");
  const [dataBookmark, setDataBookmark] = useState([]);
  return (
    <OptionContext.Provider
      value={{
        searchAlert,
        setSearchAlert,
        valueSearchSurah,
        setValueSearchSurah,
        opsiSurah,
        setOpsiSurah,
        opsiAllAudio,
        setOpsiAllAudio,
        opsiOneAudio,
        setOpsiOneAudio,
        audioOne,
        setAudioOne,
        audioRef,
        opsiTafsir,
        setOpsitafsir,
        opsiBookmark,
        setOpsiBookmark,
        valueSearchSurahById,
        setValueSearchSurahById,
        dataSurahById,
        setDataSurahById,
        dataBookmark,
        setDataBookmark,
      }}
    >
      {children}
    </OptionContext.Provider>
  );
};
export default OptionProvider;
