import styled, {css} from "styled-components";

const HeaderWrapper = styled.header`
    background: ${p=>p.theme.background6};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 8rem;
    width: 100%;
    padding: 1rem;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 2;
    border-bottom: 1px solid ${p=>p.theme.background2};
    margin-bottom: 8rem;
`;

const LinkButtonsHeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 1200px) {
        ${p=>p.isOpen? 
         css`
            position: absolute;
            flex-direction: column;
            top: 6rem;
            right: 0;
            box-sizing: border-box;
            background: ${p=>p.theme.background6};
            width: 100%;
            z-index: 2;
            border: .1rem solid;
            padding: 2rem;
         `
         : 
         css`
            display: none;
         `
         }
    }
`;

const NavLinkWrapper = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 1200px) {
        ${p=>p.isOpen?
        css`
        flex-direction: column;
        ` 
        : 
        ''    
        };
    };
`;

const HeaderLink = styled.a`
    font-size: 2rem;
    color: ${p=>p.theme.fontColor1};
    font-weight: bold;
    padding: 1rem;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        color: ${p => p.theme.fontColor4};
    }
`;

const LanguageButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 1rem;
`;

const LanguageButton = styled.a`
    height: 30px;
    width: 53px;
    margin: 0 .3rem;
    cursor: pointer;
`;

const IconWrapper = styled.div`
    color: ${p=>p.theme.fontColor1};
    cursor: pointer;
    display: none;
    @media screen and (max-width: 1200px) {
        display: flex;
    };

    #menu {
        display: ${p=>p.isOpen ? 'none': 'block'};
    }

    #cross {
        display: ${p=>p.isOpen ? 'block' : 'none'};
    }
    
`;

export {
    HeaderWrapper, 
    LinkButtonsHeaderWrapper,
    NavLinkWrapper,
    HeaderLink,
    LanguageButtonWrapper,
    LanguageButton,
    IconWrapper
};