import React, { useState } from 'react'
import './Nav.scss'
import '../../Styles/global.scss'
import './Navmedia.scss'
import SearchIcon from '@mui/icons-material/Search';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import OpacityIcon from '@mui/icons-material/Opacity';
import InvertColorsOffIcon from '@mui/icons-material/InvertColorsOff';
import PersonIcon from '@mui/icons-material/Person';
import Rightnav from './Rightnav';
import styled from 'styled-components';
function Nav(props) {
    const [text, settext] = useState('')
    const [openhamburger, setopenhamburger] = useState(false)
    const Inputvariable = (ev) => {
        settext(ev.target.value)
        console.log(text)
    }
    const logo = [
        {
            logo: <LocalShippingOutlinedIcon />,
            para: "Track"
        },
        {
            logo: <FavoriteBorderOutlinedIcon />,
            para: "Wishlist"
        },
        {
            logo: <ShoppingCartOutlinedIcon />,
            para: "Cart"
        },
        {
            logo: <PersonIcon />,
            para: "Profile"
        },
    ]
    return (

        //****NAVBAR STARTS *****/ //
        <div className={` navbar navbar-${props.mode} bg-${props.mode} `}>
            <div className="container">
                {/* ---------------------- */}
                {/*      NAVBAR TITLE      */}
                {/* ---------------------- */}

                <div className=" Navbar-logo">
                    <h1 className={props.mode === "light" ? "red" : "neon"}>SELLFURNITURE</h1>
                </div>

                {/* -------------------------- */}
                {/*       NAVBAR SEARCHBAR     */}
                {/* ---------------------- ----*/}

                <div className="Navbar-searchbar">
                    <input type="text" className={`text-${props.mode === 'light' ? 'secondary' : 'info'} bg-${props.mode === 'light' ? '' : 'dark'} Navbar-Input`} onChange={Inputvariable} placeholder={props.placeholder} value={text}></input>
                    <button type="button" className={`Navbar-button ${props.mode === "light" ? "" : "logo-neon transparent"}`}>
                        <SearchIcon style={{ fontSize: "26px" }} />
                    </button>
                </div>
                {/* -------------------------- */}
                {/*     NAVBAR NAVIGATION      */}
                {/* -------------------------- */}

                <div className="Navbar-nav">
                    {logo.map((item, index) => {
                        return (
                            <div key={index} className="nav-box1">
                                <span className={`nav-logo ${props.mode === "light" ? "logo-red" : "logo-neon"}`} >{item.logo}</span>
                                <span className={`nav-text ${props.mode === "light" ? "red" : "neon"}`}>{item.para}</span>
                            </div>)})}
                    <div className={`nav-box1`} onClick={props.modechanger}>
                        <span className={`nav-logo ${props.mode=== "light" ? "logo-red" : "logo-neon"}`} >
                            {props.mode === "light" ? <OpacityIcon /> : <InvertColorsOffIcon />}
                        </span>
                        <span className={`nav-text ${props.mode === "light" ? "red" : "neon"}`}>modes</span>
                    </div>

                    {/* -------------------------- */}            
                    {/*     NAVBAR HAMBURGER       */}
                    {/* -------------------------- */}

                    <div className="right-nav">
                        <div className="hamburger">
                            <Hamburger onClick={() => setopenhamburger(!openhamburger)}>
                                <div />
                                <div />
                                <div />
                            </Hamburger>
                            <Rightnav open={openhamburger} mode={props.mode} modechanger={props.modechanger}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
const Hamburger = styled.div`
width:2rem;
height:2rem;
position: fixed;
right: 20px;
top: 15px;
display: flex;
justify-content: space-around;
flex-flow: column nowrap;
z-index: 1;
div{
    width: 2rem;
    height:0.25rem;
    background: ${(openhamburger)=>openhamburger?"#ccc":"#333"};
    border-radius: 10px;
    transform: origin 1px;
    transition: all 0.5s linear;

    &:nth-child(1)
    {
        transform: ${({openhamburger}) => openhamburger?"rotate(45deg)":"rotate(0deg)"};
    }
    &:nth-child(2)
    {
        transform: ${(openhamburger) => openhamburger === "false" ? "translateX(100%)" : "translateX(0%)"};
    }
    &:nth-child(3)
    {
        transform: ${({openhamburger}) => openhamburger ? "rotate(-45deg)" : "rotate(0)"};
    }
}
`;