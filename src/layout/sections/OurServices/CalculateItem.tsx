import React from 'react';
import styled from "styled-components";

type CalculateItemProps = {
    title: string;
}
export const CalculateItem = (props:CalculateItemProps) => {
    return (
        <StyledCalculateItem>
            {props.title}
            <StyledPlusMinus>
            <div>+</div>
            <div>0</div>
            <div>-</div>
            </StyledPlusMinus>

        </StyledCalculateItem>
    );
};

const StyledCalculateItem=styled.div`
    display: flex;
    justify-content: space-between; /* Размещаем элементы по разным сторонам */
    align-items: center;            /* Выравниваем элементы по вертикали */
    padding: 10px;
    width: 100%;                    /* Контейнер занимает всю ширину */
    border-bottom: 1px solid #ccc;  /* Линия для разделения строк */
    `
const StyledPlusMinus=styled.div`
    display: flex;
    align-items: center;

`
// `
// const Title = styled.h3`
//     margin: 0;
// `;