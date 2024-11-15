import React, { useState } from 'react';
import { DesktopMenu } from "../../components/menu/Desktop_Menu/DesktopMenu";
import styled from "styled-components";
import { Button } from "../../components/Button";
import { PrivacyPolicyModal } from "../../components/PrivacyPolicyModal";
import { FlexWrapper } from "../../components/FlexWrapper";
import {Container} from "../../components/container/Container";
import {theme} from "../../styles/Theme";
import {MenuFooter} from "../../components/menu/MenuFooter";
import {font} from "../../styles/Common";
import {S} from './Footer_Styles'
export const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <S.Footer>
            <Container>
            <S.FooterWrapper>
                <S.LeftSection>
                    <S.Name>FreshWave Cleaning</S.Name>
                    <S.PhoneNumber>Ph: 04 90 927593</S.PhoneNumber>
                    <Button width={'130px'} height={'35px'} onClick={openModal} borderRadius={'5px'}>Our Privacy Policy</Button>
                    {isModalOpen && <PrivacyPolicyModal closeModal={closeModal} />}
                </S.LeftSection>
                <S.MenuWrapper>
                    <MenuFooter color={'white'}/>
                </S.MenuWrapper>
            </S.FooterWrapper>
            <S.Copyright>© 2024 FreshWave Cleaning, All Rights Reserved.</S.Copyright>
            </Container>
        </S.Footer>
    );
};

