/** @format */

export default function UserInfoSection({title, header, src, t}) {
  const formattedTitle =
    title.match(/^\d+$/) && title.length === 10 && title.startsWith("0")
      ? title.slice(1)
      : title

  return (
    <>
      <p className="text-[#001647] text-[22px] font-bold">{t(header)}</p>

      <div
        className={`w-full border-[1px] border-[#D9D9D9] rounded-xl p-2 ${
          src ? "flex items-center" : ""
        }`}>
        {src && (
          <div className="flex items-center border-r-2 pr-2 gap-2 pl-2">
            <img
              src={src}
              className="rounded-full w-7 h-7"
            />
            <p className="text-xl text-[#A3A3A3]">+66</p>
          </div>
        )}

        <p className="text-xl text-[#A3A3A3] pl-2">{formattedTitle}</p>
      </div>
    </>
  )
}
