/** @format */

const ModalConfirm = ({
  onClose,
  onSave,
  text,
  header,
  titleButtom,
  icon,
  textCancel,
}) => {
  return (
    <>
      <div
        id="wrapper"
        className=" modal fixed inset-0 bg-black bg-opacity-25 blackdrop-blur-sm flex justify-center items-center z-[9999]">
        <div className="overflow-y-auto scrollbar cursor-default">
          <div className={`mx-auto min-w-[30em]`}>
            <div className="w-[600px] h-[250px] bg-white rounded-2xl min-w-[50%] overflow-hidden flex flex-col justify-between">
              <div className="w-full h-[70px] font-bold flex items-center pl-8 pt-4 gap-3">
                <img
                  src={icon}
                  loading="lazy"
                  className="text-2xl h-full"
                />

                <p className="text-3xl text-[#454D56]"> {header}</p>
              </div>

              <div className="h-[180px] flex flex-col justify-end items-center border-grey-300 gap-4">
                <div className="w-full h-[77px] min-w-[50%] flex items-start justify-start mt-5 pl-8">
                  <p className="text-[#454D56] text-[24px] font-semibold">
                    {text}
                  </p>
                </div>

                <div className="w-full h-[90px] bg-[#F4F4F8] flex justify-end items-center border-grey-300 gap-4 p-4">
                  <button
                    onClick={() => {
                      onClose()
                    }}
                    className="w-[143px] h-[48px] inline-flex justify-center items-center py-2 px-8 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-gray-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                    {textCancel}
                  </button>
                  <button
                    onClick={() => {
                      onSave()
                    }}
                    className="h-[48px] inline-flex justify-center items-center py-2 px-8 bg-[#0072D6] hover:bg-[#0066C0] border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-text-red hover:bg-[#0074bd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                    {titleButtom}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalConfirm
