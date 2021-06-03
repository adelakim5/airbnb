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
                {fee[0]} - {fee[1]}
            </AbbreviatedFeeTab>
            <AbbreviatedPeopleTab>
                게스트: {adult + children}명, 유아: {kids}명
            </AbbreviatedPeopleTab>
            <ButtonTab>
                <SearchButton isFullVersion={false} searchHandler={handleSearchWithAllReservationInfo} />
            </ButtonTab>
            {/* <div>
                <button className="tempButton">
                    <SearchIcon />
                </button>
            </div> */}
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
    padding: 0 15px;
`;

const Tab = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
`;

const ButtonTab = styled(Tab)``;
