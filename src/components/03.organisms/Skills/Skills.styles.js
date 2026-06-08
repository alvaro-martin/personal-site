import styled from "styled-components";

const SkillsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
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

const SkillHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 35rem;
`;

const SkillSubHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: ${p=>p.theme.fontColor4};
`;

const SkillSubSubHeader = styled.div`
    display: flex;
    flex-direction: column;
    color: ${p=>p.theme.fontColor1};
    margin-left: 1rem;
`;

const PTitle = styled.p`
    font-weight: bold;
    font-size: 2rem;
`;

const Psubtitle = styled.p`
    color: ${p=>p.theme.fontColor3};
    font-size: 1.2rem;
`;

const SingleSkillSubListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SingleSkillSubwrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
`;

const SkillsSubwrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`;

const SkillsListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SingleSkillWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0;
`;

const SingleSkillSubwrapperText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 35rem;
`;

const ProgressBar = styled.div`
    width: 35rem;
    height: 1rem;
    background: linear-gradient(to right, ${p=>p.theme.background2} ${p=>p.percent} , ${p=>p.theme.background3} ${p=>p.percent});
    margin-top: .5rem;
`;

const PSingleSkillTitle = styled.p`
    font-weight: bold;
    font-size: 1.4rem;
    color: ${p=>p.theme.fontColor1};
`;

const PSingleSkillPercent = styled.p`
    font-size: 1.4rem;
    color: ${p=>p.theme.fontColor3};
`;

const SquareDiv = styled.div`
    cursor: pointer;
    color: ${p=>p.theme.fontColor4};
`;

export {
    SkillsWrapper,
    SectionTitle,
    SectionSubtitle,
    SkillsSubwrapper,
    SingleSkillSubwrapper,
    SkillsListWrapper,
    SkillHeader,
    SingleSkillWrapper,
    SkillSubHeader,
    PTitle,
    SkillSubSubHeader,
    Psubtitle,
    SingleSkillSubListWrapper,
    SingleSkillSubwrapperText,
    ProgressBar,
    PSingleSkillTitle,
    PSingleSkillPercent,
    SquareDiv
};