import React, { useReducer } from 'react';
import styled from 'styled-components';
import { SearcherContext } from '../../shared/interface';
import LocationTab from './searcherComponents/LocationTab';
import CheckInTab from './searcherComponents/CheckInTab';
import { SearcherStateContext, SearcherDispatchContext } from '../../Contexts';
import { searchReducer } from '../../shared/searchBarReducer';
import CheckOutTab from './searcherComponents/CheckOutTab';
import FeeTab from './searcherComponents/FeeTab';
import PeopleTab from './searcherComponents/PeopleTab';
import { useReservationDispatch, useReservationState } from '../../hooks/ReservationHook';

const initialSearcherState: SearcherContext = {
    locationList: [],
    inputOfLocation: '',
    locationLayer: false,
    checkInCalendarLayer: false,
    checkOutCalendarLayer: false,
    feeLayer: false,
    peopleLayer: false,
};

const Searcher = (): React.ReactElement => {
    const [searcherState, searcherDispatch] = useReducer(searchReducer, initialSearcherState);
    return (
        <Search>
            <SearcherStateContext.Provider value={searcherState}>
                <SearcherDispatchContext.Provider value={searcherDispatch}>
                    <FullBarSection className="searcher">
                        <LocationTab />
                        <CheckInTab />
                        <CheckOutTab />
                        <FeeTab />
                        <PeopleTab />
                    </FullBarSection>
                </SearcherDispatchContext.Provider>
            </SearcherStateContext.Provider>
        </Search>
    );
};

export default Searcher;

const Search = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 23px;
`;

const FullBarSection = styled.section`
    display: flex;
    width: 916px;
    height: 76px;
    background: #fff;
    position: relative;
    border: 1px solid #bdbdbd;
    border-radius: 60px;
    box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);
`;

// const AbbreviatedBarSection = styled.section``;

// const AbbreviatedPeriodTab = styled.div``;
// const AbbreviatedFeeTab = styled.div``;
// const AbbreviatedPeopleTab = styled.div``;
