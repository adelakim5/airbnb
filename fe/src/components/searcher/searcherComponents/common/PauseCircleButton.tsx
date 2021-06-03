import React from 'react';
import styled from 'styled-components';

const PauseCircleButton = (): React.ReactElement => (
    <Circle>
        <svg width="2" height="8" viewBox="0 0 2 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7V1" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <svg width="2" height="8" viewBox="0 0 2 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7V1" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </Circle>
);

export default PauseCircleButton;

const Circle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2px;
`;
