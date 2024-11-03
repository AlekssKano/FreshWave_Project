import React from 'react';
import {Icon} from "../icon/icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Logo = () => {
    return (

            <StyledLogo href=''>
                <Icon iconId={'logo'} width={'80'} height={'80'} viewBox={'0 0 80 80'}/>
                <NameCompany>FreshWave  Cleaning</NameCompany>
            </StyledLogo>



    );
};

const StyledLogo=styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
`
const NameCompany=styled.span`
    font-weight: 600;
    font-size: 18px;
    width: 100px;
    color: ${theme.colors.accent};
    @media ${theme.media.mobile}{
        color:#126ABA
    }

`