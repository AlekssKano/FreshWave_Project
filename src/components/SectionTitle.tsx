import styled from "styled-components";
import {font} from "../styles/Common";


export const SectionTitle= styled.h2`
    font-family: "Oswald", sans-serif;
    font-weight: 700;
    font-size: 48px;
    letter-spacing: 0.09em;
    color: #52525e;
    text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);   
    text-align: center;
    
    ${font({family:'"Oswald", sans-serif', weight:700,color: '#52525e' ,Fmin:25, Fmax:54,letterSpacing:'0.09em'})}
    
`