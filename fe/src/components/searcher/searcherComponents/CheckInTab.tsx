import React from 'react';
import { useSearcherDispatch, useSearcherState } from 'hooks/SearcherHook';
import Calendar from './calendar/Calendar';
import { Container, Tab, NavigatingText, ResultText, DateText } from './common/shared.style';
import { useReservationDispatch, useReservationState } from 'hooks/ReservationHook';
import { isNotCheckedDate } from './calendar/calendarChecker';
import CloseButton from './common/CloseButton';

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
            <Tab onClick={handleCalendarLayer} isClicked={checkInCalendarLayer}>
                <NavigatingText>체크인</NavigatingText>
                <DateText>
                    <ResultText>{!isNotCheckedDate(checkIn) ? `${year} - ${month} - ${day}` : '날짜입력'}</ResultText>
                    {!isNotCheckedDate(checkIn) && (
                        <CloseButton handleCancel={handleCancel} />
                        // <CloseButton onClick={handleCancel}>
                        //     <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        //         <path
                        //             d="M1 1L7 7"
                        //             stroke="#333333"
                        //             stroke-width="2"
                        //             stroke-linecap="round"
                        //             stroke-linejoin="round"
                        //         />
                        //         <path
                        //             d="M7 1L1 7"
                        //             stroke="#333333"
                        //             stroke-width="2"
                        //             stroke-linecap="round"
                        //             stroke-linejoin="round"
                        //         />
                        //     </svg>
                        // </CloseButton>
                    )}
                </DateText>
            </Tab>
            {checkInCalendarLayer && <Calendar isCheckIn={true} />}
        </Container>
    );
};

export default CheckInTab;
