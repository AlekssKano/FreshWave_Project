import React, { useState } from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";

type CalculateItemProps = {
    title: string;
    timePerItem: number;
    onTimeChange: (timeChange: number) => void;
};

export const CalculateItem2 = ({ title, timePerItem, onTimeChange }: CalculateItemProps) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
        onTimeChange(timePerItem); // Увеличиваем общее время
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
            onTimeChange(-timePerItem); // Уменьшаем общее время
        }
    };

    return (
        <StyledCalculateItem>
            {title}
            <StyledPlusMinus>
                <PlusMinus onClick={increment}>+</PlusMinus>
                <Zero>{count}</Zero>
                <PlusMinus onClick={decrement}>-</PlusMinus>
            </StyledPlusMinus>
        </StyledCalculateItem>
    );
};

const StyledCalculateItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid #ccc;
    ${font({ family: "'Montserrat', sans-serif", weight: 500, color: '#000', letterSpacing: '0.14em', Fmax: 20, Fmin: 14 })}
`;

const StyledPlusMinus = styled.div`
    display: flex;
    align-items: center;
`;

const PlusMinus = styled.span`
    border: 3px solid #51b9d9;
    width: 40px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const Zero = styled.span`
    padding: 20px;
    @media ${theme.media.mobile} {
        padding: 10px;
    }
`;
