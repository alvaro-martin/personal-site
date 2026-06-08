import styled from "styled-components";

const AboutWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 2rem 0;
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

const AboutSubWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
    @media(max-width: 778px) {
        flex-direction: column;
    }
`;

const AboutImageWrapper = styled.div`
    width: 250px;
    height: 350px;
    margin: 1rem;
    img {
        border-radius: 1rem;
    }
    `;

const PAbout = styled.p`
    color: ${p=>p.theme.fontColor3};
    font-size: 1.5rem;
    width: 35rem;
    margin: 0 0 2rem 0;
`;

const IntroductionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 2rem;
`;

const AboutButton = styled.a`
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
`;

const NumbersWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 2rem;
`;

const Number = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
    color: ${p=>p.theme.fontColor3};
    font-size: 1.5rem;
    width: 10rem;
`;

const PNumber = styled.p`
    color: ${p=>p.theme.fontColor1};
    font-weight: bold;
    font-size: 2.8rem;
    text-justify: center;
    margin-bottom: .6rem;
`;

const PNumberDescription = styled.p`
    color: ${p=>p.theme.fontColor3};
    font-size: 1.5rem;
    text-align: center;
`;

export {
    AboutWrapper,
    SectionTitle,
    SectionSubtitle, 
    AboutSubWrapper,
    AboutImageWrapper,
    AboutButton,
    IntroductionWrapper,
    PAbout,
    NumbersWrapper,
    Number,
    PNumber,
    PNumberDescription
};