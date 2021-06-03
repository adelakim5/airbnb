import React, { useEffect } from 'react';
import Hero from './mainComponents/Hero';
import NearbyLocation from './mainComponents/NearbyLocation';
import HouseType from './mainComponents/HouseType';
import BeingHost from './mainComponents/BeingHost';
import styled from 'styled-components';
import useFetch from 'hooks/fetchHook';
import { URL } from 'util/urls';

const MainContents = (): React.ReactElement => {
    const [mainContentsData, loading] = useFetch(URL.endPoint);
    const { city, theme } = mainContentsData;

    return loading ? (
        <div>loading</div>
    ) : (
        <MainPage>
            <Hero />
            <NearbyLocation city={city} />
            <HouseType theme={theme} />
            <BeingHost />
        </MainPage>
    );
};

export default MainContents;

const MainPage = styled.main``;
