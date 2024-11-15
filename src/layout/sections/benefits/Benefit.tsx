import React from 'react';
import {Icon} from "../../../components/icon/icon";
import {S} from './Benefit_Styles'
import Typewriter from "typewriter-effect";
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
            <S.BenefitTitle>    <Typewriter
                options={{
                    strings: [props.title],
                    autoStart: true,
                    loop: true,
                    delay: 150,
                    deleteSpeed: Infinity,
                    cursor: ""
                }}
            /></S.BenefitTitle>
                {/*{props.title}*/}
            </S.TitleWrapper>
            <S.BenefitDescription>{props.description}</S.BenefitDescription>
        </S.Benefit>
    );
};


