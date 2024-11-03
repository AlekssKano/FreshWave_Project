import {theme} from "./Theme";

type FontPropsType={
    family?:string
    weight?:number
    color?:string
    lineHeight?:number
    Fmin?:number
    Fmax?:number
    letterSpacing?:string
}

export const font=({family, weight, color,lineHeight, Fmin,Fmax, letterSpacing}:FontPropsType)=>`
font-family: ${family || 'Poppins'};
font-weight: ${weight || 400};
color: ${color || theme.colors.accent};
line-height: ${lineHeight || 1.2};
letter-spacing: ${letterSpacing || '0'};
font-size: calc( (100vh - 360px) / (1140 - 360) *(${Fmax} - ${Fmin}) + ${Fmin}px)

`