import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, NavigatingText, ResultText, Tab } from './common/shared.style';
import { Link } from 'react-router-dom';
import { useSearcherDispatch, useSearcherState } from 'hooks/SearcherHook';
import { PeopleCount } from 'shared/interface';
import { useReservationDispatch, useReservationState } from 'hooks/ReservationHook';
import { theme } from 'styles/theme';
import SearchButton from './common/SearchButton';
import BottomLayer from './common/BottomLayer';
import PeopleCountContent from './peopleComponents/PeopleCountContent';

const PeopleTab = (): React.ReactElement => {
    const reservationState = useReservationState();
    const reservationDispatch = useReservationDispatch();
    const { adult, children, kids } = reservationState.people;

    const { peopleLayer } = useSearcherState();
    const searcherDispatch = useSearcherDispatch();

    const [peopleCount, setPeopleCount] = useState({ adult, children, kids });

    const handlePeopleLayer: React.MouseEventHandler<HTMLDivElement> = () => {
        searcherDispatch({ type: 'SHOW_PEOPLE_LAYER', state: true });
    };

    const handleCount = (key: keyof PeopleCount, payload: number) => {
        let newCount = 0;
        if (payload >= 0) newCount = peopleCount[key] + payload;
        else newCount = peopleCount[key] + payload >= 0 ? peopleCount[key] + payload : 0;

        const currAdult = peopleCount.adult;
        const others = peopleCount.children + peopleCount.kids;
        let newPeopleCount = { ...peopleCount };
        if (currAdult <= 0 && newCount > 0) newPeopleCount = { ...peopleCount, adult: 1, [key]: newCount };
        else if (key === 'adult' && newCount <= 0 && others > 0) newPeopleCount = { ...peopleCount, adult: 1 };
        else newPeopleCount = { ...peopleCount, [key]: newCount };

        setPeopleCount(newPeopleCount);

        reservationDispatch({
            type: 'PEOPLE',
            adult: newPeopleCount.adult,
            children: newPeopleCount.children,
            kids: newPeopleCount.kids,
        });
    };

    const handleSearchWithAllReservationInfo = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        sessionStorage.setItem('reservationState', JSON.stringify(reservationState));
    };

    const isGuestExisted = () => {
        const { adult, children, kids } = peopleCount;
        return adult + children + kids > 0;
    };

    // const renderPeopleCountList = (): React.ReactElement => {
    //     return <PeopleCountContent {...{ handleCount, peopleCount }} />;
    // };

    return (
        <Container>
            <Tab onClick={handlePeopleLayer} isClicked={peopleLayer}>
                <PeopleTabBox>
                    <PeopleText>
                        <NavigatingText>인원</NavigatingText>
                        <ResultText>
                            {isGuestExisted()
                                ? `게스트: ${peopleCount.adult + peopleCount.children}명...`
                                : '게스트추가'}
                        </ResultText>
                    </PeopleText>
                    <Link to="/accomodation">
                        <SearchButton isFullVersion searchHandler={handleSearchWithAllReservationInfo} />
                    </Link>
                </PeopleTabBox>
            </Tab>
            {peopleLayer && (
                <BottomLayer
                    options={{
                        width: theme.LayerSize.smWidth,
                        top: theme.LayerLocation.top,
                        left: theme.LayerLocation.far_left,
                        height: theme.LayerSize.smHeight,
                    }}
                >
                    <PeopleCountContent {...{ handleCount, peopleCount }} />
                </BottomLayer>
            )}
        </Container>
    );
};

export default PeopleTab;

const PeopleTabBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;
`;

const PeopleText = styled.div`
    height: 100%;
`;
