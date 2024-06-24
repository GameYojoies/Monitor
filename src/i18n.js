/** @format */

import i18n from "i18next"
import {initReactI18next} from "react-i18next"

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  th: {
    translation: {
      "Username or email": "กรอกชื่อผู้ใช้ หรือ อีเมล",
      "Enter your password": "กรอกรหัสผ่าน",
      "Login now": "ลงชื่อเข้าใช้",
      "Visit Monitor Demo": "เดโมมอนิเตอร์",
      "Welcome to Your Monitoring":
        "ยินดีต้อนรับสู่การเฝ้าติดตามมอนิเตอร์ของคุณ",
      Monitor: "มอนิเตอร์",
      Report: "รายงานข้อมูล",
      Notification: "การแจ้งเตือน",
      User: "ผู้ใช้",
      "User Information": "ข้อมูลผู้ใช้",
      Username: "ชื่อผู้ใช้",
      "Birth Date": "วันเกิด",
      "Gender":"เพศ",
      "Phone Number":"เบอร์โทรศัพท์",
      "E-mail":"อีเมล",
    },
  },
  en: {
    translation: {
      "Username or email": "Username or email",
      "Enter your password": "Enter your password",
      "Login now": "Login now",
      "Visit Monitor Demo": "Visit Monitor Demo",
      "Welcome to Your Monitoring": "Welcome to Your Monitoring",
      Monitor: "Monitor",
      Report: "Report",
      Notification: "Notification",
      User: "User",
      "User Information": "User Information",
      Username: "Username",
      "Birth Date": "Birth Date",
      "Gender":"Gender",
      "Phone Number":"Phone Number",
      "E-mail":"E-mail",
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
