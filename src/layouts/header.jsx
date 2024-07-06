/** @format */

import React, {useEffect, useRef, useState} from "react"
import useAuth from "../hook/useAuth"
import {
  iconLanguage,
  iconLogo,
  defaultProfile,
  iconDown,
  iconLogout,
  iconThailand,
  iconEng,
  iconLogout2,
} from "../images"
import ModalLang from "../components/modalLang"
import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"
import ModalConfirm from "../components/modalConfirm"

function Header() {
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
  const {
    logout,
    authenticateUser,
    selecteLanguage,
    setSelecteLanguage,
    viteApiTest,
  } = useAuth()
  // console.log("authenticateUser", authenticateUser)

  // console.log("selecteLanguage", selecteLanguage)
  const [openModal, setOpenModal] = useState(false)
  const [iconRotate, setIconRotate] = useState(false)
  // console.log("iconRotate", iconRotate)
  const [confirmLogout, setConfirmLogout] = useState(false)
  const languageRef = useRef()
  const {t, i18n} = useTranslation()

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

  const handleClickSelecteLanguage = (name) => {
    // console.log("name", name)
    i18n.changeLanguage(name)
  }

  return (
    <>
      <header className="h-[98px] flex justify-between items-center p-4 bg-[#00216B] text-white">
        <div className="h-full text-xl font-bold flex items-center gap-20">
          <Link
            to="/"
            className="h-full">
            <img
              src={iconLogo}
              className="h-full cursor-pointer"
              alt="iconLogo"
            />
          </Link>

          <p className="text-2xl h-full flex items-end">
            {t("Welcome to Your Monitoring")}
          </p>
        </div>

        <div className="flex items-center gap-5 mr-10">
          {/* profile user */}
          <div className="flex items-center gap-2">
            <img
              src={
                authenticateUser?.avatar
                  ? viteApiTest + authenticateUser.avatar
                  : defaultProfile
              }
              className="w-12 h-12 rounded-full cursor-pointer"
            />

            <div className="w-3/4 lg:w-full flex flex-col items-cente break-words">
              <span className="w-full font-bold text-base">
                {authenticateUser?.name}
              </span>
              <span className="w-full text-xs text-gray-400 font-bold">
                ID: {authenticateUser?.id}
              </span>
            </div>
          </div>

          {/* selecteLanguage */}
          <div
            ref={languageRef}
            className="relative flex items-center justify-center ">
            <img
              src={iconLanguage}
              className="w-[35px] h-[35px]"
            />
            <p className="text-[17px]">{selecteLanguage}</p>
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
                selecteLanguage={selecteLanguage}
                toggleLanguageModel={toggleLanguageModel}
                handleClickSelecteLanguage={handleClickSelecteLanguage}
              />
            )}
          </div>

          {/* logout */}
          <button
            onClick={() => {
              setConfirmLogout(!confirmLogout)
            }}
            className="w-[25px] h-[25px] ">
            <img
              src={iconLogout}
              className="hover:text-red-600"
            />
          </button>
        </div>
      </header>

      {confirmLogout && (
        <ModalConfirm
          icon={iconLogout2}
          header={t("logOutSpan1")}
          text={t("logOutSpan2")}
          textCancel={t("logOutSpan3")}
          titleButtom={t("logOutSpan4")}
          onClose={() => setConfirmLogout(false)}
          onSave={() => logout()}
        />
      )}
    </>
  )
}

export default Header
