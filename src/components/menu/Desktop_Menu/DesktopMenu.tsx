import React from 'react';
import styled from "styled-components";
import {Button} from "../../Button";
import {theme} from "../../../styles/Theme";
import {S} from './Desktop_Styles_Menu'

export const DesktopMenu: React.FC<{ menuItems: Array<string>, color?:string }> = (props: { menuItems: Array<string>, color?:string }) => {
    return (
        <S.Desktop_Menu >
            <ul>
                {props.menuItems.map((item, index) => {
                    return <S.ListItem key={index}>
                        <S.Link href={''} color={props.color}>{item}</S.Link>

                    </S.ListItem>
                })}
            </ul>

        </S.Desktop_Menu >
)
    ;
};
