import React, {useState} from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {PrivacyPolicyModal} from "../../../components/PrivacyPolicyModal";
import {Container} from "../../../components/container/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from './Contact_Styles'
export const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <S.Contacts id={'contact'}>
            <Container>
                <FlexWrapper direction="column" justify="center" align={'center'}>
            <SectionTitle>Contact</SectionTitle>
            <S.SectionText>Please fill out the form below and we will get in touch with you within 24 hours to give you a custom quote.</S.SectionText>
            <S.Form>
                <S.Field placeholder={'First Name'} required={true}/>
                <S.Field placeholder={'Last Name'}/>
                <S.Field type={'email'} placeholder={'Email'} required={true}/>
                <S.Field type={'tel'} placeholder={' Phone number'} required={true}/>
                <S.Field as="select">
                    <option value="">Select Frequency*</option>
                    <option value="option1">Weekly</option>
                    <option value="option2">Fortnightly</option>
                    <option value="option3">Monthly</option>
                    <option value="option3">One-time</option>
                    <option value="option3">Move-out cleaning</option>
                </S.Field>
                <S.Field as={'select'}>
                    <option value="">Select Type of service*</option>
                    <option value="option1">Basic residential clean</option>
                    <option value="option2">Spring Cleaning</option>
                    <option value="option3">Bond Cleaning</option>
                </S.Field>
                <S.Field as={"textarea"} placeholder={'Your message'}/>
                <S.TextAndButtonWrapper>
                <S.Text>
                    <p>By clicking the "Submit" button, you agree to our <S.PrivacyLink onClick={openModal}>
                        Privacy Policy</S.PrivacyLink>. Please note that all prices are estimates based on the information you provided.</p>
                    <p> Satisfaction Guarantee: If you are not fully satisfied with your cleaning, we offer a free re-cleaning. However, we do not provide refunds once a cleaning has been completed. To qualify for the re-cleaning, you must contact us within 48 hours after the service.</p>
                    <p>I agree to the terms and conditions.</p>
                </S.Text>
                <Button width={'200px'} height={'50px'} fontSize={'20px'} type={"submit"}>Submit form</Button>
            </S.TextAndButtonWrapper>
            </S.Form>
            {isModalOpen && <PrivacyPolicyModal closeModal={closeModal} />}
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};

