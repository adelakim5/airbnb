import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
`;

interface TabProps {
    isClicked: boolean;
}

const Tab = styled.div<TabProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    cursor: pointer;
    &:hover {
        border-radius: 60px;
        background: #f7f7f7;
    }
    box-shadow: ${({ isClicked }) =>
        isClicked ? '0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05)' : 'none'};
    border-radius: ${({ isClicked }) => (isClicked ? '60px' : '0')};
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

const DateText = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export { Container, Tab, NavigatingText, ResultText, DateText };
