import React from 'react'
import styled from 'styled-components';
import '../../Styles/alert.scss'
const Message = (props) => {
    return (
        <div className="message-alert">
            <AlertionMessage>
                <p className="orange" style={{ display: "inline-block" }}>
                    {props.message}&nbsp;
                    <span>DASHAMI</span>
                </p>
                <p className="orange" >
                    {props.message1} &nbsp;
                    <span className=".warn" style={{ textDecoration: "underline" }}>  T&C apply</span></p>
            </AlertionMessage>
        </div>
    )
}
const AlertionMessage = styled.div`
display: flex;
justify-content: space-around;
flex: 1;
    &>p{
        margin: 0;
        color: #ffaf00;
        font-size: 15px;
        font-weight: 700;
        display: flex;
        justify-content: space-between;
            @media screen and (min-width:320px)and (max-width:480px){
                font-size: 7px;
            }
            @media screen and (min-width:481px)and (max-width:768px){
                display: flex ;
                font-size: 14px;
                width: 370px;
                justify-content: flex-end;
            }
    &>span{
        color: white;
        font-weight: bolder;
        cursor: pointer;
    }
}`;
export default Message
