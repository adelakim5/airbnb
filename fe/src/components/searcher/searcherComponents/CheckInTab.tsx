import React from 'react';
import { useSearcherDispatch, useSearcherState } from '../../../hooks/SearcherHook';
import styled from 'styled-components';
import Calendar from './calendar/Calendar';
import { Container, Tab, NavigatingText, ResultText } from './common/shared.style';
import { useReservationDispatch, useReservationState } from '../../../hooks/ReservationHook';
import { isNotCheckedDate } from './calendar/calendarChecker';

const CheckInTab = (): React.ReactElement => {
    const { checkIn } = useReservationState();
    const reservationDispatch = useReservationDispatch();
    const { checkInCalendarLayer } = useSearcherState();
    const searcherDispatch = useSearcherDispatch();

    const handleCalendarLayer: React.MouseEventHandler<HTMLDivElement> = () => {
        searcherDispatch({ type: 'SHOW_CHECKIN_CALENDAR_LAYER', state: true });
    };

    const handleCancel = () => {
        reservationDispatch({ type: 'RESET_DATE' });
    };

    const { year, month, day } = checkIn;

    return (
        <Container>
            <Tab onClick={handleCalendarLayer}>
                <NavigatingText>체크인</NavigatingText>
                <CheckInDateText>
                    <ResultText>{!isNotCheckedDate(checkIn) ? `${year} - ${month} - ${day}` : '날짜입력'}</ResultText>
                    {!isNotCheckedDate(checkIn) && <button onClick={handleCancel}>취소</button>}
                </CheckInDateText>
            </Tab>
            {checkInCalendarLayer && <Calendar isCheckIn={true} />}
        </Container>
    );
};

export default CheckInTab;

const CheckInDateText = styled.div`
    display: flex;
`;
