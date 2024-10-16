import React from 'react';
import {Icon} from "../icon/icon";
import styled from "styled-components";

export const Logo = () => {
    return (

            <StyledLogo href=''>
                <Icon iconId={'logo'} width={'100'} height={'100'} viewBox={'0 0 100 100'}/>
                FreshWave Cleaning
            </StyledLogo>



    );
};

const StyledLogo=styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
`