/** @format */

export default function ModalLang({
  data,
  setSelecteLanguage,
  setOpenModal,
  selecteLanguage,
  handleClickSelecteLanguage,
}) {
  return (
    <div className="w-[183px] h-[105px] flex flex-col items-center justify-center bg-[#001647] z-10 absolute -right-10 top-12 rounded-xl">
      {data?.map((el, key) => (
        <div
          key={key}
          className={`w-full flex items-center justify-center gap-5 cursor-pointer p-2 ${
            selecteLanguage === el?.abbreviation
              ? "bg-gray-800"
              : "hover:bg-gray-500 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
          }`}
          onClick={() => {
            setSelecteLanguage(el?.abbreviation)
            setOpenModal(false)
            handleClickSelecteLanguage(el?.key)
          }}>
          <img
            src={el.icon}
            className="w-8 h-6"
          />

          <div className="w-20 text-white">
            <p>{el.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
