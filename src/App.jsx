/** @format */

import {Slide, ToastContainer} from "react-toastify"
import Router from "./routes/router"

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        autoClose="1000"
        theme="light"
        position="bottom-center"
        transition={Slide}
      />
    </>
  )
}

export default App
