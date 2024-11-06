import styled from "styled-components";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";
import backgroundPhoto from '../../../assets/images/mainBlur.webp'

const Main = styled.section`

`
const BackgroundWrapper = styled.div`
        // background-image: url(${backgroundPhoto});
    background-image: url(${backgroundPhoto});

    background-size: cover;
    background-position: center;
    object-fit: cover;
    width: 100%;
    min-height: 100vh;
    height: 100%;

    display: flex;
    justify-content: center; /* Центрирует содержимое по вертикали */
    align-items: center; /* Центрирует содержимое по горизонтали */
    padding-left: -25%; /* Смещает текст немного влево */

    @media ${theme.media.mobile} {
        background-image: linear-gradient(180deg, #51B9D9, white);
    }
`;
const MainTitle = styled.h1`
    ${font({family:'"Oswald", sans-serif', weight:700,color:'white', Fmax:68, Fmin:35 })}
`


const MainText = styled.span`
    ${font({family:'"Montserrat", sans-serif', weight:400, color:'#fff', Fmax:28, Fmin:20 })}
   
`
const MainContainer = styled.div`
  
     max-width: 820px;
     max-height: 450px;
@media ${theme.media.mobile} {
    max-width: 820px;
    max-height: 100%;
}
`

const MobileMainPhotoWrapper = styled.img`
    width: 280px;
    height: 260px;
    border-radius: 15px;
    object-fit: cover;
    
    display: none;
    margin: 0 auto;
    
    
    @media ${theme.media.mobile} {
        
        display: block;
    }
`

export const S ={
    Main,
    MainText,
    MainContainer,
    MainTitle,
    MobileMainPhotoWrapper,
    BackgroundWrapper
}