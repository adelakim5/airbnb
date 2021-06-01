import React, { lazy, useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { GoogleMap, useJsApiLoader, OverlayView } from '@react-google-maps/api';
import { getGeocode, getLatLng } from 'use-places-autocomplete';
import { apiKey } from '../private.js';

interface LatLng {
    lat: number;
    lng: number;
}

const mapContainerStyle = {
    width: `100vw`,
    height: `100vh`,
};

const createSampleData = () => {
    const result = [];
    for (let i = 0; i < 20; i++) {
        const lat = Math.random() + 37;
        const lng = Math.random() + 127;
        const price = Math.floor((Math.random() + 1) * 100);
        result.push({ lat, lng, price });
    }
    return result;
};

const center: LatLng = { lat: 37.566536, lng: 126.977966 };

const Map = (): React.ReactElement => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    });

    const [map, setMap] = useState<unknown | null>(null);
    const sampleData = createSampleData();

    const mapRef = useRef<any>(null);

    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    const onUnMount = useCallback((map) => setMap(null), []);

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={9}
            center={center}
            onUnmount={onUnMount}
            onLoad={onMapLoad}
            onDragEnd={() => {
                navigator.geolocation.getCurrentPosition((position) => {
                    panTo({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                });
            }}
        >
            {sampleData.map(({ lat, lng, price }) => (
                <PriceMarkerButton onClick={() => alert(`${price},000원 숙소`)}>
                    <OverlayView position={{ lat, lng }} mapPaneName={OverlayView.FLOAT_PANE}>
                        <PriceLabel>
                            <PriceText>₩{price},000</PriceText>
                        </PriceLabel>
                    </OverlayView>
                </PriceMarkerButton>
            ))}
        </GoogleMap>
    ) : (
        <div>Loading...</div>
    );
};

export default Map;

const PriceMarkerButton = styled.button``;

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
