import React from 'react';
import { useSearcherDispatch, useSearcherState } from 'hooks/SearcherHook';
import styled from 'styled-components';
import Calendar from './calendar/Calendar';
import { Container, Tab, NavigatingText, ResultText, CloseButton, DateText } from './common/shared.style';
import { useReservationDispatch, useReservationState } from 'hooks/ReservationHook';
import { isNotCheckedDate } from './calendar/calendarChecker';
import CloseIcon from '@material-ui/icons/Close';

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
                <DateText>
                    <ResultText>{!isNotCheckedDate(checkIn) ? `${year} - ${month} - ${day}` : '날짜입력'}</ResultText>
                    {!isNotCheckedDate(checkIn) && (
                        <CloseButton>
                            <CloseIcon fontSize="small" onClick={handleCancel} />
                        </CloseButton>
                    )}
                </DateText>
            </Tab>
            {checkInCalendarLayer && <Calendar isCheckIn={true} />}
        </Container>
    );
};

export default CheckInTab;
