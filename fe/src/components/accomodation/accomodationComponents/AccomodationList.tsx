import React from 'react';
import styled from 'styled-components';
import { useReservationState } from 'hooks/ReservationHook';
import { AccomodationType } from 'shared/interface';
import { getTemplate } from './common/functions';
import CardList from './CardList';

interface AccomodationListPropsType {
    currAccomodations: AccomodationType[];
    showSelectedAccomodationModal: (arg1: AccomodationType, arg2: number) => void;
}

const AccomodationList = (props: AccomodationListPropsType): React.ReactElement => {
    const { currAccomodations, showSelectedAccomodationModal } = props;
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

    return (
        <Accomodations>
            <SearchInfo>{getCombinations(searchInfoArray).map((el) => getTemplate(el))}</SearchInfo>
            <AccomodationListTitle>지도에서 선택한 지역의 숙소</AccomodationListTitle>
            {currAccomodations.length <= 0 ? (
                <div>해당 조건에 맞는 숙소를 찾지 못하였습니다.</div>
            ) : (
                <AccomodationListBody>
                    {currAccomodations.map((roomInfo: AccomodationType) => {
                        const { person_capacity, room_and_property_type, beds, bathrooms } = roomInfo;
                        const accomodationInfoArray = [
                            `최대 인원 ${person_capacity}명`,
                            `${room_and_property_type}`,
                            `침대 ${beds}개`,
                            `욕실 ${bathrooms}개`,
                        ];
                        return <CardList {...{ roomInfo, showSelectedAccomodationModal, accomodationInfoArray }} />;
                    })}
                </AccomodationListBody>
            )}
        </Accomodations>
    );
};

export default AccomodationList;

const Accomodations = styled.div`
    width: 88%;
    height: 100vh;
    padding: 24px 0 24px 24px;
    overflow: auto;
`;

const AccomodationListTitle = styled.h3`
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
