import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { GoogleMap, useJsApiLoader, OverlayView } from '@react-google-maps/api';
import { apiKey } from '../private.js';
import dateDiff from '../dateDiff.js';
import { useReservationState } from 'hooks/ReservationHook';
import { AccomodationType, ReservationContext } from 'shared/interface.js';

interface LatLng {
    lat: number;
    lng: number;
}

const mapContainerStyle = {
    width: `100vw`,
    height: `100vh`,
};

const initCenter: LatLng = { lat: 37.566536, lng: 126.977966 };

interface MapProps {
    currAccomodations: AccomodationType[];
    filterAccomodations: (params: number[]) => void;
    showSelectedAccomodationModal: (arg1: AccomodationType, arg2: number) => void;
    initialReservationState: ReservationContext;
}

const Map = (props: MapProps): React.ReactElement => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    });

    const { currAccomodations, filterAccomodations, showSelectedAccomodationModal, initialReservationState } = props;
    const { latitude, longitude } = initialReservationState.location;
    const [center, setCenter] = useState({ lat: initCenter.lat, lng: initCenter.lng });

    useEffect(() => {
        if (!latitude || !longitude) return;
        setCenter({ lat: latitude, lng: longitude });
    }, []);

    const [, setMap] = useState<unknown | null>(null);
    const mapRef = useRef<any>(null);
    const { checkIn, checkOut } = useReservationState();

    const diff = dateDiff(
        `${checkIn.year}-${checkIn.month}-${checkIn.day}`,
        `${checkOut.year}-${checkOut.month}-${checkOut.day}`,
    );

    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const onUnMount = useCallback(() => setMap(null), []);

    let debounceTimer: ReturnType<typeof setTimeout>;

    const relocatePriceMarker = () => {
        const maxLat = mapRef.current.getBounds().getNorthEast().lat();
        const maxLng = mapRef.current.getBounds().getNorthEast().lng();
        const minLat = mapRef.current.getBounds().getSouthWest().lat();
        const minLng = mapRef.current.getBounds().getSouthWest().lng();
        filterAccomodations([maxLat, maxLng, minLat, minLng]);
    };

    const setDebouncedTimer = () => {
        if (debounceTimer !== null) clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            relocatePriceMarker();
        }, 500);
    };

    useEffect(() => {
        if (!mapRef.current) return;
        setDebouncedTimer();
    }, []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={14}
            center={center}
            onUnmount={onUnMount}
            onLoad={onMapLoad}
            onCenterChanged={setDebouncedTimer}
        >
            {currAccomodations.map((accomodation) => {
                const { latitude, longitude, rental_fee_per_night } = accomodation;
                return (
                    <PriceMarker onClick={() => showSelectedAccomodationModal(accomodation, diff)}>
                        <OverlayView position={{ lat: latitude, lng: longitude }} mapPaneName={OverlayView.FLOAT_PANE}>
                            <PriceLabel className="marker">
                                <PriceText>₩{rental_fee_per_night.toLocaleString()}</PriceText>
                            </PriceLabel>
                        </OverlayView>
                    </PriceMarker>
                );
            })}
        </GoogleMap>
    ) : (
        <LoadingMap />
    );
};

export default Map;

const PriceMarker = styled.div``;

const PriceLabel = styled.div`
    background: #fff;
    width: 95px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 4px rgba(204, 204, 204, 0.5), 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    &:hover {
        transform: scale(1.1);
        transition: 300ms;
    }
`;

const PriceText = styled.p`
    font-weight: 600;
    font-size: 15px;
`;

const LoadingMap = styled.div`
    background: #ddd;
`;
