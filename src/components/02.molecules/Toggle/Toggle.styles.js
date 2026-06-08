import styled from "styled-components";

const IconToogleWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 13rem;
    height: 4rem;
    font-size: 3rem;
    color: ${p => p.theme.fontColor5};
    margin: 0 3rem;
`;

const ToggleWrapper = styled.div`
    width: 50px;
    min-width: 50px;
    height: 25px;
    border-radius: 25px;
    border: 1px solid ${p => p.theme.fontColor5};
    margin: auto;
    display: flex;
`;

const Notch = styled.div`
    height: 21px;
    width: 21px;
    border: 1px solid ${p => p.theme.fontColor5};
    margin-top: 1px;
    background: ${p => p.theme.fontColor5};
    border-radius: 50%;
    transition: transform 0.1s linear;
    transform: translate(${p => p.isActive ? '26px' : '1px'});
    cursor: pointer;
`;



export {IconToogleWrapper, ToggleWrapper, Notch};