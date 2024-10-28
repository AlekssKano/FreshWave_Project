import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

type ServicePropsType={
    title: string,
    description: string,
    src: string,
}
export const Service = (props:ServicePropsType) => {
    return (
        <FlexWrapper direction={'column'} align={'center'}>
            <Photo src={props.src}/>
<ServiceTitle>{props.title}</ServiceTitle>
            <ServiceDescription>{props.description}</ServiceDescription>

        </FlexWrapper>
    );
};

const Photo = styled.img`
max-width: 350px;
max-height: 320px; //исправь потом размеры
    border-radius: 15px;
    //width: 100%;
    //height: max-content;
    object-fit: contain;

`
const ServiceTitle = styled.h4`
    font-family: 'Oswald', sans-serif;
    font-weight: 500;
    font-size: 20px;
    letter-spacing: 0.2em;
    color: #000;
    
    padding-top: 50px;
    padding-bottom: 25px;
`
const ServiceDescription =styled.span`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 0.25em;
    color: #000;
3
    margin-top: 25px;
    `