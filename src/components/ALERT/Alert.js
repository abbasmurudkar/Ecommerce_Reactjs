import React from 'react'
import './alert.scss'
import '../../Styles/global.scss'
import styled from 'styled-components';
const Alert = (props) => {

    return (
                    //ALERT CONTAINER //
        <div className="alert fade show" role="alert">
            <AlertionMessage className="alertion-text">
                <div className={`${props.mode === 'light' ? 'red' : 'neon'}`}>
                    <p>{props.message}&nbsp; <span>DASHAMI</span></p>
                </div>
                <div className={`${props.mode === 'light' ? 'red' : 'neon'}`}>
                    <p>{props.message1} &nbsp;<span style={{ textDecoration: "underline" }}>T&C apply</span></p></div>
            </AlertionMessage>
        </div>
    )
}
const AlertionMessage = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    padding-top:10px;
    flex-wrap: wrap;
    .text-orange{
        &>p{
            font-size: 15px;
            font-weight: 700;
            span{
                font-weight: bolder;
                cursor: pointer;
            }
        }
}`;
export default Alert
