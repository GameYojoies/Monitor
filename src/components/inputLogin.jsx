/** @format */

export default function InputLogin({
  src,
  name,
  placeholder,
  onChange,
  value,
  type,
  error,
}) {
  return (
    <>
      <div className="border-[1px] border-[#0072D6] w-3/4 h-[50px] rounded-xl flex items-center gap-2 overflow-hidden">
        <div className="bg-[#0072D6] w-1/6 h-[50px] flex items-center justify-center rounded-xl">
          <img
            src={src}
            className="w-[25px] h-[25px]"
          />
        </div>

        <input
          id={name}
          type={type ? type : "text"}
          name={name}
          className="w-full h-full focus:outline-none"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>

      {error && (
        <div className="text-red-600 text-[12px] border-2">{error}</div>
      )}
    </>
  )
}
