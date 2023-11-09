import sekeleton from "../../../styles/sekeleton.module.scss"
const BookMarkLoading = () => {
  return (
    <div className={`${sekeleton.sekeleton} mt-20 mb-6 w-full min-h-[6rem] bg-opacity-50 p-3 rounded-xl flex-wrap 
    min-[1400px]:w-[80%]`}></div>
  )
}

export default BookMarkLoading