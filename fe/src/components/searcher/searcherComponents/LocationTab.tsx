import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSearcherDispatch, useSearcherState } from 'hooks/SearcherHook';
import { LocationList, Location } from 'shared/interface';
import { mockupLocationData } from 'data/location';
import { useReservationDispatch } from 'hooks/ReservationHook';
import { Container, Tab, NavigatingText, ResultText } from './common/shared.style';
import BottomLayer from './common/BottomLayer';
import { theme } from 'styles/theme';
import useFetch from 'hooks/fetchHook';
import { URL } from 'util/urls';

const LocationTab = (): React.ReactElement => {
    const reservationDispatch = useReservationDispatch();
    const searcherState = useSearcherState();
    const searcherDispatch = useSearcherDispatch();

    const inputRef = useRef<HTMLInputElement>(null);
    let debounceTimer: ReturnType<typeof setTimeout>;
    const debounceTime = 400;

    const { locationLayer, locationList } = searcherState;

    const handleInputLayer: React.MouseEventHandler<HTMLDivElement> = () => {
        searcherDispatch({ type: 'SHOW_LOCATION_LAYER', state: true });
        if (inputRef?.current) {
            inputRef.current.disabled = false;
            inputRef.current.focus();
        }
    };

    const handleInputLocationList = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (debounceTimer) clearTimeout(debounceTimer);
        if (!event.target.value) {
            searcherDispatch({ type: 'SHOW_LOCATION_LIST', list: [] });
            return;
        }
        const strCurrLocationList = sessionStorage.getItem(event.target.value);
        if (strCurrLocationList !== null) {
            const currLocationList = JSON.parse(strCurrLocationList);
            searcherDispatch({ type: 'SHOW_LOCATION_LIST', list: currLocationList });
        } else {
            debounceTimer = setTimeout(() => {
                (async function getLocationData() {
                    const response = await fetch(URL.endPoint + URL.location(event.target.value));
                    const json = await response.json();
                    const currLocationList = json.location_list;
                    sessionStorage.setItem(event.target.value, JSON.stringify(currLocationList));
                    searcherDispatch({ type: 'SHOW_LOCATION_LIST', list: currLocationList });
                })();
            }, debounceTime);
        }
    };

    const setUpLocation = (place: Location) => {
        const { id, longitude, latitude, address } = place;
        reservationDispatch({ type: 'LOCATION', id, longitude, latitude, address });
        searcherDispatch({ type: 'SHOW_INPUTOFLOCATION', value: place.address });
        if (inputRef?.current) {
            inputRef.current.value = place.address;
            inputRef.current.blur();
        }
        searcherDispatch({ type: 'SHOW_CHECKIN_CALENDAR_LAYER', state: true });
    };

    return (
        <Container>
            <Tab onClick={handleInputLayer} isClicked={locationLayer}>
                <NavigatingText>위치</NavigatingText>
                <ResultText>
                    <LocationInput
                        placeholder="어디로 여행가세요?"
                        ref={inputRef}
                        onFocus={() => searcherDispatch({ type: 'SHOW_LOCATION_LAYER', state: true })}
                        onChange={handleInputLocationList}
                        disabled
                    />
                </ResultText>
            </Tab>
            {locationLayer && (
                <BottomLayer
                    options={{
                        width: theme.LayerSize.mdWidth,
                        top: theme.LayerLocation.top,
                        left: 0,
                        height: theme.LayerSize.mdHeight,
                    }}
                >
                    <LocationResultListAll>
                        {locationList?.map((place: Location) => (
                            <ResultList key={place.id} onClick={() => setUpLocation(place)}>
                                {place.address}
                            </ResultList>
                        ))}
                    </LocationResultListAll>
                </BottomLayer>
            )}
        </Container>
    );
};

export default LocationTab;

const LocationInput = styled.input`
    all: unset;
`;

const LocationResultListAll = styled.ul`
    margin: 60px;
`;

const ResultList = styled.li`
    margin-bottom: 10px;
`;
