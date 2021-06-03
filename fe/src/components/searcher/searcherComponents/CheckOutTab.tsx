import React from 'react';
import { useReservationDispatch, useReservationState } from 'hooks/ReservationHook';
import { useSearcherDispatch, useSearcherState } from 'hooks/SearcherHook';
import Calendar from './calendar/Calendar';
import { isNotCheckedDate } from './calendar/calendarChecker';
import { CloseButton, Container, DateText, NavigatingText, ResultText, Tab } from './common/shared.style';
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
            <Tab onClick={handleCalendarLayer} isClicked={checkOutCalendarLayer}>
                <NavigatingText>체크아웃</NavigatingText>
                <DateText>
                    <ResultText>{!isNotCheckedDate(checkOut) ? `${year} - ${month} - ${day}` : '날짜입력'}</ResultText>
                    {!isNotCheckedDate(checkOut) && (
                        <CloseButton>
                            <CloseIcon fontSize="small" onClick={handleCancel} />
                        </CloseButton>
                    )}
                </DateText>
                {checkOutCalendarLayer && <Calendar isCheckIn={false} />}
            </Tab>
        </Container>
    );
};

export default CheckOutTab;
