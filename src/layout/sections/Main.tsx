import React from 'react';
import styled from "styled-components";
import backgroundPhoto from './../../assets/images/mainBlur.webp'
import {FlexWrapper} from "../../components/FlexWrapper";

export const Main = () => {
    return (
        <BackgroundWrapper>
            <FlexWrapper direction="column" align={'flex-start'} justify={'center'} text_align={'left'} gap={'40px'}>

                <h1>Professional Cleaning Services
                    in Adelaide
                </h1>
                <span>
                Top-rated house cleaning service.
                Happiness Guaranteed. If you're not satisfied, we'll come back and make it right, free of charge.
            </span>
                <button>Request a quote</button>


            </FlexWrapper>
        </BackgroundWrapper>
    );
};

const Styled_Main = styled.div`
    //display: flex;
    //flex-direction: column; /* Устанавливаем вертикальное направление */
    //align-items: flex-start; /* Центрирование элементов по горизонтали (опционально) */
    //gap: 10px; /* Расстояние между элементами (опционально) */
`
const BackgroundWrapper = styled.div`
    background-image: url(${backgroundPhoto});
    background-size: cover;
    background-position: center;
    object-fit: cover;
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center; /* Центрирует содержимое по вертикали */
    align-items: center; /* Центрирует содержимое по горизонтали */
    padding-left: -25%; /* Смещает текст немного влево */

`;