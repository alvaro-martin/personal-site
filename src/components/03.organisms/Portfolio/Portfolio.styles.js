import styled from "styled-components";

const PortfolioWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4rem 0;
    padding-top: 9rem;
`;

const PortfolioTitle = styled.h1`
    color: ${p=>p.theme.fontColor1};
    font-weight: bold;
    font-size: 3rem;
`;

const PortfolioSubtitle = styled.p`
    color: ${p=>p.theme.fontColor3};
    font-size: 1.5rem;
    margin: 1rem 0;
`;

const ProjectWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const ArrowWrapper = styled.div`
    width: 4rem;
    height: 4rem;
    cursor: pointer;
`;

const ProjectSubWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0 2rem;
    @media(max-width: 1000px){
        flex-direction: column;
    }
`;

const PortfolioImageWrapper = styled.div`
    width: 500px;
    height: 350px;
    margin: 1rem;
    img {
        border-radius: 1rem;
    }
    @media(max-width: 650px){
        width: 200px;
        height: 220px;
        margin: 1rem 0;
    }
`;

const DescWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
`;

const DescTitle = styled.p`
    color: ${p=>p.theme.fontColor1};
    font-weight: bold;
    font-size: 2rem;
    width: 30rem;
    margin-bottom: 2rem;
    @media(max-width: 650px){
        width: 20rem;
    }
`;

const DescDescription = styled.p`
    color: ${p=>p.theme.fontColor3};
    font-size: 1.5rem;
    width: 30rem;
    margin-bottom: 2rem;
    @media(max-width: 650px){
        width: 20rem;
    }
`;

const PortfolioButton = styled.a`
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

export {
    PortfolioWrapper,
    PortfolioTitle,
    PortfolioSubtitle,
    ProjectWrapper,
    ArrowWrapper,
    ProjectSubWrapper,
    PortfolioImageWrapper,
    DescWrapper,
    DescTitle,
    DescDescription,
    PortfolioButton
};