import React from 'react';
import styled from "styled-components";

type ServicePropsType={
    title: string,
    description: string,
    src: string,
}
export const Service = (props:ServicePropsType) => {
    return (
        <div>
            <Photo src={props.src}/>
<h4>{props.title}</h4>
            <span>{props.description}</span>

        </div>
    );
};

const Photo = styled.img`
width: 350px;
height: 320px; //исправь потом размеры

`
