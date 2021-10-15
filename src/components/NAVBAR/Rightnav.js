import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonIcon from '@mui/icons-material/Person';
import styled from 'styled-components';
const Rightnav = ({open,mode,modechanger}) => {
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
            // ----------------//
            // RIGHT NAV LIST //
            //---------------//
        <Nav className="right-nav" open={open}>
            {
                logo.map((item,index) => {
                    return (
                        <div key={index} className="navigations">
                            <span className="right-logo" >{item.logo}</span>
                            <span className="right-text">{item.para}</span>
                            </div>
                    )
                })
            }
        </Nav>
    )
}
export default Rightnav

const Nav = styled.div`
background-color: blue;
flex-flow: column nowrap;
position: fixed;
right: 0;
top: 0;
height: 100vh;
width: 300px;
padding-top: 3.5rem;
display: flex;
transform: ${({open})=> open ? "translateX(0)":"translateX(300px)"};
transition: transform 0.3s ease-in-out;
.navigations{
    padding: 18px 10px;
    border: 2px solid red;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
span{
    color:white;
    font-size: 20px;
}
`;
