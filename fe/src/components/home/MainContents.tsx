import React, { useEffect } from 'react';
import Hero from './mainComponents/Hero';
import NearbyLocation from './mainComponents/NearbyLocation';
import HouseType from './mainComponents/HouseType';
import BeingHost from './mainComponents/BeingHost';
import styled from 'styled-components';
import useFetch from 'hooks/FetchHook';
import { URL } from 'util/urls';
import { MainContentsProps } from 'shared/interface';

const MainContents = (): React.ReactElement => {
    const mainContents = sessionStorage.getItem('mainContentsData');

    if (!mainContents) {
        const [mainContentsData, loading] = useFetch(URL.endPoint);
        sessionStorage.setItem('mainContentsData', JSON.stringify(mainContentsData));
        return loading ? <div>loading</div> : <MainPage mainContentsData={mainContentsData} />;
    }

    const mainContentsData = JSON.parse(mainContents);
    return <MainPage mainContentsData={mainContentsData} />;
};

export default MainContents;

const Page = styled.main``;

function MainPage(props: any & MainContentsProps) {
    const { city, theme } = props.mainContentsData;
    return (
        <Page>
            <Hero />
            <NearbyLocation city={city} />
            <HouseType theme={theme} />
            <BeingHost />
        </Page>
    );
}
