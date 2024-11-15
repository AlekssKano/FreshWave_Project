import React, {useState} from 'react';
import {Button} from "../../Button";
import {S} from './Mobile_Styles_Menu'
import Typewriter from 'typewriter-effect';
import {items} from "../Desktop_Menu/DesktopMenu";

export const MenuMobile = (props: { color?: string }) => {
    const [menuisOpen, setMenuisOpen] = useState(false);
    const onBurgerClick = () => setMenuisOpen(!menuisOpen);
    const onClckHandler = () => {
        const targetElement = document.getElementById("contact");
        if (targetElement) {
            targetElement.scrollIntoView({behavior: "smooth", block: "start"});
        }
    }
    return (
        <S.Mobile_Menu>

            <S.BurgerButton isOpen={menuisOpen} onClick={onBurgerClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopUp isOpen={menuisOpen} onClick={() => {
                setMenuisOpen(false)
            }}>
                <ul>
                    {items.map((item, index) => {
                        return <S.ListItem key={index}>
                            <S.NavLink to={item.href}
                                       smooth={true}
                                       color={'#126ABA'}>
                                {item.title}
                            </S.NavLink>

                        </S.ListItem>

                    })}
                </ul>
                <Button width={'130px'} height={'35px'} onClick={onClckHandler}>Book Now</Button>

            </S.MobileMenuPopUp>

        </S.Mobile_Menu>)
};

