import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {font} from "../../../styles/Common";
import {Button} from "../../../components/Button";
import {theme} from "../../../styles/Theme";

type ServicePropsType={
    title: string,
    description: string,
    src: string,
}
export const Service = (props:ServicePropsType) => {
    const onClckHandler=()=>{
        const targetElement = document.getElementById("contact");
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }    }
    return (
        <StyledService >
        <FlexWrapper direction={'column'} align={'center'} justify={'center'}>
            <Photo src={props.src}/>
<ServiceTitle>{props.title}</ServiceTitle>
            <ServiceDescription>{props.description}</ServiceDescription>
            <ButtonPart>
                <Button color={'primary'} width={'190px'} height={'45px'} fontSize={'20px'} onClick={onClckHandler}>Request a quote</Button>

            </ButtonPart>
        </FlexWrapper>
        </StyledService>
    );
};
const StyledService=styled.div`
    //width: 30%
    align-items: center;
    position: relative;
z-index: 9999 !important;




`
const Photo = styled.img`
    width: 100%;
    height: auto; // Сохранение соотношения сторон
    max-width: 290px;
    max-height: 290px;
    border-radius: 15px;
    margin-bottom: 45px;

    aspect-ratio: 1 / 1; /* Устанавливает квадратное соотношение сторон */
    object-fit: cover;

    transition: box-shadow 0.5s ease;
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    &:hover {
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    }

`
const ServiceTitle = styled.h4`
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.2em;
    color: #000;
    max-width: 290px;
    text-align: start;

    

    padding-bottom: 5px;
    @media ${theme.media.mobile} {
        text-align: center;

    }
`
const ServiceDescription =styled.span`
    //font-family: 'Montserrat', sans-serif;
    //font-weight: 400;
    //font-size: 15px;
    //letter-spacing: 0.25em;
    //color: #000;
    max-width: 270px;
    text-align: start;

    margin-top: 25px;
    margin-bottom: 15px;
    @media ${theme.media.mobile}{
        text-align: center;

    }
     ${font({family:"'Montserrat', sans-serif;", weight:400,letterSpacing:'0.25em', color:'#000', Fmax:20, Fmin:14 })}

    
    
`

const ButtonPart =styled.div`
    display: none;
    @media ${theme.media.tablet} {
    display: block;
}
    `