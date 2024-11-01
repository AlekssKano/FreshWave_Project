import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/logo";
import {MenuHeader} from "../../components/menu/MenuHeader";
import {Container} from "../../components/container/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Button} from "../../components/Button";
import {MenuMobile} from "../../components/menu/MenuMobile";

export const Header = () => {
    return (
        <Styled_Header>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
            <Logo/>
            <MenuHeader menuItems={['Home','About Us','Cleaning Service','Contact']}/>
                    <MenuMobile menuItems={['Home','About Us','Cleaning Service','Contact']}/>
                    <Button width={'130px'} height={'35px'} >Book Now</Button>
                </FlexWrapper>
            </Container>
        </Styled_Header>
    );
};

const Styled_Header = styled.header`
    background-color: rgba(255, 255, 255, 0.6);
    //position: fixed;
    //top: 0;
    //left: 0;
    //right: 0;
    //z-index: 9999;

`