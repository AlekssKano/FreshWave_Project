import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Desktop_Menu  = styled.nav`
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        margin-right: 15px;

    }
@media ${theme.media.tablet}{
    
    display: none;
}

`

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

export const S ={
    Desktop_Menu,
    ListItem,
    Link
}