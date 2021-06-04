import React from 'react';
import styled from 'styled-components';
import { GridContainer, Section, Title } from './main.style';

interface CityProps {
    city: any[];
}

const NearbyLocation = ({ city }: CityProps): React.ReactElement => {
    // console.log(city);

    return (
        <Section>
            <Title>가까운 여행지 둘러보기</Title>
            <CityContainer>
                {city.map((item) => (
                    <City key={item.id}>
                        <CityImage src={item.thumbnail} alt={item.name} />
                        <CityInfo>
                            <CityTitle>{item.name}</CityTitle>
                            <CityDistance>차로 2.5시간 거리</CityDistance>
                        </CityInfo>
                    </City>
                ))}
            </CityContainer>
        </Section>
    );
};

const CityContainer = styled(GridContainer)`
    grid-gap: 10%;
`;

const City = styled.span`
    display: flex;
    height: 70px;
`;

const CityImage = styled.img`
    margin-right: 20px;
    border-radius: 8px;
`;

const CityInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const CityTitle = styled.p`
    font-size: 18px;
    font-weight: bold;
`;

const CityDistance = styled.p``;

export default NearbyLocation;
