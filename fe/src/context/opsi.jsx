import { createContext, useRef, useState } from "react";

export const OptionContext = createContext();
const OptionProvider = ({ children }) => {
  const audioRef = useRef(null);
  const ukuranFontRef = useRef(null);
  const settingModalRef = useRef(null);
  const [searchAlert, setSearchAlert] = useState(false);
  const [valueSearchSurah, setValueSearchSurah] = useState("");
  const [opsiSurah, setOpsiSurah] = useState(true);
  const [opsiAllAudio, setOpsiAllAudio] = useState(false);
  const [opsiOneAudio, setOpsiOneAudio] = useState(false);
  const [audioOne, setAudioOne] = useState({ id: null, audioUrl: "" });
  const [opsiTafsir, setOpsitafsir] = useState(false);
  const [opsiBookmark, setOpsiBookmark] = useState([]);
  const [valueSearchSurahById, setValueSearchSurahById] = useState("");
  const [dataSurahById, setDataSurahById] = useState("");
  const [dataBookmark, setDataBookmark] = useState([]);
  const [opsiSetting, setOpsiSetting] = useState(false);
  const [opsiDarkmode, setOpsiDarkmode] = useState(false);
  const [dataSurahByIdSearch, setDataSurahByIdSearch] = useState("");
  const [opsiHome, setOpsiHome] = useState(false);
  const [countFont, setCountFont] = useState(3);
  const [valueAudio, setValueAudio] = useState("alafasy");
  const [valueSearchAsmaulHusna, setValueSearchAsmaulHusna] = useState("");
  const [opsiDoa, setOpsiDoa] = useState(true);
  const [valueOpsiDzikir, setValueOpsiDzikir] = useState("semuaDzikir");
  const [opsiBahasa, setOpsiBahasa] = useState(true);
  return (
    <OptionContext.Provider
      value={{
        searchAlert,
        dataSurahByIdSearch,
        setDataSurahByIdSearch,
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
        ukuranFontRef,
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
        opsiSetting,
        setOpsiSetting,
        opsiDarkmode,
        setOpsiDarkmode,
        opsiHome,
        setOpsiHome,
        countFont,
        settingModalRef,
        setCountFont,
        valueAudio,
        setValueAudio,
        valueSearchAsmaulHusna,
        setValueSearchAsmaulHusna,
        opsiDoa,
        setOpsiDoa,
        valueOpsiDzikir,
        setValueOpsiDzikir,opsiBahasa, setOpsiBahasa
      }}
    >
      {children}
    </OptionContext.Provider>
  );
};
export default OptionProvider;
