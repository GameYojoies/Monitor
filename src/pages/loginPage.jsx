/** @format */
import {
  iconPassword,
  iconeyeclose,
  iconeyeopen,
  iconThailand,
  iconEng,
  iconLogo,
  iconLanguage,
  iconDown,
  bgLogin,
  iconEmail,
  bgLoginHand
} from "../images"
import InputLogin from "../components/inputLogin"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useRef, useState } from "react"
import useAuth from "../hook/useAuth"
import { toast } from "react-toastify"
import ModalLang from "../components/modalLang"
import { useTranslation } from "react-i18next"
import validateLogin from "../validators/validate-login"

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

  const [login, setLogin] = useState({
    name: "",
    password: "",
  })
  // console.log("login", login)

  const { userLogin, selecteLanguage, setSelecteLanguage, languageMain } =
    useAuth()

  const navigate = useNavigate()
  const { t, i18n } = useTranslation()

  const [error, setError] = useState({})
  // console.log("error", error)
  const [openModal, setOpenModal] = useState(false)
  const [iconRotate, setIconRotate] = useState(false)
  const [openPassword, setOpenPasswrod] = useState(false)
  // console.log("openPassword", openPassword)
  const [focusedInput, setFocusedInput] = useState(null)

  const languageRef = useRef()

  const handleChangeInput = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const handleClickSelecteLanguage = (name) => {
    // console.log("name", name)
    i18n.changeLanguage(name)
  }

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault()
      const result = validateLogin(login, t)

      if (result) {
        setError(result)
      } else {
        setError({})
      }

      const name = login?.name
      const password = login?.password

      await userLogin(name, password)

      toast.success("Login Success")
      setLogin({
        name: "",
        password: "",
      })
      navigate("/")
    } catch (err) {
      toast.error(err.message)
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
    <div className="w-full ">
      <div className="relative z-0 w-[100vw] h-[100vh]">
        <img
          src={bgLogin}
          className="w-full h-full "
        />

      </div>

      <img src={bgLoginHand} alt="" className="absolute h-[75%] z-1 bottom-0 left-[65%]" />


      <div className="absolute z-1 w-full h-full top-0 flex flex-col items-center justify-start gap-2">
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
              className={`transition-transform duration-300 transform x] ${iconRotate
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
              handleClickSelecteLanguage={handleClickSelecteLanguage}
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
          className="relative bg-transparent w-[500px] flex flex-col items-center rounded-2xl gap-4">
          <div className="absolute inset-0 bg-white opacity-90 rounded-2xl pointer-events-none"></div>
          <div className="w-full relative z-10 flex flex-col items-center gap-4">
            <div>
              <p className="text-[#001647] font-bold text-4xl mt-8">
                <span className="text-[#4EC4EF]">SOLAR</span> MONITOR
              </p>
            </div>

            <InputLogin
              src={iconEmail}
              name="name"
              placeholder={t("Username or email")}
              onChange={handleChangeInput}
              value={login.name}
              error={error.name}
              setFocusedInput={setFocusedInput}
              focusedInput={focusedInput}
            />

            <InputLogin
              src={iconPassword}
              name="password"
              type="password"
              placeholder={t("Enter your password")}
              onChange={handleChangeInput}
              value={login.password}
              iconClose={iconeyeclose}
              iconeyeopen={iconeyeopen}
              setOpenPasswrod={setOpenPasswrod}
              openPassword={openPassword}
              error={error.password}
              setFocusedInput={setFocusedInput}
              focusedInput={focusedInput}
            />

            <div className="w-full flex flex-col items-center justify-center gap-5 mt-5 font-bold mb-10">
              <button className="w-5/6 bg-[#0072D6] text-white h-[50px] rounded-xl">
                {t("Login now")}
              </button>

              <Link
                to="/"
                className="w-full flex items-center justify-center">
                <button className="w-3/5 border-[1px] border-[#0072D6] text-[#0072D6] h-[50px] rounded-xl">
                  {t("Visit Monitor Demo")}
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>

    </div>
  )
}
