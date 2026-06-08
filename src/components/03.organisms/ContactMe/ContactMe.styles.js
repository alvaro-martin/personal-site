import styled from "styled-components";

const ContactMeWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4rem 0;
    padding-top: 10rem;
`;

const SectionTitle = styled.h1`
    color: ${p=>p.theme.fontColor1};
    font-weight: bold;
    font-size: 3rem;
`;

const SectionSubtitle = styled.p`
    color: ${p=>p.theme.fontColor3};
    font-size: 1.5rem;
    margin: 1rem 0;
`;

const ContactSubWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0;
    @media(max-width: 778px){
        flex-direction: column;
    }
`;

const EmailLocationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 2rem;
`;

const EmailLocation = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: .5rem;
    color: ${p => p.theme.fontColor4};
`;

const EmailLocationData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: .5rem;
`;

const PEmailLocation = styled.p`
    color: ${p=>p.theme.fontColor1};
    font-weight: bold;
    font-size: 2.8rem;
    text-justify: center;
    margin-bottom: .6rem;
`;

const PEmailLocationData = styled.p`
    color: ${p=>p.theme.fontColor3};
    font-size: 1.5rem;
    text-align: center;
`;

const FormWrapper = styled.form`
    margin: 2rem;
    display: flex;
    flex-direction: column;
`;

const InputForm = styled.input`
    background: ${p=>p.theme.background3};
    width: 500px;
    color: ${p=>p.theme.fontColor3};
    font-size: 1.6rem;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 1rem;
    border: none;
    @media screen and (max-width: 560px) {
        width: 300px;
    }
`;

const MessageForm = styled.textarea`
    background: ${p=>p.theme.background3};
    width: 500px;
    color: ${p=>p.theme.fontColor3};
    font-size: 1.6rem;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 1rem;
    border: none;
    @media screen and (max-width: 560px) {
        width: 300px;
    }
`;

const ContactButton = styled.button`
    background: ${p => p.theme.background2};
    color: ${p=>p.theme.fontColor2};
    font-weight: bold;
    font-size: 2rem;
    border-radius: .5rem;
    border: none;
    width: 19rem;
    height: 6rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
    margin: 1rem 0;
`;

export {
    ContactMeWrapper, 
    SectionTitle, 
    SectionSubtitle,
    ContactSubWrapper,
    EmailLocationWrapper,
    EmailLocation,
    EmailLocationData,
    PEmailLocation,
    PEmailLocationData,
    FormWrapper,
    InputForm,
    MessageForm,
    ContactButton
};