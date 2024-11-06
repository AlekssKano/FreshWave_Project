import React from 'react';
import {Logo} from "../../components/logo/logo";
import {DesktopMenu} from "../../components/menu/Desktop_Menu/DesktopMenu";
import {Container} from "../../components/container/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Button} from "../../components/Button";
import {MenuMobile} from "../../components/menu/Mobile_Menu/MenuMobile";
import {S} from './Header_Styles'


const items = ['Home', 'About Us', 'Cleaning Service', 'Contact']
export const Header: React.FC = () => {
    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <DesktopMenu menuItems={items}/>
                    <MenuMobile menuItems={items}/>
                    <S.ButtonPartHeader><Button width={'130px'} height={'35px'}>Book Now</Button></S.ButtonPartHeader>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};

