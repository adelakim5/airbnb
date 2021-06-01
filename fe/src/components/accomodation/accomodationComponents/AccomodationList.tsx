import React from 'react';
import styled from 'styled-components';

interface RoomType {
    latitude: number;
    logitude: number;
    address_id: number;
    theme_id: number;
    name: string;
    rental_fee_per_night: number;
    weekly_price_factor: number;
    monthly_price_factor: number;
    description: string;
    person_capacity: number;
    bedrooms: number;
    beds: number;
    bathrooms: number;
    avg_rating: number;
    room_and_property_type: string;
    images_fe: {
        thumbnail: string;
        big: string;
        small: string;
    };
    amenities: string[];
}

interface AccomodationDataType {
    rooms: RoomType[];
}

const AccomodationList = (props: AccomodationDataType): React.ReactElement => {
    const { rooms } = props;
    return (
        <Accomodations>
            <h2>숙소 결과</h2>
            {rooms.map((roomInfo: RoomType) => (
                <CardList>
                    <CardItem>
                        <img src={roomInfo.images_fe.small} />
                        <CardContent>제목: {roomInfo.name}</CardContent>
                        <CardContent>가격: {roomInfo.rental_fee_per_night}</CardContent>
                        <CardContent>상세설명: {roomInfo.description}</CardContent>
                        <CardContent>수용 가능 인원: {roomInfo.person_capacity}</CardContent>
                        <CardContent>침실 개수: {roomInfo.bedrooms}</CardContent>
                        <CardContent>침대 개수: {roomInfo.beds}</CardContent>
                        <CardContent>욕실 개수: {roomInfo.bedrooms}</CardContent>
                        <CardContent>평점: {roomInfo.avg_rating}</CardContent>
                        <CardContent>숙소 타입: {roomInfo.room_and_property_type}</CardContent>
                    </CardItem>
                </CardList>
            ))}
        </Accomodations>
    );
};

export default AccomodationList;

const Accomodations = styled.div`
    width: 100%;
    height: 100vh;
    overflow: scroll;
`;

const CardList = styled.div``;

const CardItem = styled.ul``;

const CardContent = styled.li``;
