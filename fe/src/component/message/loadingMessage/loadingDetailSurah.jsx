import sekeleton from "../../../styles/sekeleton.module.scss";
const LoadingDataSurah = () => {
  return (
    <div className="fixed w-full h-full">
      <div
        className={`w-full flex mt-16 min-h-[40rem] h-auto flex-col items-center`}
      >
        <div className="w-full h-auto">
          <div className={`${sekeleton.sekeleton} w-28 h-12`}></div>
          <div
            className={`${sekeleton.sekeleton} w-1/2 border h-12 border-white my-2`}
          ></div>
        </div>
        <div className="flex items-center w-full h-auto flex-col">
          <div className={`${sekeleton.sekeleton} w-2/4 h-12 mb-4`}></div>
          <div
            className={`${sekeleton.sekeleton} w-4/5 h-screen border border-white max-[650px]:w-full`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingDataSurah;
