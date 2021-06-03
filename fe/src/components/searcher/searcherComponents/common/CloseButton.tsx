import React from 'react';
import styled from 'styled-components';

interface CloseProps {
    handleCancel: () => void;
}

const CloseButton = ({ handleCancel }: CloseProps): React.ReactElement => {
    return (
        <Button onClick={handleCancel}>
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7 1L1 7" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </Button>
    );
};

export default CloseButton;

const Button = styled.button`
    all: unset;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 20px;
    &:hover {
        background: #ddd;
    }
`;
