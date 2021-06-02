import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { GoogleMap, useJsApiLoader, OverlayView } from '@react-google-maps/api';
// import { getGeocode, getLatLng } from 'use-places-autocomplete';
import { apiKey } from '../private.js';
import { sampleAccomodationData } from '../../../data/accomodation.js';

interface LatLng {
    lat: number;
    lng: number;
}

const mapContainerStyle = {
    width: `100vw`,
    height: `100vh`,
};

/*

const createSampleData = () => {
    const result = [];
    const lats = [35, 36, 37];
    for (let i = 0; i < 200; i++) {
        const lat = Math.random() + lats[Math.floor(Math.random() * 3)];
        const lng = Math.random() + 127;
        const price = Math.floor((Math.random() + 1) * 100);
        result.push({ lat, lng, price });
    }
    return result;
};

const initSampleData = createSampleData();
console.log(initSampleData);

*/

const center: LatLng = { lat: 37.566536, lng: 126.977966 };

const Map = (): React.ReactElement => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    });

    const [map, setMap] = useState<unknown | null>(null);
    // const [currentCenter, setCurrentCenter] = useState(center);
    const [sampleData, setSampleData] = useState(sampleAccomodationData.rooms);

    console.log(sampleData);

    const mapRef = useRef<any>(null);

    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    // const panTo = useCallback(({ lat, lng }) => {
    //     mapRef.current.panTo({ lat, lng });
    //     mapRef.current.setZoom(14);
    // }, []);

    const onUnMount = useCallback((map) => setMap(null), []);

    const filterSampleData = ([maxLat, maxLng, minLat, minLng]: number[]) => {
        const result = sampleAccomodationData.rooms.filter((item: any) => {
            // item 용 타입 만들어야 함
            const { latitude, longitude } = item;
            return maxLat >= latitude && maxLng >= longitude && minLat <= latitude && minLng <= longitude;
        });
        setSampleData(result);
    };

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={center}
            onUnmount={onUnMount}
            onLoad={onMapLoad}
            onDragEnd={() => {
                const maxLat = mapRef.current.getBounds().getNorthEast().lat();
                const maxLng = mapRef.current.getBounds().getNorthEast().lng();
                const minLat = mapRef.current.getBounds().getSouthWest().lat();
                const minLng = mapRef.current.getBounds().getSouthWest().lng();
                // console.log(maxLat, maxLng, minLat, minLng);
                filterSampleData([maxLat, maxLng, minLat, minLng]);
                // const newCenter = { lat: mapRef.current.center.lat(), lng: mapRef.current.center.lng() };
                // setCurrentCenter(newCenter);
            }}
        >
            {sampleData.map((accomodation: any) => {
                const { latitude, longitude, rental_fee_per_night } = accomodation;
                return (
                    <PriceMarkerButton onClick={() => alert(`${rental_fee_per_night},000원 숙소`)}>
                        <OverlayView position={{ lat: latitude, lng: longitude }} mapPaneName={OverlayView.FLOAT_PANE}>
                            <PriceLabel>
                                <PriceText>₩{rental_fee_per_night},000</PriceText>
                            </PriceLabel>
                        </OverlayView>
                    </PriceMarkerButton>
                );
            })}
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
