/** @format */

export default function UserInfoSection({title, header}) {
  return (
    <>
      <p className="text-[#001647] text-[22px] font-bold">{header}</p>
      <div className="w-full border-2 border-[#D9D9D9] rounded-xl py-1 px-2">
        <p className="text-xl text-[#A3A3A3]">{title}</p>
      </div>
    </>
  )
}
