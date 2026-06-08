import styled, {keyframes} from "styled-components";

const HeroWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 6.5rem 0 0 0;
    padding-top: 9rem;
    @media(max-width: 778px){
        flex-direction: column-reverse;
    }
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 37rem;
    @media(max-width: 650px){
        width: 30rem;
    }
`;

const clipImage = keyframes`
    0% {
        clip-path: circle(45% at 50% 50%);
    }

    50% {
        clip-path: circle(50% at 50% 50%);
    }

    100% {
        clip-path: circle(45% at 50% 50%);
    }
`;

const H1Hero = styled.h1`
    color: ${p=>p.theme.fontColor1};
    font-weight: bold;
    font-size: 3.1rem;
    margin-bottom: 1rem;
`;

const PTitle = styled.p`
    color: ${p=>p.theme.fontColor3};
    font-weight: bold;
    font-size: 2rem;
`;

const PDescription = styled.p`
    color: ${p=>p.theme.fontColor3};
    font-size: 1.5rem;
    margin: 1rem 0;
`;

const ImageWrapper = styled.div`
    width: 250px;
    height: 250px;
    margin: 3rem;
    animation: 1s ${clipImage} infinite;
    background: ${p => p.theme.background2};
    display: flex;
    justify-content: center;
    align-items: center;
    @media(max-width: 650px){
        width: 200px;
        height: 200px;
    }
`;

const ButtonHero = styled.a`
    background: ${p => p.theme.background2};
    color: ${p=>p.theme.fontColor2};
    font-weight: bold;
    font-size: 2rem;
    border-radius: .5rem;
    border: none;
    width: 17rem;
    height: 6rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
`;

const LinkAnchor = styled.a`
    color: ${p=>p.theme.fontColor4};
    font-size: 2rem;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    margin: .6rem 0;
`;

const NetworkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media(max-width: 778px){
        flex-direction: row;
    }
`;

export {
    HeroWrapper, 
    TextWrapper, 
    H1Hero, 
    ImageWrapper,
    PTitle,
    PDescription,
    ButtonHero,
    LinkAnchor,
    NetworkWrapper
};