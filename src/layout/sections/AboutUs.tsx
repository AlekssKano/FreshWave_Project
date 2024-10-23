import React from 'react';
import styled from "styled-components";
import AboutUsPhoto from './../../assets/images/about_us.webp'
import {SectionTitle} from "../../components/SectionTitle";
import {FlexWrapper} from "../../components/FlexWrapper";

export const AboutUs = () => {
    return (
        <StyledAboutUs>
            <SectionTitle>About Us</SectionTitle>
            <FlexWrapper justify={'center'} direction={'row'} align={'center'}>
                <Photo src={AboutUsPhoto} alt={'About Us'}/>
                <StyledText>
                    <div>Who We Are?

                        We are a cleaning service company and our goal is to keep your home or your workplace neat and
                        sparkling clean. Professional cleaners will take care of all of the mess and dirt for you.
                        Whether you need a weekly or one-time cleaning service, we adapt our services to your
                        requirements.

                        Our services include bond cleaning, spring cleaning and house cleaning. At FreshWave Cleaning,
                        we have a reputation for excellence and customer satisfaction by providing exceptional house
                        cleaning services for homeowners across Adelaide. So stop by and get high-quality results at the
                        most affordable prices.
                    </div>
                    <button>Request a quote</button>
                </StyledText>
            </FlexWrapper>
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

`

const StyledText = styled.div`


`