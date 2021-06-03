import React from 'react';
import styled from 'styled-components';
import { useReservationState } from 'hooks/ReservationHook';
import { AccomodationType } from 'shared/interface';

interface AccomodationListPropsType {
    currAccomodations: AccomodationType[];
}

const AccomodationList = ({ currAccomodations }: AccomodationListPropsType): React.ReactElement => {
    const reservationState = useReservationState();
    const { checkIn, checkOut, fee, people } = reservationState;
    const searchInfoArray: string[] = [
        `${currAccomodations.length}개 이상의 숙소`,
        `${checkIn.month}월 ${checkIn.day}일 - ${checkOut.month}월 ${checkOut.day}일`,
        `₩${fee[0]}0,000-₩${fee[1] < 100 ? fee[1] : '1,00'}0,000`,
        `게스트 ${people.adult + people.children}명 ${people.kids > 0 ? '유아 ' + people.kids + '명' : ''}`,
    ];

    const getCombinations = (array: string[]): string[] => {
        return array.reduce((acc: string[], curr: string, idx: number, self: string[]) => {
            if (idx < self.length - 1) acc.push(curr, 'divider');
            else acc.push(curr);
            return acc;
        }, []);
    };

    const getTemplate = (el: string) => {
        if (el === 'divider') return <Divider />;
        return <span>{el}</span>;
    };

    return (
        <Accomodations>
            <SearchInfo>{getCombinations(searchInfoArray).map((el) => getTemplate(el))}</SearchInfo>
            <AccomodationListTitle>지도에서 선택한 지역의 숙소</AccomodationListTitle>
            <AccomodationListBody>
                {currAccomodations.map((roomInfo: AccomodationType) => {
                    const {
                        person_capacity,
                        room_and_property_type,
                        beds,
                        bathrooms,
                        amenities,
                        rental_fee_per_night,
                        avg_rating,
                    } = roomInfo;
                    const accomodationInfoArray = [
                        `최대 인원 ${person_capacity}명`,
                        `${room_and_property_type}`,
                        `침대 ${beds}개`,
                        `욕실 ${bathrooms}개`,
                    ];
                    return (
                        <CardList>
                            <CardItem>
                                <Thumbnail src={roomInfo.images_fe.thumbnail} />
                                <CardContent>
                                    <CardTitle>{roomInfo.name}</CardTitle>
                                    <CardBody>
                                        <span>
                                            {getCombinations(accomodationInfoArray).map((el) => getTemplate(el))}
                                        </span>
                                        <span>{getCombinations(amenities).map((el) => getTemplate(el))}</span>
                                    </CardBody>
                                    <CardFooter>
                                        <Rate>
                                            <span>{avg_rating}</span>
                                        </Rate>
                                        <Price>
                                            <span>₩{rental_fee_per_night},000 / 박</span>
                                            <span>총액 ₩{rental_fee_per_night},000</span>
                                        </Price>
                                    </CardFooter>
                                </CardContent>
                            </CardItem>
                        </CardList>
                    );
                })}
            </AccomodationListBody>
        </Accomodations>
    );
};

export default AccomodationList;

const Accomodations = styled.div`
    width: 70%;
    height: 100vh;
    padding: 24px 0 24px 24px;
    overflow: auto;
`;

const AccomodationListTitle = styled.h2`
    font-size: 35px;
`;

const AccomodationListBody = styled.div`
    min-height: 400px;
    margin-top: 32px;
`;

const SearchInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
`;

const CardList = styled.div`
    margin-right: 24px;
`;

const CardItem = styled.ul`
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    width: 100%;
    height: 248px;
    padding: 24px 0;
`;

const CardContent = styled.li`
    width: 100%;
    position: relative;
    margin-left: 24px;
`;

const CardBody = styled.div`
    span {
        display: flex;
    }
`;

const CardFooter = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
    }
`;

const Rate = styled.div`
    align-items: flex-end;
`;

const Price = styled.div`
    flex-direction: column;
    text-align: end;
`;

const CardTitle = styled.h3`
    margin-bottom: 8px;
`;

const DividerBox = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
`;

const Spot = styled.span`
    background: #000;
    width: 3px;
    height: 3px;
    border-radius: 50%;
`;

const Thumbnail = styled.img``;

function Divider() {
    return (
        <DividerBox>
            <Spot></Spot>
        </DividerBox>
    );
}
