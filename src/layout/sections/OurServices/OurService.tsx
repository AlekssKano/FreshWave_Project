import React from 'react';
import styled from "styled-components";
import houseCleaning from '../../../assets/images/house_cleaning_service.webp'
import deepCleaning from '../../../assets/images/deepcleaning.webp'
import moveCleaning from '../../../assets/images/move_in.webp'
import {Service} from "./Service";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
export const OurService = () => {
    return (
        <OurServiceStyled>
            <div>
            <SectionTitle>Our cleaning services</SectionTitle>
            <span>Whether you're relocating, managing a vacation rental, or simply seeking a clean and comfortable home, we are here to assist you.</span>
            </div>
            <FlexWrapper direction={'row'} justify={'space-between'} >
            <Service title={'House Cleaning Services'}
                     description={'Weekly, Bi-weekly, monthly professional house cleaning service for your house or apartment.'}
                     src={houseCleaning}/>
            <Service title={'Deep (Spring) Cleaning'}
                     description={"Our deep cleaning service is a great place to start before opting a recurring cleaning service. Or if you would like a spring cleaning after winter."}
                     src={deepCleaning}/>
            <Service title={'Move-in/out Cleaning Services'}
                     description={'Whether you\'re moving into a new place or moving out of one, we\'ll be there to clean your space.'}
                     src={moveCleaning}/>
            </FlexWrapper>
        </OurServiceStyled>
    );
};

const OurServiceStyled = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    background-color: #ade6d2;
`

