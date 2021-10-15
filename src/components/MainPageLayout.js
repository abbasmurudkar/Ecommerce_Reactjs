import React from 'react'
import {  useEffect, useReducer } from 'react'
import Alert from './ALERT/Alert'
import Nav from './NAVBAR/Nav'
import '../Styles/global.scss'
import '../components/ALERT/alert.scss'
import MenuBar from './MENUBAR/MenuBar'
const MainPageLayout = () => {
  // -----------------//
  //  ALERT TIMEOUT  //
  // ----------------//
  useEffect(() => {
    const showtime = setTimeout(() => {
      dispatch({ type: "Success", mode: "light" })
    }, 3000);
    return () => {
      clearTimeout(showtime)
    }
  }, [])
  // ----------------//
  // STATE UPDATING //
  //---------------//
  const reducer = (prevstate, action) => {
    switch (action.type) {
      case 'Success': {
        return { ...prevstate, show: false, mode: action.mode }
      }
      case 'Failed': {
        return { ...prevstate, show: false, mode: action.mode }
      }
      default: return prevstate
    }
  }
  // -----------------//
  //  INITIAL STATE  //
  //----------------//
  const initialState = {
    show: true,
    mode: 'light'
  }
  const [{mode,show}, dispatch] = useReducer(reducer, initialState)
  console.log(show,mode)

  //-----------------//
  // CHANGING MODES //
  //---------------//
  const modeschanger = () => {
    if (mode === "light") {
      dispatch({ type: 'Success', mode: 'dark' })
      document.body.style.background = "linear-gradient(450deg, rgb(12, 12, 12) 0%, rgb(34 77 112) 74%)"
    }
    else {
      dispatch({ type: 'Failed', mode: 'light' })
      document.body.style.background = "white";
    }
  }

  return (
    <>
    {/* ALERT */}

      {show !== false && <Alert mode={mode} message={"Extra 20% Off on Orders Above Rs.10,000. Use Code"} message1={"Mega Dashami Deals | Up to 40% Off"} />}
      {/* NAVBAR */}

      <Nav placeholder={"Search"} modechanger={modeschanger} mode={mode} />
      {/* MENUBAR */}

      <MenuBar mode={mode} />
    </>
  )
}
export default MainPageLayout
