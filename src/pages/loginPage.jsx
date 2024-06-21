/** @format */
import bgLogin from "../images/login/loginBg.png"
import iconEmail from "../images/login/iconEmail.png"
import iconPassword from "../images/login/iconPassword.png"
import InputLogin from "../components/inputLogin"

export default function LoginPage() {
  return (
    <div className="w-full h-[945px]">
      <div className="relative z-0 w-full h-full">
        <img
          src={bgLogin}
          className="w-full h-full"
        />
      </div>

      <div className="absolute z-1 w-full h-full top-0 flex items-center justify-center">
        <form
          className="bg-white w-[500px] flex flex-col items-center rounded-2xl gap-4"
          action="#">
          <div>
            <p className="text-[#001647] font-bold text-4xl mt-8">
              <span className="text-[#F4A344]">SOLAR</span> MONITOR
            </p>
          </div>

          <InputLogin
            src={iconEmail}
            name="username"
            placeholder="Usernam, or email"
          />

          <InputLogin
            src={iconPassword}
            name="password"
            placeholder="Enter your password"
          />

          <button className="bg-[#0072D6] text-white w-5/6">Login now</button>
        </form>
      </div>
    </div>
  )
}
