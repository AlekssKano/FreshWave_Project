import React from 'react';
import {CalculateItem} from "./OurServices/CalculateItem";
import styled from "styled-components";
import {SectionTitle} from "../../components/SectionTitle";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Calculator = () => {
    return (
        <StyledCalculator>
            <SectionTitle>House Cleaning Quote Calculator</SectionTitle>
            <ButtonContainer>
                <button>Regular Service</button>
                <button>Spring Service</button>
                <button>Bond Service</button>
            </ButtonContainer>
<FlexWrapper direction={'column'} align={'center'}>
    <CalculateItem title={'Kitchen'}/>
    <CalculateItem title={'Bathroom'}/>
    <CalculateItem title={'Toilet'}/>
    <CalculateItem title={'Bedroom/Office'}/>
    <CalculateItem title={'Living Area'}/>
    <CalculateItem title={'Windows'}/>
    <CalculateItem title={'Bed sheets'}/>
    <CalculateItem title={'Oven'}/>
</FlexWrapper>
            <StyledResult>
<div>Estimated time: 0:00hours</div>
<div>Total: $0.00 ($45.00p/h)</div>
            </StyledResult>
        </StyledCalculator>
    );
};

const StyledCalculator = styled.section`
height: 100vh;
    text-align: center;

`
const ButtonContainer=styled.div`
    display: flex;
    justify-content: center; /* Центрируем кнопки по горизонтали */
    align-items: center;     /* Центрируем по вертикали */
    margin: 20px 0;          /* Отступ сверху и снизу, чтобы кнопки не были прижаты */
    gap: 10px;               /* Расстояние между кнопками */
`
const StyledResult=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* Размещаем элементы по разным сторонам */
    align-items: center;            /* Выравниваем элементы по вертикали */
    padding: 10px;
    width: 100%;
`