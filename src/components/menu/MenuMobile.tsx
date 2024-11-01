import React from 'react';
import styled, {css} from "styled-components";
import {Button} from "../Button";
import {theme} from "../../styles/Theme";


export const MenuMobile = (props: { menuItems: Array<string>, color?: string }) => {
    return (
        <Styled_Mobile_Menu>
            <BurgerButton isOpen={false}>
                <span></span>
            </BurgerButton>
            <MobileMenuPopUp isOpen={false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <ListItem key={index}>
                            <Link href={''} color={'#126ABA'}>{item}</Link>

                        </ListItem>

                    })}
                </ul>
                <Button width={'130px'} height={'35px'}>Book Now</Button>

            </MobileMenuPopUp>

            ; </Styled_Mobile_Menu>)
};

const Styled_Mobile_Menu = styled.nav`

    display: none;
    @media ${theme.media.tablet} {

        display: block;
    }


`


const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: #E8F1F9;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(-100%);
    transition: 1s ease-out;

    ul {
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        transition: 1s ease-out;
    }

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: translateY(0);

        & ul {
            gap: 30px;
        }
    `}

`
const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    top: -100px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 9999999;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.accent};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);

        `}
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.accent};
            position: absolute;

            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);

            `}
        }

        &::after {
            content: "";
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${theme.colors.accent};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;

            `}
        }
    }

`


const ListItem = styled.li`
    position: relative;
`
const Link = styled.a<{ color?: string }>`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: ${({color}) => color || '#51B9D9'};;


    &:hover {
        //font-size: 17px;
        text-decoration: underline;
    }
`