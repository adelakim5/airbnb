import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { useReservationState } from 'hooks/ReservationHook';
import SearchButton from './searcherComponents/common/SearchButton';

interface AbbreviatedSearcherProps {
    setFullState: (param: boolean) => void;
}

const AbbreviatedSearcher = ({ setFullState }: AbbreviatedSearcherProps) => {
    const reservationState = useReservationState();
    const { checkIn, checkOut, fee, people } = reservationState;
    const [checkInMonth, checkInDay] = [checkIn.month, checkIn.day];
    const [checkOutMonth, checkOutDay] = [checkOut.month, checkOut.day];
    const { adult, children, kids } = people;

    const handleSearchWithAllReservationInfo = (e: React.MouseEvent<HTMLElement>): void => {
        e.stopPropagation();
        sessionStorage.setItem('reservationState', JSON.stringify(reservationState));
    };

    return (
        <AbbreviatedBarSection onClick={() => setFullState(true)}>
            <AbbreviatedPeriodTab>
                {checkInMonth}월 {checkInDay}일 - {checkOutMonth}월 {checkOutDay}일
            </AbbreviatedPeriodTab>
            <AbbreviatedFeeTab>
                {fee[0]}만원 - {fee[1]}만원
            </AbbreviatedFeeTab>
            <AbbreviatedPeopleTab>
                게스트: {adult + children}명 {kids > 0 ? `유아: ${kids}명` : ``}
                {/* <ButtonTab> */}
                <SearchButton isFullVersion={false} searchHandler={handleSearchWithAllReservationInfo} />
                {/* </ButtonTab> */}
            </AbbreviatedPeopleTab>
        </AbbreviatedBarSection>
    );
};

export default AbbreviatedSearcher;

const AbbreviatedBarSection = styled.section`
    display: flex;
    background: #fff;
    border-radius: 30px;
    border: 1px solid #bdbdbd;
    width: 410px;
    height: 48px;
    text-align: center;
    font-size: 12px;
    // padding: 0 15px;
`;

const Tab = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding-left: 15px;
    &:hover {
        border-radius: 60px;
        background: #f7f7f7;
    }
`;

const AbbreviatedPeriodTab = styled(Tab)`
    width: 100%;
    height: 100%;
`;
const AbbreviatedFeeTab = styled(Tab)`
    width: 100%;
    height: 100%;
`;
const AbbreviatedPeopleTab = styled(Tab)`
    width: 100%;
    height: 100%;
    gap: 10px;
`;

const ButtonTab = styled(Tab)``;
