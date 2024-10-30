import React from 'react';
import styled from "styled-components";
import AboutUsPhoto from './../../assets/images/about_us.webp'
import {SectionTitle} from "../../components/SectionTitle";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Button} from "../../components/Button";
import {Container} from "../../components/container/Container";

export const AboutUs = () => {
    return (
        <StyledAboutUs>
            <Container>
            <SectionTitle>About Us</SectionTitle>
            <FlexWrapper justify={'center'} direction={'row'} align={'center'}>
                <Photo src={AboutUsPhoto} alt={'About Us'}/>
                <StyledTextNButton>
                    <StyledText><p>Who We Are?</p>
                        <br/>
                        <p>We are a cleaning service company and our goal is to keep your home or your workplace neat
                            and
                            sparkling clean. Professional cleaners will take care of all of the mess and dirt for you.
                            Whether you need a weekly or one-time cleaning service, we adapt our services to your
                            requirements.</p>
                        <br/>
                        <p>Our services include bond cleaning, spring cleaning and house cleaning. At FreshWave
                            Cleaning,
                            we have a reputation for excellence and customer satisfaction by providing exceptional house
                            cleaning services for homeowners across Adelaide. So stop by and get high-quality results at
                            the
                            most affordable prices.</p>
                    </StyledText>
                    <Button width={'200px'} height={'50px'} fontSize={'20px'}>Request a quote</Button>

                </StyledTextNButton>
            </FlexWrapper>
            </Container>
        </StyledAboutUs>
    );
};

const StyledAboutUs = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    background-color: #95c1c1;

`
const Photo = styled.img`
    border-radius: 66px;
    width: 485px;
    height: 520px;

    padding-top: 20px;

`

const StyledTextNButton = styled.div`

    text-align: start;
    padding-left: 78px;
    padding-bottom: 50px;


`
const StyledText = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 20px;
    letter-spacing: 0.1em;
    color: #000;
    
text-align: start;
    padding-left: 10px;

    padding-bottom: 14px;
    padding-top: 110px;
`