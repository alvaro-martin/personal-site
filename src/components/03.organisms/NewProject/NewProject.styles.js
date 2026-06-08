import styled from "styled-components";

const NewProjectWrapper = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: ${p => p.theme.background2};
    width: 70rem;
    height: 30rem;
    border-radius: 3rem;
    margin: 4rem 0;
    @media(max-width: 600px){
        flex-direction: column;
        width: 30rem;
        height: 54rem;
    }
`;

const NewProjectTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const PNewProjectTitle = styled.p`
    font-weight: bold;
    font-size: 3rem;
    color: ${p=>p.theme.fontColor2};
    margin: 2rem 0 1rem 2rem;
`;

const NewProjectImageWrapper = styled.div`
    width: 500px;
    margin: 0 -4rem 0 0;
    @media screen and (max-width: 560px) {
        width: 250px;
    }
`;

const PNewProjectSubtitle = styled.p`
    font-size: 1.7rem;
    color: ${p=>p.theme.fontColor2};
    margin: 2rem 0 1rem 2rem;
`;

const NewProjectButton = styled.a`
    background: ${p=>p.theme.background4};
    color: ${p => p.theme.fontColor4}; 
    font-weight: bold;
    font-size: 2rem;
    border-radius: .5rem;
    border: none;
    width: 17rem;
    height: 6rem;
    margin: 1rem 0 0 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
`;

export {
    NewProjectWrapper,
    NewProjectTextWrapper,
    NewProjectImageWrapper,
    PNewProjectTitle, 
    PNewProjectSubtitle,
    NewProjectButton
};