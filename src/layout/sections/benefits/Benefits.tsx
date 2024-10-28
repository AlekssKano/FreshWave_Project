import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Benefit} from "./Benefit";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Benefits = () => {
    return (
        <StyledBenefits>
            <SectionTitle>Our Services Bring Valuable Benefits</SectionTitle>
            {/*<BenefitsList></BenefitsList>*/}
            <FlexWrapper justify={'wrap'} align={'center'} gap={'40px'} >
                <Benefit iconId={'eco'} title={'Eco-friendly'}
                         description={'We provide eco-friendly home cleaning services using proven products that are safe for your family, the environment, and all surfaces in your home.'}></Benefit>
                <Benefit iconId={'safe'} title={'Safe'}
                         description={'Each cleaner undergoes a thorough screening process, including a mandatory police check, and is required to have insurance to ensure your peace of mind.'}/>
                <Benefit iconId={'experienced'} title={'Experienced'}
                         description={'With 3 years of experience in the cleaning industry, we ensure that all this expertise is transferred to our teams through comprehensive in-house training.'}/>
            </FlexWrapper>
        </StyledBenefits>
    );
};

const StyledBenefits = styled.section`
    background-color: #9c82b8;
    //text-align: center;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Равномерно распределяем элементы */
    align-items: center;
    padding-bottom: 100px;



`


const BenefitsList=styled.div`
    //padding: 50px 0;
    `