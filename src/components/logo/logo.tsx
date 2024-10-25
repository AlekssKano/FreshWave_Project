import React from 'react';
import {Icon} from "../icon/icon";
import styled from "styled-components";

export const Logo = () => {
    return (

            <StyledLogo href=''>
                <Icon iconId={'logo'} width={'80'} height={'80'} viewBox={'0 0 80 80'}/>
                FreshWave  Cleaning
            </StyledLogo>



    );
};

const StyledLogo=styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
`