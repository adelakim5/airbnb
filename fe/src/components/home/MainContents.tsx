import React from 'react';
import Hero from './mainComponents/Hero';
import NearbyLocation from './mainComponents/NearbyLocation';
import HouseType from './mainComponents/HouseType';
import BeingHost from './mainComponents/BeingHost';
import styled from 'styled-components';
import useFetch from 'hooks/FetchHook';
import { URL } from 'util/urls';
import { MainContentsProps } from 'shared/interface';

const MainContents = (): React.ReactElement => {
    const [mainContentsData, loading] = useFetch(URL.endPoint);

    return loading ? <div>Loading...</div> : <MainPage mainContentsData={mainContentsData} />;
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
