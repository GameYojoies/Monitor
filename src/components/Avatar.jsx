/** @format */

export default function Avatar({src, size}) {
  return (
    <>
      <img
        src={src}
        className="rounded-full cursor-pointer"
        alt="user"
        width={size}
        height={size}
      />
    </>
  )
}
