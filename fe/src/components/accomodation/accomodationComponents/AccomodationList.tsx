import React from 'react';
import styled from 'styled-components';
import { useReservationState } from '../../../hooks/ReservationHook';

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
    const reservationState = useReservationState();
    const { checkIn, checkOut, fee, people } = reservationState;
    const { rooms } = props;
    return (
        <Accomodations>
            <SearchInfo>
                <p>{rooms.length}개 이상의 숙소</p>
                <Divider></Divider>
                <p>
                    {checkIn.month}월 {checkIn.day}일 - {checkOut.month}월 {checkOut.day}일
                </p>
                <Divider></Divider>
                <p>
                    ₩{fee[0]}-₩{fee[1]}
                </p>
                <Divider></Divider>
                <p>
                    게스트 {people.adult + people.children}명 {people.kids > 0 && `유아 ${people.kids}명`}
                </p>
            </SearchInfo>
            <AccomodationListTitle>지도에서 선택한 지역의 숙소</AccomodationListTitle>
            <AccomodationListBody>
                {rooms.map((roomInfo: RoomType) => (
                    <CardList>
                        <CardItem>
                            <img src={roomInfo.images_fe.small} />
                            <CardContent>
                                <Detail>제목: {roomInfo.name}</Detail>
                                <Detail>가격: {roomInfo.rental_fee_per_night}</Detail>
                                <Detail>상세설명: {roomInfo.description}</Detail>
                                <Detail>수용 가능 인원: {roomInfo.person_capacity}</Detail>
                                <Detail>침실 개수: {roomInfo.bedrooms}</Detail>
                                <Detail>침대 개수: {roomInfo.beds}</Detail>
                                <Detail>욕실 개수: {roomInfo.bedrooms}</Detail>
                                <Detail>평점: {roomInfo.avg_rating}</Detail>
                                <Detail>숙소 타입: {roomInfo.room_and_property_type}</Detail>
                            </CardContent>
                        </CardItem>
                    </CardList>
                ))}
            </AccomodationListBody>
        </Accomodations>
    );
};

export default AccomodationList;

const Accomodations = styled.div`
    width: 840px;
    height: 100vh;
    margin: 24px 0 24px 24px;
    border: 1px solid blue;
`;

const AccomodationListTitle = styled.h2`
    margin-bottom: 32px;
`;

const AccomodationListBody = styled.div`
    border: 1px solid green;
    min-height: 400px;
`;

const Divider = styled.span`
    width: 3px;
    height: 3px;
    background: #000;
    margin: 0 10px;
    border-radius: 50%;
`;

const SearchInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`;

const CardList = styled.div``;

const CardItem = styled.ul`
    border: 1px solid teal;
    display: flex;
    height: 248px;
    margin-right: 24px;
    padding-bottom: 24px;
`;

const CardContent = styled.li``;

const Detail = styled.div``;
