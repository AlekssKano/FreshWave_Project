import React from 'react';
import {Icon} from "../../../components/icon/icon";
import styled from "styled-components";
type BenefitsPropsType={
    iconId:string
    title:string
    description:string
}
export const Benefit = (props: BenefitsPropsType) => {
    return (
        <StyledBenefit>
            <TitleWrapper>
            <Icon iconId={props.iconId}/>
            <h4>{props.title}</h4>
            </TitleWrapper>
            <span>{props.description}</span>
        </StyledBenefit>
    );
};

const StyledBenefit=styled.div`
display: flex;
flex-direction: column;
text-align: center;
    width: 400px;
    height: 304px;
border: 1px solid blue
`


const TitleWrapper=styled.div`
display: flex;
flex-direction: row;
align-items: center;`