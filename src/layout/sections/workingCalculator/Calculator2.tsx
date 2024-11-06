import React, {useState} from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/container/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import {CalculateItem2} from "./CalculateItem2";

export const Calculator2 = () => {
    const hourlyRate = 45; // Стоимость за час
    const [totalTime, setTotalTime] = useState(0); // в минутах
    const [totalCost, setTotalCost] = useState(0);

    const updateTotal = (timeChange: number) => {
        const newTotalTime = totalTime + timeChange;
        setTotalTime(newTotalTime);
        setTotalCost((newTotalTime / 60) * hourlyRate);
    };
    type OnClickHandlerProps = 'reg' | 'spring' | 'bond';

    const [activeReg, setActiveReg] = useState(false);
    const [activeSpring, setActiveSpring] = useState(false);
    const [activeBond, setActiveBond] = useState(false);
    const [choosenTypeCleaningCount, setChoosenTypeCleaningCount] = useState<string>("");

    const onClickHandler = (props: OnClickHandlerProps) => {
        if (props === 'reg') {  // Сравнение с 'reg'
            setChoosenTypeCleaningCount("reg");
            setActiveReg(!activeReg)
            setActiveBond(false)
            return setActiveSpring(false)
        }
        if (props === 'spring') {
            setChoosenTypeCleaningCount("spring");
            setActiveReg(false)
            setActiveBond(false)
            return setActiveSpring(!activeSpring)
        }
        if (props === 'bond') {
            setChoosenTypeCleaningCount("bond");
            setActiveReg(false)
            setActiveBond(!activeBond)
            return setActiveSpring(false)

        }
    }


    return (
        <StyledCalculator>
            <Container>
                <SectionTitle>House Cleaning Quote Calculator</SectionTitle>
                <ButtonContainer>
                    <Button width={'200px'} height={'55px'} fontSize={'20px'} isActive={activeReg}
                            onClick={() => onClickHandler('reg')}>Regular Service</Button>
                    <Button width={'200px'} height={'55px'} fontSize={'20px'} isActive={activeSpring}
                            onClick={() => onClickHandler('spring')}>Spring Service</Button>
                    <Button width={'200px'} height={'55px'} fontSize={'20px'} isActive={activeBond}
                            onClick={() => onClickHandler('bond')}>Bond Service</Button>
                </ButtonContainer>
                <FlexWrapper direction={'column'} align={'center'}>
                    <CalculateItem2
                        title={'Kitchen'}
                        timePerItem={15}
                        onTimeChange={updateTotal}/>
                    <CalculateItem2 title={'Bathroom'}
                                    timePerItem={10}
                                    onTimeChange={updateTotal}/>
                    <CalculateItem2 title={'Toilet'}
                                    timePerItem={5}
                                    onTimeChange={updateTotal}/>
                    <CalculateItem2 title={'Bedroom/Office'}
                                    timePerItem={20}
                                    onTimeChange={updateTotal}/>
                    <CalculateItem2 title={'Living Area'}
                                    timePerItem={25}
                                    onTimeChange={updateTotal}/>
                    <CalculateItem2 title={'Windows'}
                                    timePerItem={30}
                                    onTimeChange={updateTotal}/>
                    <CalculateItem2 title={'Bed sheets'}
                                    timePerItem={10}
                                    onTimeChange={updateTotal}/>
                    <CalculateItem2 title={'Oven'}
                                    timePerItem={15}
                                    onTimeChange={updateTotal}/>
                </FlexWrapper>
                <StyledResult>
                    <Result>Estimated
                        time: <StyledHoursNMoney>{Math.floor(totalTime / 60)}:{totalTime % 60} hours</StyledHoursNMoney></Result>
                    <Result>Total: <StyledHoursNMoney>${totalCost.toFixed(2)} (${hourlyRate}.00 p/h)</StyledHoursNMoney></Result>
                </StyledResult>
            </Container>
        </StyledCalculator>
    );
};

const StyledCalculator = styled.section`
    min-height: 100vh;
    text-align: center;
`;

// остальные стили остаются без изменений


const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    gap: 150px;
    padding-top: 20px;
    @media ${theme.media.tablet} {
        gap: 50px;
    }
    @media ${theme.media.mobile} {
        gap: 50px;
        flex-direction: column;
    }
`;

const StyledResult = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 100%;
`;

const StyledHoursNMoney = styled.span`
    font-weight: 600;
`;

const Result = styled.div`
    color: #000;
    width: 250px;
    text-align: left;
    @media ${theme.media.mobile} {
        width: 140px;
    }
    ${font({
        family: "'Oswald', sans-serif",
        weight: 400,
        color: "#000",
        letterSpacing: '0.14em',
        Fmax: 20,
        Fmin: 14
    })} ]`
