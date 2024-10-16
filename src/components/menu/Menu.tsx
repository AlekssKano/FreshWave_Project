import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <Styled_Menu>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">About Us</a>
                </li>
                <li>
                    <a href="">Cleaning Service</a>
                </li>
                <li>
                    <a href="">Contact</a>
                </li>

            </ul>
        </Styled_Menu>
    );
};

const Styled_Menu = styled.nav`
    ul{
        display: flex;
        gap:30px;
        
    }`