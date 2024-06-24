/** @format */

export default function InputLogin({
  src,
  name,
  placeholder,
  onChange,
  value,
  type,
  error,
  iconClose,
  setOpenPasswrod,
  openPassword,
  iconeyeopen,
}) {
  return (
    <div className="w-full flex flex-col items-center gap-1">
      <div
        className={`border-[1px] ${
          error ? "border-red-600" : "border-[#0072D6]"
        } w-3/4 h-[50px] rounded-xl flex items-center gap-2 overflow-hidden`}>
        <div className="bg-[#0072D6] w-1/6 h-[50px] flex items-center justify-center rounded-xl">
          <img
            src={src}
            className="w-[25px] h-[25px]"
          />
        </div>

        <input
          id={name}
          type={openPassword ? "text" : type ? type : "text"}
          name={name}
          className="w-full h-full focus:outline-none"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />

        {iconClose && (
          <button
            type="button"
            onClick={() => setOpenPasswrod(!openPassword)}
            className="mr-2">
            <img
              src={openPassword === false ? iconClose : iconeyeopen}
              className="w-[20px]"
            />
          </button>
        )}
      </div>

      {error && (
        <div className="text-red-600 text-[12px] w-full text-center">
          {error}
        </div>
      )}
    </div>
  )
}
