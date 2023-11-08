import { useContext } from "react";
import AllAlQuranApi from "../component/fragment/homeAlquran/apiAllAlQuran";
import BookMark from "../component/fragment/homeAlquran/bookMark";
import Navbar from "../component/layout/navbar";
import { useAlQuranDataSurah } from "../query/data";
import { OptionContext } from "../context/opsi";
const HomeAlquran = () => {
  const { data, isLoading, error } = useAlQuranDataSurah();
  const {opsiDarkmode} = useContext(OptionContext)
  return (
    <div className="w-full">
      <Navbar type="homeQuran" />
        <div className={`${opsiDarkmode && "bg-black text-white"} flex flex-col items-center min-h-screen p-2`}>
        <BookMark />
          {error ? (
            <h1>error</h1>
          ) : isLoading ? (
            <h1>isloading</h1>
          ) : (
            data && <AllAlQuranApi/>
          )}
        </div>
    </div>
  );
};

export default HomeAlquran;
