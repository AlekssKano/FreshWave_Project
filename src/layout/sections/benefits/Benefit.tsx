import React from 'react';
import {Icon} from "../../../components/icon/icon";
import {S} from './Benefit_Styles'
type BenefitsPropsType={
    iconId:string
    title:string
    description:string
}
export const Benefit = (props: BenefitsPropsType) => {
    return (
        <S.Benefit>

            <S.TitleWrapper>
            <Icon iconId={props.iconId}/>
            <S.BenefitTitle>{props.title}</S.BenefitTitle>
            </S.TitleWrapper>
            <S.BenefitDescription>{props.description}</S.BenefitDescription>
        </S.Benefit>
    );
};


