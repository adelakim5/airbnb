import React from 'react';
import { AccomodationType } from 'shared/interface';
import styled from 'styled-components';

interface ModalProps {
    selectedAccomodation: AccomodationType | null;
}

const Modal = ({ selectedAccomodation }: ModalProps): React.ReactElement => {
    if (selectedAccomodation === null) return <div></div>;
    return (
        <ModalBackground>
            <ModalBox>
                <span>{JSON.stringify(selectedAccomodation)}</span>
            </ModalBox>
        </ModalBackground>
    );
};

export default Modal;

const ModalBackground = styled.section`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    z-index: 3;
`;

const ModalBox = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 400px;
    height: 542px;
    background: #fff;
`;
