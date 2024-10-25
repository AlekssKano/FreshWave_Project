import React, { useState } from 'react';
import { Menu } from "../../components/menu/Menu";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { PrivacyPolicyModal } from "../../components/PrivacyPolicyModal";
import { FlexWrapper } from "../../components/FlexWrapper";

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
            <FlexWrapper direction="row" justify="space-between">
                <LeftSection>
                    <Name>FreshWave Cleaning</Name>
                    <PhoneNumber>Ph: 04 90 927593</PhoneNumber>
                    <Button onClick={openModal}>Our Privacy Policy</Button>
                    {isModalOpen && <PrivacyPolicyModal closeModal={closeModal} />}
                </LeftSection>
                <MenuWrapper>
                    <Menu menuItems={['Home','About Us','Cleaning Service','Contact']}/>
                </MenuWrapper>
            </FlexWrapper>
            <Copyright>© 2024 FreshWave Cleaning, All Rights Reserved.</Copyright>
        </StyledFooter>
    );
};

// Styled components

const StyledFooter = styled.footer`
    background-color: #85C5E9; /* Голубой цвет фона */
    padding: 20px;
`;

const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Выравнивание элементов по левому краю */
    gap: 10px; /* Расстояние между элементами */
`;

const Name = styled.div`
`;

const PhoneNumber = styled.div`
`;

const MenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`;

const Copyright = styled.small`
    display: block;
    text-align: center;
  
`;
