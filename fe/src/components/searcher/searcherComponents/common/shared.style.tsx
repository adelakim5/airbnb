import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
`;

const Tab = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const NavigatingText = styled.p`
    font-size: 12px;
    line-height: 17px;
    margin: 16px 0px 4px 24px;
    font-weight: bold;
`;

const ResultText = styled.p`
    margin-left: 24px;
`;

const CloseButton = styled.button`
    all: unset;
    width: 30px;
    height: 30px;
    background: #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
`;

const DateText = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export { Container, Tab, NavigatingText, ResultText, CloseButton, DateText };
