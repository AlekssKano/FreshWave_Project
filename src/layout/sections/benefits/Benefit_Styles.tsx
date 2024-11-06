import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Benefit=styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 350px;
    max-height: 304px;
    background-color: ${theme.colors.accent};
    border: 1px solid #1a92b5;
    aspect-ratio: 1 / 1; /* Устанавливает квадратное соотношение сторон */

    padding: 20px; /* Добавляем отступы для выравнивания текста */
    margin: 5px; /* Добавляем отступы для выравнивания текста */
    box-sizing: border-box;
  
`


const TitleWrapper=styled.div`
display: flex;
flex-direction: row;
align-items: center;
    margin-bottom: 15px; /* Разделяем заголовок и описание */
`

const BenefitTitle=styled.h3`
    font-family: "Oswald", sans-serif;
    font-weight: 500;
    font-size: 28px;
    letter-spacing: 0.1em;
    color: #fff;
    margin-left: 10px; /* Отступ между иконкой и заголовком */

`

const BenefitDescription=styled.p`
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.20em;
    
    color: #fbfbfb;
    margin: 0;
    text-align: start;
    max-width: 100%; /* Ограничиваем ширину текста для центрирования */
    
`
export const S={
    Benefit,
    BenefitTitle,
    BenefitDescription,
    TitleWrapper
}