import styled from "styled-components";

const Contacts = styled.section`
    //background-color: #d5cdcd;
    position: relative;




`

const Form = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-wrap: wrap; /* Элементы будут переноситься */
    gap: 10px; /* Расстояние между полями */
    
     textarea{
         resize: none;
     }
    


`
const Field = styled.input`

    width: calc(50% - 5px); /* Ширина для двух колонок с учётом gap */
    padding: 10px;
    border: 1px solid rgba(60, 140, 198, 0.25);
    border-radius: 4px;
    box-sizing: border-box;
    background-color: rgba(60, 140, 198, 0.25);

    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.05em;
    color: rgba(73, 80, 87, 0.9);

    &:nth-child(7) { /* textarea будет занимать всю ширину */
        width: 100%;
        height: 100px;
    }

    &[as="select"] {
        -webkit-appearance: none; /* Скрыть стандартную стрелку */
        -moz-appearance: none;
        appearance: none;
        background-color: white;
        padding: 10px;
        width: calc(50% - 5px); /* Одинаковая ширина с input */
        border-radius: 4px;
        border: 1px solid #ccc;
    }

    &:focus-visible {
        outline: 1px solid rgba(60, 140, 198, 0.5);
    }
`
const Text = styled.small`
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    color: rgba(0, 0, 0, 0.5);
`

const SectionText=styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    width: 60%;
    font-size: 20px;
    text-align: center;
    color: #000;
    padding: 36px 0 34px  0;
`
const TextAndButtonWrapper = styled.div`
    width: 100%; /* Занимаем всю ширину */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px; /* Расстояние между текстом и кнопкой */
    margin-top: 20px;
`;
const PrivacyLink = styled.span`
    color: #007bff;
    text-decoration: underline;
    cursor: pointer;
`;
export const S ={
    Contacts,
    Form,
    Field,
    Text,
    TextAndButtonWrapper,
    SectionText,
    PrivacyLink
}