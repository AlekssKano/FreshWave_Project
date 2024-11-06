import React from 'react';
import {Button} from "../../Button";
import {S} from './Mobile_Styles_Menu'

export const MenuMobile = (props: { menuItems: Array<string>, color?: string }) => {
    return (
        <S.Mobile_Menu>

            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopUp isOpen={false}>
                <ul>
                    {props.menuItems.map((item, index) => {
                        return <S.ListItem key={index}>
                            <S.Link href={''} color={'#126ABA'}>{item}</S.Link>

                        </S.ListItem>

                    })}
                </ul>
                <Button width={'130px'} height={'35px'}>Book Now</Button>

            </S.MobileMenuPopUp>

             </S.Mobile_Menu>)
};

