import styled from "styled-components";

const FooterWrapper = styled.footer`
    background: ${p => p.theme.background5};
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 4rem 1rem 6rem;
`;

const FooterSubwrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 4rem;
    width: 100%;
    @media(max-width: 900px){
        flex-direction: column;
    }
`;

const MyDescriptionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 2rem 0;
    @media(max-width: 900px){
        align-items: center; 
    }
`;

const PMade = styled.p`
    font-size: 1.7rem;
    color: ${p=>p.theme.fontColor2};
    margin: 1rem;
`;

const PCopyright = styled.p`
    font-size: 1.5rem;
    color: ${p=>p.theme.fontColor3};
    margin: 2rem;
`;

const PFooterTitle = styled.p`
    color: ${p=>p.theme.fontColor2};
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: .5rem;
`;

const PFooterDescription = styled.p`
    color: ${p=>p.theme.fontColor2};
    font-size: 1.5rem;
`;

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 0 2rem 0;
    flex-wrap: wrap;
`;

const LinkAnchor = styled.a`
    color: ${p=>p.theme.fontColor2};
    font-size: 2rem;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
`;

const NetworkWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export {
    FooterWrapper,
    FooterSubwrapper,
    MyDescriptionWrapper,
    PCopyright,
    PMade,
    PFooterTitle,
    PFooterDescription,
    LinksWrapper,
    LinkAnchor,
    NetworkWrapper
};