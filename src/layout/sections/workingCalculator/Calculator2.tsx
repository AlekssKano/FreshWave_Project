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
    type OnClickHandlerProps = {
        typeCleaning: 'reg' | 'spring' | 'bond'
        num?: number
    }

    const [activeReg, setActiveReg] = useState(false);
    const [activeSpring, setActiveSpring] = useState(false);
    const [activeBond, setActiveBond] = useState(false);
    const [choosenTypeCleaningCount, setChoosenTypeCleaningCount] = useState<string>("");
    const [resetItems, setResetItems] = useState(0);




    const onClickHandler = (props: OnClickHandlerProps) => {
        setTotalTime(0);
        setTotalCost(0);
        if (props.typeCleaning === 'reg') {  // Сравнение с 'reg'
            setChoosenTypeCleaningCount("reg");
            setActiveReg(!activeReg)
            setActiveBond(false)
            setResetItems(prev => prev + 1); // Увеличьте resetItems для сброса
            return setActiveSpring(false)
        }
        if (props.typeCleaning === 'spring') {
            setChoosenTypeCleaningCount("spring");
            setActiveReg(false)
            setActiveBond(false)
            setResetItems(prev => prev + 1); // Увеличьте resetItems для сброса
            return setActiveSpring(!activeSpring)
        }
        if (props.typeCleaning === 'bond') {
            setChoosenTypeCleaningCount("bond");
            setActiveReg(false)
            setActiveBond(!activeBond)
            setResetItems(prev => prev + 1); // Увеличьте resetItems для сброса
            return setActiveSpring(false)

        }
    }


    return (
        <StyledCalculator>
            <Container>
                <SectionTitle>House Cleaning Quote Calculator</SectionTitle>
                <ButtonContainer>
                    <Button width={'200px'} height={'55px'} fontSize={'20px'} isActive={activeReg}
                            onClick={() => onClickHandler({typeCleaning: 'reg', num: 45})}>Regular Service</Button>
                    <Button width={'200px'} height={'55px'} fontSize={'20px'} isActive={activeSpring}
                            onClick={() => onClickHandler({typeCleaning: 'spring', num: 45})}>Spring Service</Button>
                    <Button width={'200px'} height={'55px'} fontSize={'20px'} isActive={activeBond}
                            onClick={() => onClickHandler({typeCleaning: 'bond', num: 50})}>Bond Service</Button>
                </ButtonContainer>
                <FlexWrapper direction={'column'} align={'center'}>
                    <CalculateItem2 key={resetItems + "Kitchen"}
                                    title={'Kitchen'}
                                    timePerItem={choosenTypeCleaningCount === 'bond' ? 180 : choosenTypeCleaningCount === 'spring' ? 120 : 35}
                                    onTimeChange={updateTotal}/>
                    <CalculateItem2 key={resetItems + "Bathroom"}
                                    title={'Bathroom'}
                                    timePerItem={choosenTypeCleaningCount === 'bond' ? 60 : choosenTypeCleaningCount === 'spring' ? 60 : 35}
                                    onTimeChange={updateTotal}/>
                    <CalculateItem2 key={resetItems + "Toilet"}
                                    title={'Toilet'}
                                    timePerItem={choosenTypeCleaningCount === 'bond' ? 30 : choosenTypeCleaningCount === 'spring' ? 20 : 15}
                                    onTimeChange={updateTotal}/>
                    <CalculateItem2 key={resetItems + "Bedroom/Office"}
                                    title={'Bedroom/Office'}
                                    timePerItem={choosenTypeCleaningCount === 'bond' ? 30 : choosenTypeCleaningCount === 'spring' ? 20 : 15}
                                    onTimeChange={updateTotal}/>
                    <CalculateItem2 key={resetItems + "Living Area"}
                                    title={'Living Area'}
                                    timePerItem={choosenTypeCleaningCount === 'bond' ? 60 : choosenTypeCleaningCount === 'spring' ? 45 : 25}
                                    onTimeChange={updateTotal}/>
                    <CalculateItem2 key={resetItems + "Windows"}
                                    title={'Windows'}
                                    timePerItem={choosenTypeCleaningCount === 'bond' ? 15 : choosenTypeCleaningCount === 'spring' ? 15 : 10}
                                    onTimeChange={updateTotal}/>
                    <CalculateItem2 key={resetItems + "Bed sheets"}
                                    title={'Bed sheets'}
                                    timePerItem={choosenTypeCleaningCount === 'bond' ? 10 : choosenTypeCleaningCount === 'spring' ? 10 : 10}
                                    onTimeChange={updateTotal}/>
                    <CalculateItem2 key={resetItems + "Oven"}
                                    title={'Oven'}
                                    timePerItem={choosenTypeCleaningCount === 'bond' ? 120 : choosenTypeCleaningCount === 'spring' ? 120 : 120}
                                    onTimeChange={updateTotal}/>
                </FlexWrapper>
                <StyledResult>
                    <Result>Estimated
                        time: <StyledHoursNMoney>{Math.floor(totalTime / 60)}:{totalTime % 60} hours</StyledHoursNMoney></Result>
                    <Result>Total: <StyledHoursNMoney>${totalCost.toFixed(2)} (${choosenTypeCleaningCount === 'bond' ?50:45}.00 p/h)</StyledHoursNMoney></Result>
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
