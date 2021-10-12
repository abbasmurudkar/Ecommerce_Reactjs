import React from 'react'
import { useState, useEffect } from 'react'
import Alert from './ALERT/Alert'
import Nav from './NAVBAR/Nav'
import '../Styles/global.scss'
import '../components/ALERT/alert.scss'
const MainPageLayout = () => {
////////ALERT TIMEOUT /////////
    const [showtime, setshowtime] = useState(true)
    useEffect(() => {
      const showtime = setTimeout(() => {
        setshowtime(false)
      }, 7000);
      return () => {
        clearTimeout(showtime)
      }
    },[])
///////MODES/////////
const [mode,setmode] = useState('light')
const modeschanger = ()=>{
  if(mode === "light")
  {
    setmode("dark")
    document.body.style.background="linear-gradient(114.67196031231879deg, rgba(1, 96, 186,1) 5.736111111111111%,rgba(0, 0, 0,1) 96.29166666666666%)";
    console.log(mode)
  }
  else
  {
    setmode("light")
    document.body.style.background="white";
  }
}
    return (
        <div className="Mainpage-layout">
            {showtime !== false && <Alert mode={mode} message={"Extra 20% Off on Orders Above Rs.10,000. Use Code"} message1={"Mega Dashami Deals | Up to 40% Off"}/>}
            <Nav placeholder={"Search"} modechanger={modeschanger} mode={mode}/>
        </div>
    )
}

export default MainPageLayout
