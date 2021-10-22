import React from 'react'
import styled from 'styled-components'
import './Menubar.scss'
import './MenuBarmedia.scss'
const MenuBar = ({ mode }) => {
    const LISTITEMS_INFO = [
        { head: "Leaving" },
        { head: "Furniture" },
        { head: "Bedroom" },
        { head: "kids Room" },
        { head: "Mattreses" },
        { head: "Furnishings" },
        { head: "Decor" },
        { head: "Lightning" },
        { head: "Appliances" },
        { head: "Modular Furniture" },
    ]
    const LIST_ITEMS = [
        {
            id: "1",
            head: "Sofa",
            list1: "Sofas",
            list2: "1)Seater Sofa",
            list3: "2)Seater Sofa",
            list4: "3)Seater Sofa",
            list5: "Sofa set",
            list6: "Sectional Sofas",
            list7: "Recliners",
            list8: "Futons",
            list9: "Sofa spa",
            list10: "Hammocks"

        },
        {
            id: "2",
            head: "Seating",
            list1: "Settees",
            list2: "1)Benches",
            list3: "2)Chaise Loungers",
            list4: "3)Recamiers",
            list5: "Ottomans",
            list6: "Pouffes",
            list7: "Foot Stools",
            list8: "Seating Stools",
            list9: "Bean Bags",
            list10: "Swings",
        },
        {
            id: "3",
            head: "Chairs",
            list1: "Arm Chairs",
            list2: "1)Rocking Chairs",
            list3: "2)Lounge Chairs",
            list4: "3)Cafe Chairs",
            list5: "Iconic Chairs",
            list6: "Slipper Chairs",
            list7: "Barrel Chairs",
            list8: "Cantilever Chairs",
            list9: "Folding Chairs",
            list10: "Plastic Chairs",
        },
        {
            id: "4",
            head: "Tables",
            list1: "Coffee Table Sets",
            list2: "1)End Tables",
            list3: "2)Nest of Tables",
            list4: "3)console tables",
            list5: "Portable Tables",
            list6: "Study Tables",
            list7: "Dressing Tables",
            list8: "Bedside Tables",
            list9: "Office Tables",
            list10: "Patio Tables & Sets",
        },
        {
            id: "5",
            head: "Cabinatery",
            list1: "Shoe Racks",
            list2: "1)Entertainment Units",
            list3: "2)Cabinet & Sideboards",
            list4: "3)Chest of Drawers",
            list5: "Book Shelves",
            list6: "Book Cases",
            list7: "Trunks",
            list8: "Wardrobes",
            list9: "Modular Wardrobes",
            list10: "Plastic Cabinets",
        },
        {
            id: "6",
            head: "Decor",
            list1: "Dinning Set",
            list2: "1)Dinning Table",
            list3: "2)Dinning Tables",
            list4: "3)Bar Cabinet",
            list5: "Bar Troyles",
            list6: "Bar Tools",
            list7: "Wine Racks",
            list8: "Bar Table Set",
            list9: "Modular Kitchen",
            list10: "Office Cabinets"

        },
        {
            id: "7",
            head: "Lightning",
            list1: "Sofas",
            list2: "1)Seater Sofa",
            list3: "2)Seater Sofa",
            list4: "3)Seater Sofa",
            list5: "Sofa set",
            list6: "Sectional Sofas",
            list7: "Recliners",
            list8: "Futons",
            list9: "Sofa spa",
            list10: "Patio Tables",

        }
    ]
    return (
        <>
            {/* ----------------------- */}
            {/* -------MENUBAR--------- */}
            {/* ----------------------- */}
            <Menu className={`bg-${mode === "light" ? "" : "dark"} Menu-container `}>
            <hr className={mode === "light" ? "hr-red" : "hr-neon"} />
                <div className="slide_container">
                    {/* ----------------------- */}
                    {/* ----MENUBAR HEADING---- */}
                    {/* ----------------------- */}
                    <div className="menu-head">
                        {LISTITEMS_INFO.map((items, index) => {
                            return (
                                <>
                                    {/* ----------------------- */}
                                    {/* -----MENUBAR SHOW------ */}
                                    {/* ----------------------- */}
                                    <div className="menu-show ">
                                        <h5 key={index} className={mode === "light" ? "nav-red" : "neon nav-neon"}>{items.head}</h5>
                                        <MENULIST className={`list ${mode === "light" ? "shadow-light menu-bg" : "shadow-neon menu-bg-dark"}`}>

                                            {/* ----------------------- */}
                                            {/* -------MENU LIST------- */}
                                            {/* ----------------------- */}
                                            {LIST_ITEMS.map((item) => {
                                                return (
                                                    <div className="box1"  key={item.id}>
                                                        <h6 className={`bg-${mode === "light" ? "" : "dark"} text-${mode === "light" ? "" : "light"}`}>{item.head}</h6>
                                                        <div className="menu-item" >
                                                            <ul className={mode === "light" ? "active" : "neon-ul"} style={{ color: mode === "light" ? "black" : "white" }}>
                                                                <li>{item.list1}</li>
                                                                <li >{item.list2}</li>
                                                                <li>{item.list3}</li>
                                                                <li>{item.list4}</li>
                                                                <li>{item.list5}</li>
                                                                <li>{item.list6}</li>
                                                                <li>{item.list7}</li>
                                                                <li>{item.list8}</li>
                                                                <li>{item.list9}</li>
                                                                <li>{item.list10}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </MENULIST>
                                    </div>
                                </>
                            )})}
                    </div>
                </div>
                <hr className={mode === "light" ? "hr-red" : "hr-neon"} />
            </Menu>
        </>
    )
}
export default MenuBar

const Menu = styled.div`
/* width: 100%; */
margin: 0px 2px ;
.slide_container {
margin: 0 10px;

    .menu-head{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-flow: row nowrap;
         .menu-show{
             padding: 4px 0px;
             &:hover .list {
             display: flex;
             }
         }
    }
}
`;
const MENULIST = styled.div`
position: fixed;
top: 145px;
display: flex;
flex-flow: row;
display: none;
z-index: 3;
transition: 0.4s all ease-in-out;
left: 90px;
.box1{
    width: 180px;
    display: flex;
    z-index: 1;
    flex-flow: column;
    box-shadow: 1px 2px 2px grey;
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
    }
`;