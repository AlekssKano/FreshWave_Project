import React from 'react';
import backgroundPhoto from '../../../assets/images/mainBlur.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/container/Container";
import {Button} from "../../../components/Button";
import {S} from './Main_Styles'
import Typewriter from 'typewriter-effect';

export const Main = () => {
    const onClckHandler=()=>{
        const targetElement = document.getElementById("contact"); // Замените "home" на нужный ID
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }    }
    return (
        <S.Main >
            <S.BackgroundWrapper>
                <Container>


                    <S.MainContainer>
                        <FlexWrapper direction="column" align={'flex-start'} justify={'center'} text_align={'left'}
                                     gap={'40px'}>

                            <S.MainTitle>Professional Cleaning Services
                                in Adelaide

                            </S.MainTitle>
                            <S.MainText>
                                Top-rated house cleaning service.
                                Happiness Guaranteed. If you're not satisfied, we'll come back and make it right, free
                                of charge.

                            </S.MainText>
                            <Button width={'200px'} height={'50px'} fontSize={'20px'} onClick={onClckHandler}> Request a quote</Button>
                            <S.MobileMainPhotoWrapper src={backgroundPhoto}/>
                        </FlexWrapper>
                    </S.MainContainer>

                </Container>
            </S.BackgroundWrapper>

        </S.Main>
    );
};

