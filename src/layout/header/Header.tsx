import React from 'react';
import {Logo} from "../../components/logo/logo";
import {DesktopMenu} from "../../components/menu/Desktop_Menu/DesktopMenu";
import {Container} from "../../components/container/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Button} from "../../components/Button";
import {MenuMobile} from "../../components/menu/Mobile_Menu/MenuMobile";
import {S} from './Header_Styles'



export const Header: React.FC = () => {
    const onClckHandler=()=>{
        const targetElement = document.getElementById("contact"); // Замените "home" на нужный ID
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }    }
    return (
        <S.Header id={'home'}>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <DesktopMenu/>
                    <MenuMobile/>
                    <S.ButtonPartHeader><Button width={'130px'} height={'35px'} onClick={onClckHandler} >Book Now</Button></S.ButtonPartHeader>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

