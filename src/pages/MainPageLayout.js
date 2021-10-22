import React, { useState } from 'react'
import Nav from '../components/NAVBAR/Nav'
import '../Styles/global.scss'
import MenuBar from '../components/MENUBAR/MenuBar'
import Carousel from '../components/Carousel/Carousel'
const MainPageLayout = () => {
 
const [mode, setmode] = useState("light")
  //-----------------//
  // CHANGING MODES //
  //---------------//
  const modeschanger = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.background = "linear-gradient(450deg, rgb(12, 12, 12) 0%, rgb(34 77 112) 74%)"
    }
    else {
      setmode("light")
      document.body.style.background = "white";
    }
  }

  return (
    <>
      {/* NAVBAR */}
      <Nav placeholder={"Search"} modechanger={modeschanger} mode={mode} />
      {/* MENUBAR */}
      <MenuBar mode={mode} />
      {/* CAROUSEL */}
      <Carousel/>
    </>
  )
}
export default MainPageLayout
