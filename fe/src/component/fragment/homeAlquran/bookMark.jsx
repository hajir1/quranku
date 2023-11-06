import { Icon } from "@iconify/react";
import { useContext, useEffect, useState } from "react";
import AlertMessage from "../../alertMessage/alert";
import style from "../../../styles/animation.module.scss";
import { Link } from "react-router-dom";
import { OptionContext } from "../../../context/opsi";
const BookMark = () => {
  const { dataBookmark, setDataBookmark, opsiSetting, opsiDarkmode } =
    useContext(OptionContext);
  const [alertRemoveAllItems, setAlertRemoveAllItems] = useState(false);
  const dataLokal = localStorage.getItem("bookMark");
  const data = JSON.parse(dataLokal);
  useEffect(() => {
    setDataBookmark(data?.data);
  }, []);
  const onRemoveBookmarkHandler = (id) => {
    const count = dataBookmark.filter((item) => item.numberQuran === id).length;
    if (count > 1) {
      const indexToRemove = dataBookmark.findIndex(
        (item) => item.numberQuran === id
      );
      if (indexToRemove >= 0) {
        dataBookmark.splice(indexToRemove, 1);
        localStorage.setItem(
          "bookMark",
          JSON.stringify({ data: dataBookmark })
        );
      }
    } else {
      const updatedDataBookmark = dataBookmark.filter(
        (item) => item.numberQuran !== id
      );
      setDataBookmark(updatedDataBookmark);
      localStorage.setItem(
        "bookMark",
        JSON.stringify({ data: updatedDataBookmark })
      );
    }
    window.location.reload();
  };
  return (
    <div
      className={`${opsiSetting && "blur-[2px]"} ${
        opsiDarkmode && "bg-amber-500 text-white border border-white"
      } mt-14 mb-6 w-full min-h-[6rem] bg-amber-600 bg-opacity-50 p-3 rounded-xl flex-wrap`}
    >
      <div
        className={`${
          opsiDarkmode && "border-b-white"
        } flex justify-start w-full border-b-[1px] h-1/3 border-b-black`}
      >
        <Icon className="text-2xl " icon="ic:sharp-bookmark" />
        <h1 className="tracking-wider">Bookmark</h1>
        {dataBookmark?.length > 0 && (
          <div className={` w-full flex justify-end `}>
            <Icon
              onClick={() => setAlertRemoveAllItems(!alertRemoveAllItems)}
              className="text-2xl mx-5 my-2 cursor-pointer"
              icon="bi:trash"
            />
            {alertRemoveAllItems && (
              <AlertMessage
                classContaint={`${opsiDarkmode && "border border-white"} ${style.animatedTrash} absolute w-42 p-2 rounded-lg h-20  bg-black text-white z-20`}
                onCloseHandler={() =>
                  setAlertRemoveAllItems(!alertRemoveAllItems)
                }
                ColorContainer="black"
                classIcon="text-white cursor-pointer"
                onNotHandler={() =>
                  setAlertRemoveAllItems(!alertRemoveAllItems)
                }
                onYesHandler={() => {
                  setDataBookmark([]);
                  localStorage.setItem(
                    "bookMark",
                    JSON.stringify(dataBookmark)
                  );
                  setAlertRemoveAllItems(false);
                  localStorage.removeItem("bookMark");
                  window.location.reload();
                }}
              >
                <div className="text-white">
                  <p className="text-[0.7rem] text-center">
                    apakah yakin ingin menghapus semua bookMark?
                  </p>
                </div>
              </AlertMessage>
            )}
          </div>
        )}
      </div>
      <div
        className={`${alertRemoveAllItems && "blur-[3px]"} 
           ${dataBookmark?.length >= 1 && "justify-center gap-1"}
           ${dataBookmark?.length < 1 && "justify-center gap-4 items-center"} w-full min-h-[3rem] flex-wrap items-center flex gap-2 justify-center `}
      >
        {dataBookmark?.length > 0 ? (
          dataBookmark?.map((data) => (
            <div
              key={Math.random(8237465)}
              className={`${
                opsiDarkmode && "border border-white"
              } w-1/6 h-12 bg-black opacity-90 rounded-md text-white flex items-center justify-evenly mt-2`}
            >
              <div className="w-1/4 grid place-content-center h-full ">
                <Icon
                  onClick={() => onRemoveBookmarkHandler(data.numberQuran)}
                  className="text-white text-2xl"
                  icon="octicon:x-12"
                />
              </div>
              <Link
                to={`/surah/${data.id}/${data.numberSurah}`}
                className="w-full flex justify-evenly items-center"
              >
                <h1 className="">{data?.id}</h1>
                {"|"}
                <h1>{data?.numberSurah}</h1>
              </Link>
            </div>
          ))
        ) : (
          <>
            <p className="tracking-wider">klik icon</p>
            <Icon className="text-2xl " icon="ic:sharp-bookmark" />
            <p className="tracking-wider">untuk menambahkan</p>
          </>
        )}
      </div>
    </div>
  );
};

export default BookMark;
