import React from 'react'
import styled from 'styled-components'
const MenuBar = ({ mode }) => {
const LISTITEMS_INFO = [
        {
        list_head: "Sofa",
        list1:"Sofas",
        list2:"Seater Sofas",
        }

]
    return (
        <>
            <Menu className={`bg-${mode === "light" ? "" : "dark"}`}>
                <div className="slide_container">
                    <div className="name">
                        <h5>Furniture</h5>
                        <MENULIST className="list">
                            <div className="box1">
                                <h6>Sofa</h6>
                                <div className="menu-item">
                                    <ul>
                                        <li>Sofas</li>
                                        <li style={{color:"#969696"}}>1)Seater Sofas</li>
                                        <li style={{color:"#969696"}}>2)Seater Sofas</li>
                                        <li style={{color:"#969696"}}>3)Seater Sofas</li>
                                        <li>Sofa set</li>
                                        <li>Sectional sofas</li>
                                        <li>SofaCum beds</li>
                                        <li>Recliners</li>
                                        <li>Futons</li>
                                        <li>Sofa spa</li>


                                    </ul>
                                </div>
                            </div>
                            <div className="box1" style={{ background: "#f5f5f5" }}>
                                <h6>Seating</h6>
                                <div className="menu-item" >
                                    <ul>
                                        <li>Settees</li>
                                        <li>Benches</li>
                                        <li>Chaise Loungers</li>
                                        <li>Recamiers</li>
                                        <li>Ottomans</li>
                                        <li>Pouffes</li>
                                        <li>Foot Stools</li>
                                        <li>Seating Stools</li>
                                        <li>Bean Bags</li>
                                        <li>Bar Stools</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="box1">
                                <h6>Tables</h6>
                                <div className="menu-item">
                                    <ul>
                                        <li>Coffee Tables</li>
                                        <li>Coffee Table Sets</li>
                                        <li>End Tables</li>
                                        <li>Nest of Tables</li>
                                        <li>Console Tables</li>
                                        <li>Portable Tables</li>
                                        <li>Study Tables</li>
                                        <li>Dressing Tables</li>
                                        <li>Bedside Tables</li>
                                        <li>Office Tables</li>
                                        <li>Patio Tables & Sets</li>
                                        <li>Patio Sets</li>
                                        <li>Patio Tables</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="box1" style={{ background: "#f5f5f5" }}>
                                <h6>Cabinetary</h6>
                                <div className="menu-item" >
                                    <ul>
                                        <li>Shoe Racks</li>
                                        <li>Entertainment Units</li>
                                        <li>Cabinet & Sideboards</li>
                                        <li>Book Shelves</li>
                                        <li>Book Cases</li>
                                        <li>Trunks</li>
                                        <li>Plastic Cabinets</li>
                                        <li>Bar Cabinets</li>
                                        <li>Bar Trolleys</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="box1">
                                <h6>Chairs</h6>
                                <div className="menu-item" >
                                    <ul>
                                        <li>Arm Chairs</li>
                                        <li>Rocking Chairs</li>
                                        <li>Lounge Chairs</li>
                                        <li>Cafe Chairs</li>
                                        <li>Iconic Chairs</li>
                                        <li>Slipper Chairs</li>
                                        <li>Barrel Chairs</li>
                                        <li>Cantilever Chairs</li>
                                        <li>Folding Chairs</li>
                                        <li>Plastic Chairs</li>
                                        <li>Wing Chairs</li>
                                        <li>Office Chairs</li>
                                        <li>Patio Chairs</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="box1" style={{ background: "#f5f5f5" }}>
                                <h6>Decor</h6>
                                <div className="menu-item" >
                                    <ul>
                                        <li>Dining Sets</li>
                                        <li>Dining Chairs</li>
                                        <li>Dining Tables</li>
                                        <li>Bar Cabinets</li>
                                        <li>Bar Trolleys</li>
                                        <li>Wine Racks</li>
                                        <li>Bar Stools</li>
                                        <li>Bar Table Sets</li>
                                        <li>Modular Kitchens</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="box1">
                                <h6>Lightning</h6>
                                <div className="menu-item">
                                    <ul>
                                        <li>Beds</li>
                                        <li>Single Beds</li>
                                        <li>Queen Size Beds</li>
                                        <li>King Size Beds</li>
                                        <li>Upholstered Beds</li>
                                        <li>Poster Beds</li>
                                        <li>Bunk Beds</li>
                                        <li>Folding Beds</li>
                                        <li>Mattresses</li>
                                    </ul>
                                </div>
                            </div>
                        </MENULIST>
                    </div>
                    <h5>Furniture</h5>
                    <h5>Furniture</h5>
                    <h5>Furniture</h5>
                    <h5>Furniture</h5>
                    <h5>Furniture</h5>
                    <h5>Furniture</h5>
                    <h5>Furniture</h5>
                    <h5>Furniture</h5>
                </div>
            </Menu>


        </>
    )
}

export default MenuBar

const Menu = styled.div`
border: 2px solid transparent;
border-image: linear-gradient(101.19289390428344deg, rgba(73, 146, 242,1) 8.604166666666666%,rgba(73, 146, 242,1) 38.28125%,rgba(0, 237, 225,1) 71.25578703703705%,rgba(0, 237, 225,1) 80.5486111111111%);
border-image-slice:1;
width: 100%;
border-right: none;
border-left: none;
display:block;
.slide_container {
display: flex;
flex-flow: row nowrap;
justify-content: space-evenly;
align-items: center;
margin: 0 30px;
    .name
    {
        &:hover .list 
        {
        display: flex;
        }
        h5{
            padding: 6px 1px;
            margin: 0;
            cursor: pointer;
            position: relative;
            &::before{
                    content: '';
                    position: absolute;
                    width: 100%;
                    height:.3rem;
                    background-color: red;
                    left: 0;
                    bottom: 0;
                    transform: scale(0.1);
                    transition: 0.4s all ease-in-out;
                    } &:hover::before{
                         transform: scale(0.9);
                        }
        }
    }

}
`;
const MENULIST = styled.div`
/* border: 2px solid red; */
position: absolute;
top: 140px;
display: flex;
flex-flow: row;
box-shadow:2px 2px 10px red;
display: none;
/* padding: 14px 0px; */
transition: 0.4s all ease-in-out;
.box1{
    /* border: 2px solid red; */
    width: 180px;
    display: flex;
    flex-flow: column;
        h6{
        border-bottom: 2px solid grey;
        display: block;
        margin: 0;
        font-size: 18px;
        font-weight: 600;
        padding: 12px 10px;
        background-color: #fff;
        cursor: pointer;
        } 
        .menu-item{

            ul{
                padding:0px;
                li{
                    list-style: none;
                    letter-spacing: 0;
                    padding: 5px 12px;
                    display: block;
                    margin-bottom:.5px;
                    font-weight: 500;
                    font-size: 15px;
                  
                    &:hover{
                        color:white;
                        background: -webkit-linear-gradient(114.67196031231879deg, rgba(249, 63, 72,1) 5.736111111111111%,rgba(250, 183, 121,1) 96.29166666666666%);
                        border-radius: 0 66px 66px 0;
                    }
                   
                }
            }
        }
    
    }

`;