import React, { useReducer, useState } from 'react';
import styled from 'styled-components';
import { ReservationDispatchContext, ReservationStateContext } from 'Contexts';
import { sampleAccomodationData } from 'data/accomodation.js';
import { AccomodationType, ReservationContext } from 'shared/interface';
import reservationReducer from 'shared/reservationReducer';
import Header from '../header/Header';
import Searcher from '../searcher/Searcher';
import AccomodationList from './accomodationComponents/AccomodationList';
import Map from './accomodationComponents/Map';
import useFetch from 'hooks/fetchHook';
import { URL } from 'util/urls';

const initialState = {
    location: {
        id: 0,
        address: '',
        latitude: null,
        longitude: null,
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

    const [accomodationData, loading] = useFetch(URL.endPoint + URL.searchRoomWithQuery(initialReservationState));

    // console.log(reservationData);

    // console.log(URL.endPoint + URL.searchRoomWithQuery(initialReservationState));

    const [reservationState, reservationDispatch] = useReducer(reservationReducer, initialReservationState);
    const [fullState, setFullState] = useState(false);

    const [currAccomodations, setCurrAccomodations] = useState(sampleAccomodationData.rooms);

    const filterAccomodations = ([maxLat, maxLng, minLat, minLng]: number[]) => {
        const result = sampleAccomodationData.rooms.filter((room: AccomodationType) => {
            const { latitude, longitude } = room;
            return maxLat > latitude && maxLng > longitude && minLat < latitude && minLng < longitude;
        });
        setCurrAccomodations(result);
    };

    return (
        <ReservationDispatchContext.Provider value={reservationDispatch}>
            <ReservationStateContext.Provider value={reservationState}>
                <AccomodationPage>
                    <HeaderSection>
                        <Header isFull={fullState} setFullState={setFullState} />
                        {fullState && <Searcher />}
                    </HeaderSection>
                    <AccomodationSection onClick={() => setFullState(false)}>
                        <AccomodationList currAccomodations={currAccomodations} />
                        <Map {...{ currAccomodations, filterAccomodations }} />
                    </AccomodationSection>
                </AccomodationPage>
            </ReservationStateContext.Provider>
        </ReservationDispatchContext.Provider>
    );
};

export default Accomodation;

const HeaderSection = styled.section`
    background: #fff;
    box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.1), 0px 0px 4px rgba(51, 51, 51, 0.05);
    width: 100vw;
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
`;

const AccomodationPage = styled.div`
    border: 1px solid red;
`;

const AccomodationSection = styled.section`
    margin-top: 94px;
    display: flex;
`;
