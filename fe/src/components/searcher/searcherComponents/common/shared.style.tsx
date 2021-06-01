import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    // border: 1px solid green;
`;

const Tab = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4px;
`;

const NavigatingText = styled.p`
    font-size: 12px;
    line-height: 17px;
    margin-top: 16px;
    margin-left: 24px;
    font-weight: bold;
`;

const ResultText = styled.p`
    margin-left: 24px;
`;

export { Container, Tab, NavigatingText, ResultText };
