import React from 'react'
import styled from 'styled-components'
const MenuBar = ({ mode }) => {
    const options = {
        margin: 30,
        responsiveClass: true,
        nav: true,
        autoplay: false,
        navText: ["Prev", "Next"],
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        },
      };
    return (
        <Menu className={`bg-${mode === "light" ? "" : "dark"}`}>
            <div className="slide__container">
            </div>
        </Menu>
    )
}

export default MenuBar

const Menu = styled.div`
border: 2px solid transparent;
border-image: linear-gradient(101.19289390428344deg, rgba(73, 146, 242,1) 8.604166666666666%,rgba(73, 146, 242,1) 38.28125%,rgba(0, 237, 225,1) 71.25578703703705%,rgba(0, 237, 225,1) 80.5486111111111%);
border-image-slice:1;
width: 100%;
height: 100px;
border-right: none;
border-left: none;
display:flex;
flex-flow: row nowrap;
`;