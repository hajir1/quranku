import { Icon } from "@iconify/react";
import { useContext, useEffect, useState } from "react";
import AlertMessage from "../../message/alertMessage/alert";
import style from "../../../styles/animation.module.scss";
import { Link } from "react-router-dom";
import { OptionContext } from "../../../context/opsi";
const BookMark = () => {
  const { dataBookmark, setDataBookmark, opsiSetting, opsiDarkmode, opsiHome } =
    useContext(OptionContext);
  const [alertRemoveAllItems, setAlertRemoveAllItems] = useState(false);
  const dataLokal = localStorage.getItem("bookMark");
  const data = JSON.parse(dataLokal);
  useEffect(() => {
    setDataBookmark(data?.data);
  }, []);
  const onRemoveBookmarkHandler = (id) => {
    const count = data?.data?.filter((item) => item.numberQuran === id).length;
    if (count > 1) {
      const indexToRemove = data?.data?.findIndex(
        (item) => item.numberQuran === id
      );
      if (indexToRemove >= 0) {
        data?.data?.splice(indexToRemove, 1);
        localStorage.setItem("bookMark", JSON.stringify({ data: data?.data }));
      }
    } else {
      const updatedDataBookmark = data?.data?.filter(
        (item) => item.numberQuran !== id
      );
      localStorage.setItem(
        "bookMark",
        JSON.stringify({ data: updatedDataBookmark })
      );
    }
    window.location.reload();
  };
  return (
    <div
      className={`${opsiSetting && "blur-[2px]"} ${opsiHome && "blur-[2px]"} ${
        opsiDarkmode && "bg-amber-500 text-white border border-white"
      } mt-20 mb-6 w-full min-h-[6rem] bg-amber-600 bg-opacity-50 p-3 rounded-xl flex-wrap 
      min-[1400px]:w-[80%]`}
    >
      <div
        className={`${
          opsiDarkmode && "border-b-white"
        } flex justify-start w-full border-b-[1px] h-1/3 border-b-black`}
      >
        <Icon className={`${alertRemoveAllItems && "blur-[3px]"} text-2xl`} icon="ic:sharp-bookmark" />
        <h1 className={`${alertRemoveAllItems && "blur-[3px]"} tracking-wider`}>Bookmark</h1>
        {dataBookmark?.length > 0 && (
          <div className={`w-full flex justify-end`}>
            <div className={`${style.tooltipmiddle}`}>
              <Icon
                onClick={() => setAlertRemoveAllItems(!alertRemoveAllItems)}
                className="text-2xl mb-3 cursor-pointer"
                icon="bi:trash"
              />
            </div>
            {alertRemoveAllItems && (
              <AlertMessage
                classContaint={`${opsiDarkmode && "border border-white"} ${
                  style.animatedTrash
                } absolute w-42 p-2 rounded-lg h-20  bg-black text-white z-20`}
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
           ${
             dataBookmark?.length < 1 && "justify-center gap-4 items-center"
           } w-full min-h-[3rem] max-h-[10rem] overflow-y-scroll flex-wrap items-center flex gap-2 justify-center  max-[1000px]:gap-0`}
      >
        {dataBookmark?.length > 0 ? (
          dataBookmark?.map((data) => (
            <div
              key={Math.random(8237465)}
              className={`${
                opsiDarkmode && "border border-white"
              } m-1 w-1/6 h-12 bg-black opacity-90 rounded-md text-white flex items-center justify-evenly max-[750px]:w-[47%] max-[1100px]:w-[30%] min-[400px]:m-1 min-[1000px]:h-16 min-[900px]:mt-1`}
            >
              <div className="w-1/4 grid place-content-center h-full ">
                <div className={`${style.tooltipCenter}`}>
                <Icon
                  onClick={() => onRemoveBookmarkHandler(data.numberQuran)}
                  className="text-white text-2xl cursor-pointer"
                  icon="octicon:x-12"
                />
                <p className={`${style.tooltipAlertcenter}`}>hapus bookMark</p>
                </div>
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
            <p className="tracking-wider ">klik icon</p>
            <Icon
              className="text-2xl max-[550px]:mx-2"
              icon="ic:sharp-bookmark"
            />
            <p className="tracking-wider">untuk menambahkan</p>
          </>
        )}
      </div>
    </div>
  );
};

export default BookMark;
