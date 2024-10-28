import styled from "styled-components";
import {theme} from "../styles/Theme";

type ButtonProps={
    width?:string
    height?:string
    fontSize?:string
}

export const Button = styled.button<ButtonProps>`

    width: ${({ width }) => width || "120px"};
    height: ${({ height }) => height || "30px"};
    background-color:${theme.colors.accent};
    color:${theme.colors.secondaryText};
    border-radius: 5px;
    font-size: ${({ fontSize }) => fontSize || "14px"};
    margin: 10px;
`