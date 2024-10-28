import React from 'react';
import styled from "styled-components";
import backgroundPhoto from './../../assets/images/mainBlur.webp'
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/container/Container";
import {Button} from "../../components/Button";

export const Main = () => {
    return (
        <Styled_Main>
            <BackgroundWrapper>
            <Container>


<MainContainer>
            <FlexWrapper direction="column" align={'flex-start'} justify={'center'} text_align={'left'} gap={'40px'}>

                <MainTitle>Professional Cleaning Services
                    in Adelaide
                </MainTitle>
                <MainText>
                Top-rated house cleaning service.
                Happiness Guaranteed. If you're not satisfied, we'll come back and make it right, free of charge.
            </MainText>
                <Button width={'200px'} height={'50px'} fontSize={'20px'}>Request a quote</Button>

            </FlexWrapper>
</MainContainer>

            </Container>
            </BackgroundWrapper>

        </Styled_Main>
    );
};

const Styled_Main = styled.section`

`
const BackgroundWrapper = styled.div`
    background-image: url(${backgroundPhoto});
    background-size: cover;
    background-position: center;
    object-fit: cover;
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center; /* Центрирует содержимое по вертикали */
    align-items: center; /* Центрирует содержимое по горизонтали */
    padding-left: -25%; /* Смещает текст немного влево */

`;
const MainTitle=styled.h1`
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 58px;
    color: #fff;
    `

const MainText=styled.span`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 28px;
    color: #fff;
    `
const MainContainer=styled.div`
    max-width: 820px;
    max-height: 450px;
`