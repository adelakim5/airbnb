import React, { useEffect } from 'react';
import { AccomodationModalType } from 'shared/interface';
import styled from 'styled-components';
import Header from './modalComponents/Header';
import ReservationInfo from './modalComponents/ReservationInfo';
import PriceInfo from './modalComponents/PriceInfo';
import { URL } from 'util/urls';
import { useReservationState } from 'hooks/ReservationHook';

interface ModalProps {
    selectedAccomodation: AccomodationModalType | null;
    setModalLayer: (param: boolean) => void;
}

const Modal = ({ selectedAccomodation, setModalLayer }: ModalProps): React.ReactElement => {
    const { checkIn, checkOut, people } = useReservationState();

    const closeModal = (event: MouseEvent) => {
        const $target = event.target as HTMLElement;
        const $modal = $target.closest('.modalBox');
        const $marker = $target.closest('.marker');
        if ($modal || $marker) return;
        setModalLayer(false);
    };

    useEffect(() => {
        document.body.addEventListener('click', closeModal);
        return () => document.body.removeEventListener('click', closeModal);
    }, []);

    if (!selectedAccomodation) return <></>;

    const { rental_fee_per_night, num_of_review, diff, name, id } = selectedAccomodation;

    const requestPostReservation = () => {
        const { adult, children, kids } = people;

        const reservationData = {
            check_in: `${checkIn.year}-${checkIn.month}-${checkIn.day}`,
            check_out: `${checkOut.year}-${checkOut.month}-${checkOut.day}`,
            num_of_adults: adult,
            num_of_children: children,
            num_of_infants: kids,
            total_price: rental_fee_per_night * diff,
        };

        fetch(URL.endPoint + URL.postReservation(id), {
            method: 'POST',
            body: JSON.stringify(reservationData),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        alert('예약이 완료되었습니다.');
        setModalLayer(false);
    };

    return (
        <ModalBackground className="modalBackground">
            <ModalBox className="modalBox">
                <Header {...{ rental_fee_per_night, num_of_review, name }} />
                <ReservationInfo />
                <ReservationButton onClick={requestPostReservation}>예약하기</ReservationButton>
                <Message>예약 확정 전에는 요금이 청구되지 않습니다.</Message>
                <PriceInfo {...{ rental_fee_per_night, diff }} />
                <Divider />
                <PriceSum>
                    <span>총 합계</span>
                    <span>₩{(rental_fee_per_night * diff).toLocaleString()}</span>
                </PriceSum>
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
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);
    border-radius: 10px;
`;

const ReservationButton = styled.button`
    width: 352px;
    height: 55px;
    background: #333;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
`;

const Message = styled.p`
    text-align: center;
    font-size: 12px;
    color: #4f4f4f;
`;

const Divider = styled.span`
    width: 100%;
    height: 1px;
    background: #e0e0e0;
`;

const PriceSum = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: bold;
`;
