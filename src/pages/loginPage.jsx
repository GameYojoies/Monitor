/** @format */
import bgLogin from "../images/login/loginBg.png"
import iconEmail from "../images/login/iconEmail.png"
import iconPassword from "../images/login/iconPassword.png"
import InputLogin from "../components/inputLogin"
import {Link, useNavigate} from "react-router-dom"
import {useState} from "react"
import useAuth from "../hook/useAuth"
import {toast} from "react-toastify"

export default function LoginPage() {
  const [login, setLogin] = useState({
    name: "",
    password: "",
  })
  // console.log("login", login)
  const navigate = useNavigate()

  const handleChangeInput = (e) => {
    setLogin({...login, [e.target.name]: e.target.value})
  }

  const {userLogin, authenticateUser} = useAuth()
  // console.log("authenticateUser", authenticateUser)

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault()

      const name = login.name
      const password = login.password

      await userLogin(name, password)
      toast.success("login success")

      setLogin({
        name: "",
        password: "",
      })
      navigate("/")
    } catch (err) {
      console.log("err:", err)
      toast.error(err.response?.data.message)
    }
  }

  return (
    <div className="w-full h-[950px]">
      <div className="relative z-0 w-full h-full">
        <img
          src={bgLogin}
          className="w-full h-full "
        />
      </div>

      <div className="absolute z-1 w-full h-full top-0 flex items-center justify-center">
        <form
          className="bg-white w-[500px] flex flex-col items-center rounded-2xl gap-4"
          action="#"
          onSubmit={handleSubmitForm}>
          <div>
            <p className="text-[#001647] font-bold text-4xl mt-8">
              <span className="text-[#F4A344]">SOLAR</span> MONITOR
            </p>
          </div>

          <InputLogin
            src={iconEmail}
            name="name"
            placeholder="Usernam, or email"
            onChange={handleChangeInput}
            value={login.name}
          />
          <InputLogin
            src={iconPassword}
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={handleChangeInput}
            value={login.password}
          />

          <div className="w-full flex flex-col items-center justify-center gap-5 mt-5 font-bold mb-10">
            <button className="w-5/6 bg-[#0072D6] text-white h-[50px] rounded-xl">
              Login now
            </button>

            <Link
              to="/"
              className="w-full flex items-center justify-center">
              <button className="w-3/5 border-[1px] border-[#0072D6] text-[#0072D6] h-[50px] rounded-xl">
                Visit Monitor Demo
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
