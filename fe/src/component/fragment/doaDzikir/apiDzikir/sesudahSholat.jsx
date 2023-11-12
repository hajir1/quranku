import { useContext } from "react";
import { OptionContext } from "../../../../context/opsi";
import { useDzikirAfterSholat } from "../../../../query/data";

const SesudahSholat = () => {
  const { data: dataDzikirAfterSholat } = useDzikirAfterSholat();
  const { opsiDarkmode } = useContext(OptionContext);
  return (
    <>
      <div
        className={`${
          opsiDarkmode ? "border border-white" : "border-t-2 border-t-black"
        } p-4 w-[95%] h-auto   mt-4`}
      >
        <h1 className="font-bold">SESUDAH SHOLAT</h1>
        {dataDzikirAfterSholat?.map((item) => (
          <div
            className={`mt-4 border-b-[1px] border-b-black`}
            key={item.arabic}
          >
            <p className="my-4 font-bold">- {item.title}</p>
            <div className="flex flex-col">
              <p className="text-right text-2xl">{item.arabic}</p>
              <p className="text-left my-4">{item.latin}</p>
              <p className="text-center">{item.notes}</p>
            </div>
            <div className="tracking-wider text-left my-3">
              <span className="font-bold">artinya : </span>
              <p className="mt-2 text-sm">{item.translation}</p>
            </div>
            <div className="flex justify-start items-center tracking-wider text-left my-3">
              <span className="font-bold">source:&nbsp;&nbsp; </span>
              <p className="text-sm">{item.source}</p>
            </div>
            <div className="flex justify-start items-center tracking-wider text-left my-3">
              <span className="font-bold">fawaid:&nbsp;&nbsp; </span>
              <p className="text-sm">{item.fawaid}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SesudahSholat;
