import React from 'react';
import styled from "styled-components";
import houseCleaning from '../../../assets/images/house_cleaning_service.webp'
import deepCleaning from '../../../assets/images/deepcleaning.webp'
import moveCleaning from '../../../assets/images/move_in.webp'
import {Service} from "./Service";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/container/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const OurService = () => {
    return (
        <OurServiceStyled id={'cleaningService'}>
            <Container>
                <SectionPlace>
                    <SectionTitle>Our cleaning services</SectionTitle>
                    <SectionText>Whether you're relocating, managing a vacation rental, or simply seeking a clean and
                        comfortable home, we are here to assist you.</SectionText>
                </SectionPlace>
                <FlexWrapperStyled wrap={'wrap'} justify={'space-between'} align={'center'}>
                    <Service title={'House Cleaning Services'}
                             description={'Weekly, Bi-weekly, monthly professional house cleaning service for your house or apartment.'}
                             src={houseCleaning}
                    />
                <Service title={'Deep (Spring) Cleaning'}
                         description={"Our deep cleaning service is a great place to start before opting a recurring cleaning service. Or if you would like a spring cleaning after winter."}
                         src={deepCleaning}/>
                <Service title={'Move-in/out Cleaning Services'}
                         description={'Whether you\'re moving into a new place or moving out of one, we\'ll be there to clean your space.'}
                         src={moveCleaning}/>
            </FlexWrapperStyled>
        </Container>
</OurServiceStyled>

)
    ;
};

const OurServiceStyled = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    //background-color: #ade6d2;
    position: relative;



`
const SectionPlace = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 70px;

`
const SectionText = styled.span`
    //font-family: 'Montserrat', sans-serif;
    //font-weight: 400;
    //font-size: 14px;
    //letter-spacing: 0.06em;
    text-transform: uppercase;
    text-align: center;
    color: #52525e;
    width: 50%;
    padding-top: 25px;
    @media ${theme.media.mobile}{
        width: 100%;

    }

    ${font({
        family: '"Montserrat", sans-serif',
        weight: 400,
        color: '#52525e',
        Fmin: 12,
        Fmax: 18,
        letterSpacing: '0.06em'
    })}

`

const FlexWrapperStyled = styled(FlexWrapper)`
    @media ${theme.media.tablet} {
        flex-direction: column;
        align-items: center;
        gap: 40px; // добавление промежутка между блоками на мобильной версии
    }`