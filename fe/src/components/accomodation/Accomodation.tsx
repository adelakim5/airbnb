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
import Modal from './accomodationComponents/common/Modal';

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

    // const [accomodationData, loading] = useFetch(URL.endPoint + URL.searchRoomWithQuery(initialReservationState));

    const [reservationState, reservationDispatch] = useReducer(reservationReducer, initialReservationState);
    const { people, fee } = reservationState;
    const { adult, children, kids } = people;

    const [modalLayer, setModalLayer] = useState(false);
    const [selectedAccomodation, setSelectedAccomodation] = useState<AccomodationType | null>(null);
    const [fullState, setFullState] = useState(false);

    const [currAccomodations, setCurrAccomodations] = useState(sampleAccomodationData.rooms);

    const filterAccomodations = ([maxLat, maxLng, minLat, minLng]: number[]) => {
        const result = sampleAccomodationData.rooms.filter((room: AccomodationType) => {
            const { latitude, longitude, rental_fee_per_night, person_capacity } = room;
            const peopleCount = adult + children + kids;
            return (
                maxLat > latitude &&
                maxLng > longitude &&
                minLat < latitude &&
                minLng < longitude &&
                person_capacity >= peopleCount &&
                rental_fee_per_night >= fee[0] * 10000 &&
                rental_fee_per_night <= fee[1] * 10000
            );
        });
        setCurrAccomodations(result);
    };

    return (
        <>
            <ReservationDispatchContext.Provider value={reservationDispatch}>
                <ReservationStateContext.Provider value={reservationState}>
                    <AccomodationPage>
                        <HeaderSection>
                            <Header isFull={fullState} setFullState={setFullState} />
                            {fullState && <Searcher />}
                        </HeaderSection>
                        <AccomodationSection onClick={() => setFullState(false)}>
                            <AccomodationList {...{ currAccomodations, setModalLayer, setSelectedAccomodation }} />
                            <Map {...{ currAccomodations, filterAccomodations }} />
                        </AccomodationSection>
                    </AccomodationPage>
                </ReservationStateContext.Provider>
            </ReservationDispatchContext.Provider>
            {modalLayer && <Modal selectedAccomodation={selectedAccomodation} />}
        </>
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

const AccomodationPage = styled.div``;

const AccomodationSection = styled.section`
    margin-top: 94px;
    display: flex;
`;
