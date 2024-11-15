import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/icon";
import {animateScroll as scroll} from "react-scroll";

export const GoTopBtn = () => {

    const [showBtn,setshowBtn]=useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if (window.scrollY>200){
                setshowBtn(true)
            }
            else {
                setshowBtn(false)
            }
        })
    },[]
    )
    return (
        <>
            {showBtn &&  <StyledgoTopBtn onClick={()=>{scroll.scrollToTop()}}>
                <Icon iconId={"btn_go_up"} />
            </StyledgoTopBtn>}


        </>
    );

};


const StyledgoTopBtn =styled.button`
    padding: 8px;
    position: fixed;
    right: 20px;
    bottom: 20px;
`