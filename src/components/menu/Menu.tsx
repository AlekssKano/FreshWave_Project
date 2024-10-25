import React from 'react';
import styled from "styled-components";
import {Button} from "../Button";

export const Menu = (props: { menuItems: Array<string> }) => {
    return (
        <Styled_Menu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href={''}>{item}</Link>

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

    }`

const ListItem=styled.li`
position: relative;
`
const Link = styled.a`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 15px;
&:hover{
    //font-size: 17px;
    text-decoration: underline;
}
`