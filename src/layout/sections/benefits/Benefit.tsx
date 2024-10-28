import React from 'react';
import {Icon} from "../../../components/icon/icon";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
type BenefitsPropsType={
    iconId:string
    title:string
    description:string
}
export const Benefit = (props: BenefitsPropsType) => {
    return (
        <StyledBenefit>
            <TitleWrapper>
            <Icon iconId={props.iconId}/>
            <BenefitTitle>{props.title}</BenefitTitle>
            </TitleWrapper>
            <BenefitDescription>{props.description}</BenefitDescription>
        </StyledBenefit>
    );
};

const StyledBenefit=styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 350px;
    height: 304px;
    background-color: ${theme.colors.accent};
    border: 1px solid #1a92b5;

    padding: 20px; /* Добавляем отступы для выравнивания текста */
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
    font-size: 32px;
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
    //font-size: 16px; /* Измените размер для соответствия дизайну */
    //line-height: 1.5; /* Увеличиваем межстрочный интервал для удобства чтения */
    //letter-spacing: 0.05em; /* Уменьшаем расстояние между буквами */
    margin: 0; /* Убираем внешние отступы */
    text-align: start;
    max-width: 100%; /* Ограничиваем ширину текста для центрирования */
    
`