import styled from "styled-components";
import {theme} from "../styles/Theme";

type ButtonProps={
    width?:string
    height?:string
    fontSize?:string
    borderRadius?:string
    isActive?: boolean; // Новый пропс для контроля активности
onClick?:()=>void;
}

export const Button = styled.button<ButtonProps>`
    position: relative;
    z-index: 9999 !important;
    width: ${({width}) => width || "120px"};
    height: ${({height}) => height || "30px"};
    background-color: ${({isActive}) => isActive ? theme.colors.accent : theme.colors.accent}; // Изменение фона при активной кнопке
    color: ${({isActive}) => isActive ? theme.colors.primaryText : theme.colors.secondaryText}; // Изменение цвета текста при активной кнопке

    border-radius: 10px;
    font-size: ${({fontSize}) => fontSize || "14px"};
    margin: 10px;
    border: ${({isActive}) => isActive ? `2px solid ${theme.colors.primaryText}` : "none"}; // Бордер для активной кнопки


    &:hover {
        border: 1px solid #3d9dba;

    }
    &:active {
        transform: scale(0.98); /* Эффект нажатия */
    }
    
`