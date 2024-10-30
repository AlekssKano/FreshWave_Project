import React, {useState} from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {PrivacyPolicyModal} from "../../../components/PrivacyPolicyModal";
import {Container} from "../../../components/container/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <StyledContacts>
            <Container>
                <FlexWrapper direction="column" justify="center" align={'center'}>
            <SectionTitle>Contact</SectionTitle>
            <SectionText>Please fill out the form below and we will get in touch with you within 24 hours to give you a custom quote.</SectionText>
            <StyledForm>
                <Field placeholder={'First Name'} required={true}/>
                <Field placeholder={'Last Name'}/>
                <Field type={'email'} placeholder={'Email'} required={true}/>
                <Field type={'tel'} placeholder={' Phone number'} required={true}/>
                <Field as="select">
                    <option value="">Select Frequency*</option>
                    <option value="option1">Weekly</option>
                    <option value="option2">Fortnightly</option>
                    <option value="option3">Monthly</option>
                    <option value="option3">One-time</option>
                    <option value="option3">Move-out cleaning</option>
                </Field>
                <Field as={'select'}>
                    <option value="">Select Type of service*</option>
                    <option value="option1">Basic residential clean</option>
                    <option value="option2">Spring Cleaning</option>
                    <option value="option3">Bond Cleaning</option>
                </Field>
                <Field as={"textarea"} placeholder={'Your message'}/>
                <TextAndButtonWrapper>
                <StyledText>
                    <p>By clicking the "Submit" button, you agree to our <PrivacyLink onClick={openModal}>
                        Privacy Policy</PrivacyLink>. Please note that all prices are estimates based on the information you provided.</p>
                    <p> Satisfaction Guarantee: If you are not fully satisfied with your cleaning, we offer a free re-cleaning. However, we do not provide refunds once a cleaning has been completed. To qualify for the re-cleaning, you must contact us within 48 hours after the service.</p>
                    <p>I agree to the terms and conditions.</p>
                </StyledText>
                <Button width={'200px'} height={'50px'} fontSize={'20px'} type={"submit"}>Submit form</Button>
            </TextAndButtonWrapper>
            </StyledForm>
            {isModalOpen && <PrivacyPolicyModal closeModal={closeModal} />}
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    //background-color: #d5cdcd;



`

const StyledForm = styled.form`
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
const StyledText = styled.small`
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