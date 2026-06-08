import styled from "styled-components";

const ServicesWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4rem 0;
    padding-top: 9rem;
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

const ServicesCardsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 4rem 0 2rem 0;
`;

const ServicesCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${p=>p.theme.fontColor4};
    margin: 0 2rem 4rem 2rem;
    width: 20rem;
    height: 30rem;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);
    @media(max-width: 650px){
        width: 15rem;
    }
`;

const PServiceTitle = styled.p`
    color: ${p=>p.theme.fontColor1};
    font-weight: bold;
    font-size: 2.6rem;
    text-justify: center;
    margin: 1.5rem 0;
    height: 5.8rem;
    @media(max-width: 650px){
        font-size: 1.5rem;
    }
`;

const PViewMoreWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 3rem;
    cursor: pointer;
`;

const PViewMore = styled.p`
    color: ${p => p.theme.fontColor4};
    font-size: 1.5rem;
`;

const ServicePopupWrapper = styled.div`
    width: 50rem;
    height: 40rem;
    border-radius: 5rem;
    background: ${p=>p.theme.background1};
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -20rem;
    margin-left: -25rem;
    z-index: 2;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 450px) {
        width: 300px;
        margin-left: -150px;
    }
`;

const PopupBackground = styled.div`
    width: 100%;
    height: 100vh;
    background: rgb(0, 0, 0, 0.7);
    z-index: 1;
    position: fixed;
    bottom: 0;
    right: 0;
`;

const PopupTitle = styled.p`
    color: ${p=>p.theme.fontColor1};
    font-weight: bold;
    font-size: 2.6rem;
    text-justify: center;
    margin: 2.5rem 0 2rem 2rem;
    height: 5.8rem;
    width: 30rem;
`;

const PopupDataWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${p=>p.theme.fontColor4};
    margin: 1rem 0 2rem 1rem;
`;

const PopupData = styled.p`
    color: ${p=>p.theme.fontColor3};
    font-size: 1.6rem;
    margin-left: 1rem;
`;

const CrossPopup = styled.div`
    position: relative;
    left: 44rem;
    bottom: 9rem;
    color: ${p=>p.theme.fontColor4};
    cursor: pointer;
    @media screen and (max-width: 450px) {
        left: 32rem;
    }
`;

export {
    ServicesWrapper,
    SectionTitle,
    SectionSubtitle,
    ServicesCardsWrapper,
    ServicesCard,
    PServiceTitle,
    PViewMoreWrapper,
    PViewMore,
    ServicePopupWrapper,
    PopupBackground,
    PopupTitle,
    PopupDataWrapper,
    PopupData,
    CrossPopup
};