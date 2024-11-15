import {theme} from "../../../styles/Theme";
import styled, {css} from "styled-components";
import {Link} from "react-scroll";

const Mobile_Menu = styled.nav`
    position: relative; /* Относительное позиционирование для контейнера */
    
    
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
    position: absolute; /* Теперь кнопка будет позиционироваться относительно родителя */
    top: 0; /* Или используйте проценты для адаптации */
    right: 40px;
    width: clamp(40px, 30vw, 60px); /* Адаптируемая ширина */
    height: clamp(40px, 30vw, 60px); /* Адаптируемая высота */
    z-index: 999999;
    
    span {
        display: block;
        width: 36px;

        height: 2px;
        background-color: ${theme.colors.accent};
        position: absolute;
        left: 30px;
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
const NavLink = styled(Link)<{ color?: string }>`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: ${({color}) => color || '#51B9D9'};;


    &:hover {
        //font-size: 17px;
        text-decoration: underline;
    }
`

export const S ={
    Mobile_Menu,
    MobileMenuPopUp,
    NavLink,
    ListItem,
    BurgerButton

}