import React, {ElementRef, useRef, useState} from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {PrivacyPolicyModal} from "../../../components/PrivacyPolicyModal";
import {Container} from "../../../components/container/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from './Contact_Styles'
import emailjs from '@emailjs/browser';



export const Contact = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e:any) => {
        e.preventDefault();
if (!form.current) return
        emailjs.sendForm('service_8j1v15h', 'template_yd79du5', form.current, {
                publicKey: 'tCJZpAgKmXFWkRcBe',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
e.target.reset();
    };

    return (
        <S.Contacts id={'contact'}>
            <Container>
                <FlexWrapper direction="column" justify="center" align={'center'}>
            <SectionTitle>Contact</SectionTitle>
            <S.SectionText>Please fill out the form below and we will get in touch with you within 24 hours to give you a custom quote.</S.SectionText>
            <S.Form ref={form} onSubmit={sendEmail} >
                <S.Field placeholder={'First Name'} name={'user_name'} required={true}/>
                <S.Field placeholder={'Last Name'} name={'user_SirName'}/>
                <S.Field type={'email'} placeholder={'Email'} name={'user_email'} required={true}/>
                <S.Field type={'tel'} placeholder={' Phone number'} name={'user_phone'} required={true}/>
                <S.Field as="select" name={'wish_frequency'} required={true}>
                    <option value="">Select Frequency*</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Fortnightly">Fortnightly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="One-time">One-time</option>
                    <option value="Move-out cleaning">Move-out cleaning</option>
                </S.Field>
                <S.Field as={'select'} name={'type_Service'} required={true}>
                    <option value="">Select Type of service*</option>
                    <option value="Basic residential clean">Basic residential clean</option>
                    <option value="Spring Cleanin">Spring Cleaning</option>
                    <option value="Bond Cleaning">Bond Cleaning</option>
                </S.Field>
                <S.Field as={"textarea"} placeholder={'Your message'} name={'message'}/>
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

