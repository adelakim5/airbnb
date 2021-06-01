import React, { lazy, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GoogleMap, useJsApiLoader, InfoBox, Marker, OverlayView } from '@react-google-maps/api';
import { apiKey } from '../private.js';

interface LatLng {
    lat: number;
    lng: number;
}

const initialCenter: LatLng = {
    lat: 37.516528999662576,
    lng: 126.9934844774833,
};

const mapContainerStyle = {
    // width: `100%`,
    height: `100vh`,
};

const Map = (): React.ReactElement => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    });

    const [map, setMap] = useState<any>(null);

    const onLoad = useCallback((map) => {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        console.log(map.getCenter());
        setMap(map);
    }, []);

    const onUnMount = useCallback((map) => setMap(null), []);

    const handleCenter = useCallback((map: any) => {
        const newCenter = { lat: map.getCenter().lat(), lng: map.getCenter().lng() };
        console.log(newCenter);
    }, []);

    return (
        <MapContainer>
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={initialCenter}
                    zoom={10}
                    onLoad={onLoad}
                    onUnmount={onUnMount}
                    onDrag={() => handleCenter(map)}
                >
                    <PriceMarkerButton onClick={() => alert('hello')}>
                        <OverlayView position={initialCenter} mapPaneName={OverlayView.FLOAT_PANE}>
                            <PriceLabel>
                                <PriceText>₩110,000</PriceText>
                            </PriceLabel>
                        </OverlayView>
                    </PriceMarkerButton>
                </GoogleMap>
            )}
        </MapContainer>
    );
};

export default Map;

const MapContainer = styled.div`
    width: 100%;
    height: 100%;
`;

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
