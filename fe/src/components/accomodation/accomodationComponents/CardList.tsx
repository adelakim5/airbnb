import { useReservationState } from 'hooks/ReservationHook';
import React from 'react';
import { AccomodationType, AccomodationModalType } from 'shared/interface';
import styled from 'styled-components';
import { getCombinations, getTemplate } from './common/functions';
import dateDiff from '../dateDiff.js';
import { check } from 'prettier';

interface CardListProps {
    roomInfo: AccomodationType;
    showSelectedAccomodationModal: (arg1: AccomodationType, arg2: number) => void;
    accomodationInfoArray: string[];
}

const CardList = (props: CardListProps): React.ReactElement => {
    const { checkIn, checkOut } = useReservationState();

    const diff = dateDiff(
        `${checkIn.year}-${checkIn.month}-${checkIn.day}`,
        `${checkOut.year}-${checkOut.month}-${checkOut.day}`,
    );

    const { roomInfo, accomodationInfoArray, showSelectedAccomodationModal } = props;
    const { images_fe, name, amenities, avg_rating, rental_fee_per_night } = roomInfo;
    const { thumbnail } = images_fe;

    const priceSum = rental_fee_per_night * diff;

    return (
        <List>
            <CardItem onClick={() => showSelectedAccomodationModal(roomInfo, diff)}>
                <Thumbnail src={thumbnail} />
                <CardContent>
                    <CardTitle>{name}</CardTitle>
                    <CardBody>
                        <span>{getCombinations(accomodationInfoArray).map((el) => getTemplate(el))}</span>
                        <span>{getCombinations(amenities).map((el) => getTemplate(el))}</span>
                    </CardBody>
                    <CardFooter>
                        <Rate>
                            <span>{avg_rating}</span>
                        </Rate>
                        <Price>
                            <span>₩{rental_fee_per_night.toLocaleString()} / 박</span>
                            <span>총액 ₩{priceSum.toLocaleString()}</span>
                        </Price>
                    </CardFooter>
                </CardContent>
            </CardItem>
        </List>
    );
};

export default CardList;

const List = styled.div`
    margin-right: 24px;
`;

const Thumbnail = styled.img``;

const CardItem = styled.ul`
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    width: 100%;
    height: 248px;
    padding: 24px 0;
    cursor: pointer;
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
