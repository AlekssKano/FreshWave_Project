import React from 'react';
import styled from "styled-components";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";

type CalculateItemProps = {
    title: string;
}
export const CalculateItem = (props:CalculateItemProps) => {

    return (
        <StyledCalculateItem>
            {props.title}
            <StyledPlusMinus>
            <PlusMinus>+</PlusMinus>
            <Zero>0</Zero>
            <PlusMinus>-</PlusMinus>
            </StyledPlusMinus>

        </StyledCalculateItem>
    );
};

const StyledCalculateItem=styled.div`
    display: flex;
    justify-content: space-between; /* Размещаем элементы по разным сторонам */
    align-items: center;            /* Выравниваем элементы по вертикали */
    padding: 10px;
    width: 100%;                    /* Контейнер занимает всю ширину */
    border-bottom: 1px solid #ccc;  /* Линия для разделения строк */

    //font-family: 'Montserrat', sans-serif;
    //font-weight: 500;
    //font-size: 20px;
    //letter-spacing: 0.14em;
    //color: #000;
    
    ${font({family:"'Montserrat', sans-serif", weight:500,color: '#000', letterSpacing:'0.14em', Fmax:20, Fmin:14})}
    `
const StyledPlusMinus=styled.div`
    display: flex;
    align-items: center;

`

const PlusMinus = styled.span`
    border: 3px solid #51b9d9;
    width: 40px;
    height: 45px;
    
    padding-left: 2px;
    padding-top: 10px;
    
    `

const Zero = styled.span`
    padding: 20px;
    @media ${theme.media.mobile} {
        padding: 10px;
    }
    `