import sekeleton from "../../../styles/sekeleton.module.scss";
const AllQuranSurahLoading = () => {
  return (
    <div
      className={`flex justify-around w-[90%] flex-wrap gap-2 max-[10520px]:w-full max-[1050px]:gap-0 h-[40%]`}
    >
      <div
        className={`${sekeleton.sekeleton} w-[30%] outline-none border rounded-md flex h-20 items-center max-[650px]:w-[100%] max-[1050px]:w-[47%] mt-2`}
      ></div>
      <div
        className={`${sekeleton.sekeleton} w-[30%] outline-none border rounded-md flex h-20 items-center max-[650px]:w-[100%] max-[1050px]:w-[47%] mt-2`}
      ></div>
      <div
        className={`${sekeleton.sekeleton} w-[30%] outline-none border rounded-md flex h-20 items-center max-[650px]:w-[100%] max-[1050px]:w-[47%] mt-2`}
      ></div>
      <div
        className={`${sekeleton.sekeleton} w-[30%] outline-none border rounded-md flex h-20 items-center max-[650px]:w-[100%] max-[1050px]:w-[47%] mt-2`}
      ></div>
      <div
        className={`${sekeleton.sekeleton} w-[30%] outline-none border rounded-md flex h-20 items-center max-[650px]:w-[100%] max-[1050px]:w-[47%] mt-2`}
      ></div>
      <div
        className={`${sekeleton.sekeleton} w-[30%] outline-none border rounded-md flex h-20 items-center max-[650px]:w-[100%] max-[1050px]:w-[47%] mt-2`}
      ></div>
    </div>
  );
};

export default AllQuranSurahLoading;
