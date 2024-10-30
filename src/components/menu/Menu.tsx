import React from 'react';
import styled from "styled-components";
import {Button} from "../Button";
import {theme} from "../../styles/Theme";


export const Menu = (props: { menuItems: Array<string>, color?:string }) => {
    return (
        <Styled_Menu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href={''} color={props.color}>{item}</Link>

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
const Link = styled.a<{ color?: string }>`
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: ${({ color }) => color || '#51B9D9'};;
    

    &:hover{
    //font-size: 17px;
    text-decoration: underline;
}
`