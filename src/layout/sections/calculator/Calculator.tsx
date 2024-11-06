import React from 'react';
import {CalculateItem} from "./CalculateItem";
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/container/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const Calculator = () => {
    return (
        <StyledCalculator>
            <Container>
                <SectionTitle>House Cleaning Quote Calculator</SectionTitle>
                <ButtonContainer>
                    <Button width={'200px'} height={'55px'} fontSize={'20px'}>Regular Service</Button>
                    <Button width={'200px'} height={'55px'} fontSize={'20px'}>Spring Service</Button>
                    <Button width={'200px'} height={'55px'} fontSize={'20px'}>Bond Service</Button>
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
                    <Result>Estimated time: <StyledHoursNMoney>0:00hours</StyledHoursNMoney></Result>
                    <Result>Total: <StyledHoursNMoney>$0.00 ($45.00p/h)</StyledHoursNMoney></Result>
                </StyledResult>
            </Container>
        </StyledCalculator>
    );
};

const StyledCalculator = styled.section`
    min-height: 100vh;
    text-align: center;


`
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center; /* Центрируем кнопки по горизонтали */
    align-items: center; /* Центрируем по вертикали */
    margin: 20px 0; /* Отступ сверху и снизу, чтобы кнопки не были прижаты */
    gap: 150px; /* Расстояние между кнопками */
    padding-top: 20px;
    @media ${theme.media.tablet} {
        gap: 50px; /* Расстояние между кнопками */

    }
    @media ${theme.media.mobile} {
        gap: 50px; /* Расстояние между кнопками */
        flex-direction: column;
    }
`
const StyledResult = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between; /* Размещаем элементы по разным сторонам */
    align-items: center; /* Выравниваем элементы по вертикали */
    padding: 10px;
    width: 100%;


`

const StyledHoursNMoney = styled.span`
    font-weight: 600;
`

const Result = styled.div`
    //font-family: 'Oswald', sans-serif;
    //font-weight: 400;
    //font-size: 20px;
    //letter-spacing: 0.14em;
    color: #000;
    width: 250px;
    text-align: left;
    
    @media ${theme.media.mobile}{
        width: 140px;

    }
    ${font({family:"'Oswald', sans-serif", weight: 400,color: "#000,",letterSpacing:'0.14em', Fmax:20, Fmin:14})}

`