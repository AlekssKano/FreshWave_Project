import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/logo";
import {Menu} from "../../components/menu/Menu";

export const Header = () => {
    return (
        <Styled_Header>
            <Logo/>
            <Menu/>
        </Styled_Header>
    );
};

const Styled_Header = styled.header`
    background-color: lightblue;
    display: flex;
    justify-content: space-between;
`