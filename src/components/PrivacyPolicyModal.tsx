import styled from "styled-components";
type PrivacyPolicyModalProps ={
    closeModal: () => void;  // Явно указываем тип функции
}

export const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ closeModal }) => {
    return (
        <ModalOverlay>
            <ModalContent>
                <CloseButton onClick={closeModal}>&times;</CloseButton>
                <ModalBody>
                    <h2>Privacy Policy</h2>
                    <p>
                        FreshWave Cleaning is committed to providing quality services to you, and this policy outlines
                        our ongoing obligations to you in respect of how we manage your Personal Information.
                    </p>
                    <p>
                        We have adopted the Australian Privacy Principles (APPs) contained in the Privacy Act 1988 (Cth)
                        (the Privacy Act). The APPs govern the way in which we collect, use, disclose, store, secure,
                        and dispose of your Personal Information.
                    </p>
                    <p>
                        A copy of the Australian Privacy Principles may be obtained from the website of The Office of
                        the Australian Information Commissioner at <a href="https://www.oaic.gov.au" target="_blank"
                                                                      rel="noopener noreferrer">https://www.oaic.gov.au</a>.
                    </p>

                    <h3>What is Personal Information and why do we collect it?</h3>
                    <p>
                        Personal Information is information or an opinion that identifies an individual. Examples of
                        Personal Information we collect include names, addresses, email addresses, and phone numbers.
                    </p>
                    <p>
                        This Personal Information is obtained in various ways including [correspondence, by telephone,
                        by email, via our website www.freshwavecleaning.com.au, and from third parties]. We do not
                        guarantee the accuracy or policies of third-party websites or services.
                    </p>
                    <p>
                        We collect your Personal Information for the primary purpose of providing our services to you,
                        communicating with our clients, and for marketing. We may also use your Personal Information for
                        secondary purposes closely related to the primary purpose, in circumstances where you would
                        reasonably expect such use or disclosure. You may unsubscribe from our mailing/marketing lists
                        at any time by contacting us in writing.
                    </p>
                    <p>
                        When we collect Personal Information, we will, where appropriate and possible, explain why we
                        are collecting the information and how we plan to use it.
                    </p>

                    <h3>Sensitive Information</h3>
                    <p>
                        Sensitive information is defined in the Privacy Act to include information or opinions about an
                        individual’s racial or ethnic origin, political opinions, religious beliefs, or health
                        information.
                    </p>
                    <p>
                        Sensitive information will only be used by us:
                    </p>
                    <ul>
                        <li>For the primary purpose for which it was obtained.</li>
                        <li>For a secondary purpose that is directly related to the primary purpose.</li>
                        <li>With your consent, or where required or authorized by law.</li>
                    </ul>

                    {/* Add the rest of your privacy policy content here, similarly formatted with <p>, <h3>, and other appropriate HTML tags */}

                    <h3>Policy Updates</h3>
                    <p>
                        This Policy may change from time to time and is available on our website.
                    </p>

                    <h3>Privacy Policy Complaints and Enquiries</h3>
                    <p>If you have any queries or complaints about our Privacy Policy, please contact us at:</p>
                    <p>
                        FreshWave Cleaning<br/>
                        William Street, Athol Park, 5012<br/>
                        Phone – 61 0490927593
                    </p>
                </ModalBody>
            </ModalContent>
        </ModalOverlay>
    );
};

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    max-width: 600px;
    width: 100%;
    max-height: 80vh; /* Ограничиваем высоту модального окна */
    overflow-y: auto; /* Добавляем прокрутку при переполнении */
    position: relative;
`;

const ModalBody = styled.div`
    max-height: 70vh; /* Ограничиваем высоту контента */
    overflow-y: auto; /* Включаем прокрутку */
    padding-right: 15px; /* Чтобы не перекрывать полосу прокрутки */
`;

const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 24px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 20px;
`;
