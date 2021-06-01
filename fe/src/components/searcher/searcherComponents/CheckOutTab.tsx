import React from 'react';
import styled from 'styled-components';
import { useReservationDispatch, useReservationState } from '../../../hooks/ReservationHook';
import { useSearcherDispatch, useSearcherState } from '../../../hooks/SearcherHook';
import Calendar from './calendar/Calendar';
import { isNotCheckedDate } from './calendar/calendarChecker';
import { Container, NavigatingText, ResultText, Tab } from './common/shared.style';
import CloseIcon from '@material-ui/icons/Close';

const CheckOutTab = (): React.ReactElement => {
    const { checkOut } = useReservationState();
    const reservationDispatch = useReservationDispatch();
    const { checkOutCalendarLayer } = useSearcherState();
    const searcherDispatch = useSearcherDispatch();

    const handleCalendarLayer: React.MouseEventHandler<HTMLDivElement> = () => {
        searcherDispatch({ type: 'SHOW_CHECKOUT_CALENDAR_LAYER', state: true });
    };

    const handleCancel = () => {
        reservationDispatch({ type: 'RESET_DATE' });
    };

    const { year, month, day } = checkOut;

    return (
        <Container>
            <Tab onClick={handleCalendarLayer}>
                <NavigatingText>체크아웃</NavigatingText>
                <CheckOutDateText>
                    <ResultText>{!isNotCheckedDate(checkOut) ? `${year} - ${month} - ${day}` : '날짜입력'}</ResultText>
                    {!isNotCheckedDate(checkOut) && <CloseIcon onClick={handleCancel}></CloseIcon>}
                </CheckOutDateText>
                {checkOutCalendarLayer && <Calendar isCheckIn={false} />}
            </Tab>
        </Container>
    );
};

export default CheckOutTab;

const CheckOutDateText = styled.div`
    line-height: 23px;
    display: flex;
`;
