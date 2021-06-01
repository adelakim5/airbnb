import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { Container, NavigatingText, ResultText, Tab } from './common/shared.style';
import { Link } from 'react-router-dom';
import { useSearcherDispatch, useSearcherState } from '../../../hooks/SearcherHook';
import { PeopleCount } from '../../../shared/interface';
import { useReservationDispatch, useReservationState } from '../../../hooks/ReservationHook';
import ModalLayer from './common/ModalLayer';
import { theme } from '../../../styles/theme';

const peopleType = {
    adult: '성인',
    children: '어린이',
    kids: '유아',
};

const peopleDescription = {
    adult: '만 13세 이상',
    children: '만 2~12세',
    kids: '만 2세 미만',
};

const PeopleTab = (): React.ReactElement => {
    const reservationState = useReservationState();
    // const reservationDispatch = useReservationDispatch();
    const { adult, children, kids } = reservationState.people;
    const { peopleLayer } = useSearcherState();
    const searcherDispatch = useSearcherDispatch();

    const [peopleCount, setPeopleCount] = useState<PeopleCount>({
        adult,
        children,
        kids,
    });

    const handlePeopleLayer: React.MouseEventHandler<HTMLDivElement> = () => {
        searcherDispatch({ type: 'SHOW_PEOPLE_LAYER', state: true });
    };

    const handleCount = (key: keyof PeopleCount, payload: number) => {
        let newCount = 0;
        if (payload >= 0) newCount = peopleCount[key] + payload;
        else newCount = peopleCount[key] + payload >= 0 ? peopleCount[key] + payload : 0;

        const currAdult = peopleCount.adult;
        const others = peopleCount.children + peopleCount.kids;
        if (currAdult <= 0 && newCount > 0) setPeopleCount({ ...peopleCount, adult: 1, [key]: newCount });
        else if (key === 'adult' && newCount <= 0 && others > 0) setPeopleCount({ ...peopleCount, adult: 1 });
        else setPeopleCount({ ...peopleCount, [key]: newCount });
    };

    const renderPeopleCountList = () => {
        const keys: Array<keyof PeopleCount> = ['adult', 'children', 'kids'];
        return (
            <PeopleCountContent>
                {keys.map((key) => (
                    <CountList>
                        <div>
                            <PeopleTypeTitle>{peopleType[key]}</PeopleTypeTitle>
                            <p>{peopleDescription[key]}</p>
                        </div>
                        <div>
                            <PeopleCountController>
                                <button className="addButton">
                                    <AddIcon onClick={() => handleCount(key, 1)} />
                                </button>
                                <p>{peopleCount[key]}</p>
                                <button className="removeButton">
                                    <RemoveIcon onClick={() => handleCount(key, -1)} />
                                </button>
                            </PeopleCountController>
                        </div>
                    </CountList>
                ))}
            </PeopleCountContent>
        );
    };

    const handleSearchWithAllReservationInfo = (e: React.MouseEvent<HTMLElement>) => {
        e.stopPropagation();
        localStorage.clear();
        localStorage.setItem('reservationState', JSON.stringify(reservationState));
    };

    const isGuestExisted = () => {
        const { adult, children, kids } = peopleCount;
        return adult + children + kids > 0;
    };

    return (
        <Container>
            <Tab onClick={handlePeopleLayer}>
                <PeopleTabBox>
                    <PeopleText>
                        <NavigatingText>인원</NavigatingText>
                        <ResultText>
                            {isGuestExisted()
                                ? `게스트: ${peopleCount.adult + peopleCount.children}, 유아: ${peopleCount.kids}`
                                : '게스트추가'}
                        </ResultText>
                    </PeopleText>
                    <Link to="/accomodation">
                        <SearchButton onClick={handleSearchWithAllReservationInfo}>
                            <SearchIcon />
                        </SearchButton>
                    </Link>
                </PeopleTabBox>
            </Tab>
            {peopleLayer && (
                <ModalLayer
                    options={{
                        width: theme.LayerSize.smWidth,
                        top: theme.LayerLocation.top,
                        left: theme.LayerLocation.far_left,
                        height: theme.LayerSize.smHeight,
                    }}
                >
                    {renderPeopleCountList()}
                </ModalLayer>
            )}
        </Container>
    );
};

export default PeopleTab;

const SearchButton = styled.button`
    width: 40px;
    height: 40px;
    background: #e84c60;
    border-radius: 30px;
    color: #fff;
    margin-top: 18px;
    margin-right: 18px;
`;

const PeopleTabBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 200px;
`;

const PeopleText = styled.div``;

const PeopleCountContent = styled.ul`
    margin: 32px 64px;
`;

const CountList = styled.li`
    height: 91px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
`;

const PeopleCountController = styled.div`
    display: flex;
    width: 110px;
    // border: 1px solid red;
    justify-content: space-between;

    button {
        all: unset;
        border-radius: 50%;
        border: 1px solid #828282;
        color: #828282;
        display: flex;
        align-items: center;
    }
`;

const PeopleTypeTitle = styled.h3``;