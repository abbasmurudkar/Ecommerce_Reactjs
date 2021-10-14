import React from 'react'
import { useState, useEffect, useReducer } from 'react'
import Alert from './ALERT/Alert'
import Nav from './NAVBAR/Nav'
import '../Styles/global.scss'
import '../components/ALERT/alert.scss'
import MenuBar from './MENUBAR/MenuBar'
const MainPageLayout = () => {
  ////////ALERT TIMEOUT /////////
  useEffect(() => {
    const showtime = setTimeout(() => {
      dispatch({ type: "FETCH_SUCCESS", mode: "light" })
    }, 7000);
    return () => {
      clearTimeout(showtime)
    }
  }, [])
  ///////STATES ARE UPDATING OVER HERE///////
  const reducer = (prevstate, action) => {
    switch (action.type) {
      case 'FETCH_SUCCESS': {
        return { ...prevstate, show: false, mode: action.mode }
      }
      case 'Failed': {
        return { ...prevstate, show: false, mode: action.mode }
      }
      default: return prevstate
    }
  }
  ///////INITIAL STATE /////////
  const initialState = {
    show: true,
    mode: 'light'
  }
  const [{mode,show}, dispatch] = useReducer(reducer, initialState)
  console.log(show,mode)

  ////// MODESCHANGER//////
  const modeschanger = () => {
    if (mode === "light") {
      dispatch({ type: 'FETCH_SUCCESS', mode: 'dark' })
      document.body.style.background = "linear-gradient(450deg, rgb(12, 12, 12) 0%, rgb(34 77 112) 74%)"
    }
    else {
      dispatch({ type: 'Failed', mode: 'light' })
      document.body.style.background = "white";
    }
  }

  return (
    <>
      {show !== false && <Alert mode={mode} message={"Extra 20% Off on Orders Above Rs.10,000. Use Code"} message1={"Mega Dashami Deals | Up to 40% Off"} />}
      <Nav placeholder={"Search"} modechanger={modeschanger} mode={mode} />
      <MenuBar mode={mode} />
    </>
  )
}
export default MainPageLayout
