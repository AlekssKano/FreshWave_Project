import React from 'react';
import {S} from './Desktop_Styles_Menu'
// const items = ['Home', 'About Us', 'Cleaning Service', 'Contact']

export const items = [
    {
        title:'Home',
        href:'home'
    },
    {
        title:'About Us',
        href:'aboutUs'
    },
    {
        title:'Cleaning Service',
        href:'cleaningService'
    },
    {
        title:'Contact',
        href:'contact'
    },

]
export const DesktopMenu: React.FC<{ color?:string }> = (props: { color?:string }) => {
    return (
        <S.Desktop_Menu >
            <ul>
                {items.map((item, index) => {
                    return <S.ListItem key={index}>
                        <S.NavLink to={item.href} smooth={true} color={props.color}>{item.title}</S.NavLink>

                    </S.ListItem>
                })}
            </ul>

        </S.Desktop_Menu >
)
    ;
};
