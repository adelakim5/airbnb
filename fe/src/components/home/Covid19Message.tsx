import React from 'react';
import styled from 'styled-components';

const Covid19Message = (): React.ReactElement => {
    return <Message href="/">에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.</Message>;
};

export default Covid19Message;

const Message = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    width: 100%;
    height: 50px;
    color: #ddd;
    font-size: 14px;
    &: hover {
        color: gray;
    }
`;
