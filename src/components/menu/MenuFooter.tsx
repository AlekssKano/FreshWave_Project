import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {items} from "./Desktop_Menu/DesktopMenu";
import {Link} from "react-scroll";

export const MenuFooter = (props: { color?:string }) => {
    return (
        <Styled_Menu>
            <ul>
                {items.map((item, index) => {
                    return <ListItem key={index}>
                        <NavLink to={item.href} smooth={true} color={props.color}>{item.title}</NavLink>

                    </ListItem>
                })}
            </ul>

        </Styled_Menu>
)
    ;
};

const Styled_Menu = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        margin-right: 15px;
@media ${theme.media.tablet}{
    flex-direction: column;

}

    }`

const ListItem=styled.li`
position: relative;

`
const NavLink = styled(Link)<{ color?: string }>`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: ${({ color }) => color || '#51B9D9'};;
    

    &:hover{
    //font-size: 17px;
    text-decoration: underline;
}
`