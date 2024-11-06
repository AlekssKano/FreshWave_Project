import {theme} from "../../styles/Theme";
import styled from "styled-components";

const Header = styled.header`
    background-color: rgba(255, 255, 255, 0.6);
    //position: fixed;
    //top: 0;
    //left: 0;
    //right: 0;
    //z-index: 9999;
    @media ${theme.media.mobile}{  
        background-color: #51B9D9;
        
        &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            width: 100px;
            height: 100px;
            background-color: white;
            border-radius: 0 0 0 100px;
        }


    }

`
const ButtonPartHeader = styled.div`
    display: block;
    border: 1px solid #fb00e3;
    @media ${theme.media.tablet} {
        display: none;
    }
`

export const S ={
    Header,
    ButtonPartHeader
}