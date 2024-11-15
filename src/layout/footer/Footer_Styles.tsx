// Styled components

import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Footer = styled.footer`
    background-color: #85C5E9; /* Голубой цвет фона */
    padding: 20px;
    position: relative;

    //color:${theme.colors.secondaryText}
`;

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Выравнивание элементов по левому краю */
    gap: 20px; /* Расстояние между элементами */
    @media ${theme.media.tablet} {
        align-items: center;

    }
`;

const Name = styled.div`
    //font-family: 'Montserrat', sans-serif;
    //font-weight: 600;
    //font-size: 20px;
    text-align: center;
    padding-left: 14px;
    //color:${theme.colors.secondaryText}
    ${font({
    family: '"Montserrat", sans-serif',
    weight: 600,
    color:'white',
    Fmin: 16,
    Fmax: 20,
})}
`;

const PhoneNumber = styled.div`
    //font-family: 'Montserrat', sans-serif;
    //font-weight: 600;
    //font-size: 20px;
    text-align: center;
    padding-left: 14px;
    // color:$ {theme.colors.secondaryText}
    ${font({
    family: '"Montserrat", sans-serif',
    weight: 600,
    color:'white',
    Fmin: 16,
    Fmax: 20,
})}

`;

const MenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 20;
padding-right: 180px;
    @media ${theme.media.tablet} {
    flex-grow: 0;
    padding-right: 0;
        margin-top: 36px;
        margin-bottom: 11px;
}
    color:${theme.colors.secondaryText}

`;

const Copyright = styled.small`
    display: block;
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
`;
const FooterWrapper=styled.div`
 
  display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    text-align:  center;
     
     @media ${theme.media.tablet} {
         flex-direction: column;

     }
 `

export const S={
    Footer,
    FooterWrapper,
    Copyright,
    MenuWrapper,
    PhoneNumber,
    Name,
    LeftSection
}