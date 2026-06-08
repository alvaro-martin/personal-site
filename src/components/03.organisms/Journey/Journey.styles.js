import styled from "styled-components";

const JourneyWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4rem 0;
    padding-top: 4rem;
`;

const JourneyTitle = styled.h1`
    color: ${p=>p.theme.fontColor1};
    font-weight: bold;
    font-size: 3rem;
`;

const JourneySubtitle = styled.p`
    color: ${p=>p.theme.fontColor3};
    font-size: 1.5rem;
    margin: 1rem 0;
`;

const ExperienceWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 5rem 1fr;
    grid-template-rows: repeat(8, 1fr);
    width: 50rem;
    @media(max-width: 650px){
        width: 30rem;
    }
`;

const ExperienceSubwrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 10rem;
    grid-column: ${p=>p.gcs} / ${p=>p.gce};
    grid-row: ${p=>p.grs} / ${p=>p.gre};
`;

const ExperienceTitle = styled.p`
    color: ${p=>p.theme.fontColor1};
    font-size: 2rem;
    font-weight: bold;
    @media(max-width: 650px){
       font-size: 1.5rem;
    }
`;

const CompanySubtitle = styled.p`
    color: ${p=>p.theme.fontColor3};
    font-size: 1.8rem;
    margin-bottom: .5rem;
    @media(max-width: 650px){
        font-size: 1.5rem;
    }
`;

const DateWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Date = styled.p`
    color: ${p=>p.theme.fontColor3};
    font-size: 1.5rem;
    margin-left: .5rem;
`;

const DecoratorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: ${p=>p.gcs} / ${p=>p.gce};
    grid-row: ${p=>p.grs} / ${p=>p.gre};
`;

const Circle = styled.div`
    width: 2.3rem;
    height: 2.3rem;
    border-radius: 50%;
    background: ${p=>p.theme.background2};
`;

const Stick = styled.div`
    background: ${p=>p.theme.background2};
    width: .2rem;
    height: 10rem;
`;

export {
    JourneyWrapper,
    JourneyTitle,
    JourneySubtitle,
    ExperienceWrapper,
    ExperienceSubwrapper,
    ExperienceTitle,
    CompanySubtitle,
    DateWrapper,
    Date,
    DecoratorWrapper,
    Circle,
    Stick
};