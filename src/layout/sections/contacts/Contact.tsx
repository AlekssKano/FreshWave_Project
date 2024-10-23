import React, {useState} from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {PrivacyPolicyModal} from "../../../components/PrivacyPolicyModal";

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
            <SectionTitle>Contact</SectionTitle>
            <div>Please fill out the form below and we will get in touch with you within 24 hours to give you a custom quote.</div>
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
                <Button type={"submit"}>Submit form</Button>
            </TextAndButtonWrapper>
            </StyledForm>
            {isModalOpen && <PrivacyPolicyModal closeModal={closeModal} />}

        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    min-height: 50vh;
    background-color: bisque;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding: 10px;


`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-wrap: wrap; /* Элементы будут переноситься */
    gap: 10px; /* Расстояние между полями */
    


`
const Field = styled.input`

    width: calc(50% - 5px); /* Ширина для двух колонок с учётом gap */
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;

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
`
const StyledText = styled.span`
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