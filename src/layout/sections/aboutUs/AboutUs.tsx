import React from 'react';
import styled from "styled-components";
import AboutUsPhoto from '../../../assets/images/about_us.webp'
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/container/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

export const AboutUs = () => {
    const onClckHandler=()=>{
        const targetElement = document.getElementById("contact"); // Замените "home" на нужный ID
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }    }
    return (
        <StyledAboutUs id={'aboutUs'}>
            <Container>
            <SectionTitle>About Us</SectionTitle>
            <FlexWrapper justify={'center'} direction={'row'} align={'center'} wrap={'wrap'}>
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
                    <Button width={'200px'} height={'50px'} fontSize={'20px'} onClick={onClckHandler}>Request a quote</Button>

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
    //background-color: #95c1c1;
    position: relative;



`
const Photo = styled.img`
    border-radius: 66px;
    max-width: 485px;
    max-height: 520px;
width: 50%;
    padding-top: 20px;

    @media ${theme.media.tablet} {
        width: auto;
        width: 328px;
        height: 316px;
    }
   

`

const StyledTextNButton = styled.div`

    text-align: start;
    padding-left: 78px;
    padding-bottom: 50px;
    width: 50%;

@media ${theme.media.tablet} {
    width: auto;
    padding-left: 10px;
    padding-right: 10px;



}

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

    
    ${font({family:'"Montserrat", sans-serif', weight:400, color:'#000',letterSpacing:'0.1em', Fmax:20, Fmin:16 })}
    
    
`