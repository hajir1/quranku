import { useContext } from "react";
import AllAlQuranApi from "../component/fragment/homeAlquran/apiAllAlQuran";
import BookMark from "../component/fragment/homeAlquran/bookMark";
import Navbar from "../component/layout/navbar";
import { useAlQuranDataSurah } from "../query/data";
import { OptionContext } from "../context/opsi";
import Error408 from "../component/message/errorMessage/error408";
import NavbarLoading from "../component/message/loadingMessage/navbarLoading";
import BookMarkLoading from "../component/message/loadingMessage/bookMarkLoading";
import AllQuranSurahLoading from "../component/message/loadingMessage/allsurahLoading";
const HomeAlquran = () => {
  const { data, isLoading, error } = useAlQuranDataSurah();
  const { opsiDarkmode } = useContext(OptionContext);
  return (
    <div className="w-full">
      {isLoading ? <NavbarLoading /> : data && <Navbar type="homeQuran" />}
      <div
        className={`${
          opsiDarkmode && "bg-black text-white"
        } flex flex-col items-center min-h-screen p-2`}
      >
        {isLoading ? <BookMarkLoading/> : data && <BookMark />}
        {error ? (
          <Error408 />
        ) : isLoading ? (
          <AllQuranSurahLoading/>
        ) : (
          data && <AllAlQuranApi />
        )}
      </div>
    </div>
  );
};

export default HomeAlquran;
