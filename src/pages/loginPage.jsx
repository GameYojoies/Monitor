/** @format */
import bgLogin from "../images/login/loginBg.png"
import iconEmail from "../images/login/iconEmail.png"
import iconPassword from "../images/login/iconPassword.png"
import iconeyeclose from "../images/login/icon-eye-close.png"
import iconeyeopen from "../images/login/icon-eye-open.png"
import InputLogin from "../components/inputLogin"
import {Link, useNavigate} from "react-router-dom"
import {useEffect, useRef, useState} from "react"
import useAuth from "../hook/useAuth"
import {toast} from "react-toastify"
import iconThailand from "../images/header/TH - Thailand.png"
import iconEng from "../images/header/US - United States.png"
import iconLogo from "../images/header/logoSolar.png"
import iconLanguage from "../images/header/language.png"
import iconDown from "../images/header/iconDown.png"
import ModalLang from "../components/modalLang"

export default function LoginPage() {
  const languageData = [
    {
      id: 1,
      title: "ภาษาไทย",
      icon: iconThailand,
      key: "th",
      abbreviation: "TH",
    },
    {
      id: 2,
      title: "English",
      icon: iconEng,
      key: "en",
      abbreviation: "EN",
    },
  ]

  const navigate = useNavigate()

  const [login, setLogin] = useState({
    name: "",
    password: "",
  })
  // console.log("login", login)

  const [openModal, setOpenModal] = useState(false)
  const [iconRotate, setIconRotate] = useState(false)
  const [openPassword, setOpenPasswrod] = useState(false)
  // console.log("openPassword", openPassword)

  const languageRef = useRef()

  const handleChangeInput = (e) => {
    setLogin({...login, [e.target.name]: e.target.value})
  }

  const {
    userLogin,
    authenticateUser,
    userLoginCode,
    selecteLanguage,
    setSelecteLanguage,
  } = useAuth()

  console.log("userLoginCode", userLoginCode)

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault()

      const name = login?.name
      const password = login?.password

      await userLogin(name, password)

      if (userLoginCode === 4010) {
        toast.error("Mobile or password not correct")
      } else {
        navigate("/")

        toast.success("login Success")

        setLogin({
          name: "",
          password: "",
        })
      }

      // toast.success("login Success")
      // navigate("/")
    } catch (err) {
      console.log("err:", err)
      toast.error(err)
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setOpenModal(false)
        setIconRotate(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [languageRef])

  const toggleLanguageModel = () => {
    setIconRotate(!iconRotate)
    setOpenModal(!openModal)
  }

  return (
    <div className="w-full h-[945px]">
      <div className="relative z-0 w-full h-full">
        <img
          src={bgLogin}
          className="w-full h-full "
        />
      </div>

      <div className="absolute z-1 w-full h-full top-0 flex flex-col items-center justify-start gap-10">
        {/* selecteLanguage */}
        <div
          ref={languageRef}
          className="relative flex items-center justify-end w-4/5 mt-5">
          <img
            src={iconLanguage}
            className="w-[35px] h-[35px]"
          />

          <p className="text-[17px] text-white">{selecteLanguage}</p>

          <button
            onClick={toggleLanguageModel}
            className="mb-1 ml-3">
            <img
              src={iconDown}
              className={`transition-transform duration-300 transform x] ${
                iconRotate
                  ? "rotate-180 w-[14px] h-[14px]"
                  : "w-[14px] h-[14px]"
              }`}
            />
          </button>

          {openModal && (
            <ModalLang
              data={languageData}
              setSelecteLanguage={setSelecteLanguage}
              setOpenModal={setOpenModal}
              selecteLanguage={selecteLanguage}
            />
          )}
        </div>

        <div className="w-full pl-32">
          <img
            src={iconLogo}
            className="w-64"
          />
        </div>

        <form
          onSubmit={handleSubmitForm}
          className="bg-white w-[500px] flex flex-col items-center rounded-2xl gap-4">
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
            iconClose={iconeyeclose}
            iconeyeopen={iconeyeopen}
            setOpenPasswrod={setOpenPasswrod}
            openPassword={openPassword}
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
