import { useContext } from "react";
import { OptionContext } from "../../../../context/opsi";
import SemuaDzikir from "./semuadzikir";
import SesudahSholat from "./sesudahSholat";
import DzikirPagi from "./dzikirPagi";
import DzikirMalam from "./dzikirMalam";

const MainApiDzikir = () => {
  const { valueOpsiDzikir } = useContext(OptionContext);

  return (
    <div className="w-full flex items-center flex-col">
      {valueOpsiDzikir === "semuaDzikir" && <SemuaDzikir />}
      {valueOpsiDzikir === "sesudahSholat" && <SesudahSholat />}
      {valueOpsiDzikir === "pagiHari" && <DzikirPagi />}
      {valueOpsiDzikir === "malamHari" && <DzikirMalam />}
    </div>
  );
};

export default MainApiDzikir;
