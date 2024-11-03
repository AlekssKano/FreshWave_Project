import React, { useState } from 'react';
import { MenuHeader } from "../../components/menu/MenuHeader";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { PrivacyPolicyModal } from "../../components/PrivacyPolicyModal";
import { FlexWrapper } from "../../components/FlexWrapper";
import {Container} from "../../components/container/Container";
import {theme} from "../../styles/Theme";
import {MenuFooter} from "../../components/menu/MenuFooter";
import {font} from "../../styles/Common";

export const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <StyledFooter>
            <Container>
            <FooterWrapper>
                <LeftSection>
                    <Name>FreshWave Cleaning</Name>
                    <PhoneNumber>Ph: 04 90 927593</PhoneNumber>
                    <Button width={'130px'} height={'35px'} onClick={openModal} borderRadius={'5px'}>Our Privacy Policy</Button>
                    {isModalOpen && <PrivacyPolicyModal closeModal={closeModal} />}
                </LeftSection>
                <MenuWrapper>
                    <MenuFooter menuItems={['Home','About Us','Cleaning Service','Contact']} color={'white'}/>
                </MenuWrapper>
            </FooterWrapper>
            <Copyright>© 2024 FreshWave Cleaning, All Rights Reserved.</Copyright>
            </Container>
        </StyledFooter>
    );
};

// Styled components

const StyledFooter = styled.footer`
    background-color: #85C5E9; /* Голубой цвет фона */
    padding: 20px;
    //color:${theme.colors.secondaryText}
`;

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Выравнивание элементов по левому краю */
    gap: 20px; /* Расстояние между элементами */
    @media ${theme.media.tablet} {
        align-items: center;

    }
`;

const Name = styled.div`
    //font-family: 'Montserrat', sans-serif;
    //font-weight: 600;
    //font-size: 20px;
    text-align: center;
    padding-left: 14px;
    //color:${theme.colors.secondaryText}
    ${font({
        family: '"Montserrat", sans-serif',
        weight: 600,
        color:'white',
        Fmin: 16,
        Fmax: 20,
    })}
`;

const PhoneNumber = styled.div`
    //font-family: 'Montserrat', sans-serif;
    //font-weight: 600;
    //font-size: 20px;
    text-align: center;
    padding-left: 14px;
    // color:$ {theme.colors.secondaryText}
    ${font({
        family: '"Montserrat", sans-serif',
        weight: 600,
        color:'white',
        Fmin: 16,
        Fmax: 20,
    })}

`;

const MenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 20;
padding-right: 180px;
    @media ${theme.media.tablet} {
    flex-grow: 0;
    padding-right: 0;
        margin-top: 36px;
        margin-bottom: 11px;
}
    color:${theme.colors.secondaryText}

`;

const Copyright = styled.small`
    display: block;
    text-align: center;
    font-weight: 400;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.5);
`;
 const FooterWrapper=styled.div`
 
  display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    text-align:  center;
     
     @media ${theme.media.tablet} {
         flex-direction: column;

     }
 `