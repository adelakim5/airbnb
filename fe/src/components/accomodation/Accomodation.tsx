import React, { useEffect, useReducer, useState } from 'react';
import styled from 'styled-components';
import { ReservationDispatchContext, ReservationStateContext } from '../../Contexts';
import { sampleAccomodationData } from '../../data/accomodation.js';
import { ReservationContext } from '../../shared/interface';
import reservationReducer from '../../shared/reservationReducer';
import Header from '../header/Header';
import Searcher from '../searcher/Searcher';
import AccomodationList from './accomodationComponents/AccomodationList';
import Map from './accomodationComponents/Map';
// import { loadMapApi } from './accomodationComponents/GoogleMapUtils';
// import Map from './accomodationComponents/Map';

const initialState = {
    location: {
        id: 0,
        address: '',
        latitude: null,
        logitude: null,
    },
    checkIn: {
        year: 0,
        month: 0,
        day: 0,
    },
    checkOut: {
        year: 0,
        month: 0,
        day: 0,
    },
    fee: [0, 100],
    people: {
        adult: 0,
        children: 0,
        kids: 0,
    },
} as ReservationContext;

const Accomodation = (): React.ReactElement => {
    const tmpReservationState = sessionStorage.getItem('reservationState');
    const initialReservationState = tmpReservationState !== null ? JSON.parse(tmpReservationState) : initialState;

    const [reservationState, reservationDispatch] = useReducer(reservationReducer, initialReservationState);
    const [fullState, setFullState] = useState(false);

    const [sampleData, setSampleData] = useState(sampleAccomodationData.rooms);

    return (
        <ReservationDispatchContext.Provider value={reservationDispatch}>
            <ReservationStateContext.Provider value={reservationState}>
                <AccomodationPage>
                    <HeaderSection>
                        <Header isFull={fullState} setFullState={setFullState} />
                        {fullState && <Searcher />}
                    </HeaderSection>
                    <AccomodationSection onClick={() => setFullState(false)}>
                        <AccomodationList rooms={sampleAccomodationData.rooms} />
                        <Map />
                    </AccomodationSection>
                </AccomodationPage>
            </ReservationStateContext.Provider>
        </ReservationDispatchContext.Provider>
    );
};

export default Accomodation;

const HeaderSection = styled.section`
    background: #ddd;
`;

const AccomodationPage = styled.div`
    border: 1px solid red;
`;

const AccomodationSection = styled.section`
    display: flex;
    height: 100vh;
    width: 100%;
    overflow: scroll;
`;
