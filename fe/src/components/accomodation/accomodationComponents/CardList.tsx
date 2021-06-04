import { useReservationState } from 'hooks/ReservationHook';
import React from 'react';
import { AccomodationType } from 'shared/interface';
import styled from 'styled-components';
import { getCombinations, getTemplate } from './common/functions';
import dateDiff from '../dateDiff.js';

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
    const { images_fe, name, amenities, avg_rating, rental_fee_per_night, num_of_review } = roomInfo;
    const { thumbnail } = images_fe;

    const priceSum = rental_fee_per_night * diff;

    return (
        <List>
            <CardItem onClick={() => showSelectedAccomodationModal(roomInfo, diff)}>
                <CardIamge>
                    <Thumbnail src={thumbnail} />
                </CardIamge>
                <CardContent>
                    <CardTitle>{name}</CardTitle>
                    <CardBody>
                        <span>{getCombinations(accomodationInfoArray).map((el) => getTemplate(el))}</span>
                        <span>{getCombinations(amenities).map((el) => getTemplate(el))}</span>
                    </CardBody>
                    <CardFooter>
                        <Rate>
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7.00016 0.333344L9.06016 4.50668L13.6668 5.18001L10.3335 8.42668L11.1202 13.0133L7.00016 10.8467L2.88016 13.0133L3.66683 8.42668L0.333496 5.18001L4.94016 4.50668L7.00016 0.333344Z"
                                    fill="#E84C60"
                                />
                            </svg>
                            <span>{avg_rating}</span>
                            <span>후기({num_of_review})</span>
                        </Rate>
                        <Price>
                            <PerNight>₩{rental_fee_per_night.toLocaleString()} / 박</PerNight>
                            <Sum>총액 ₩{priceSum.toLocaleString()}</Sum>
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

const CardIamge = styled.div`
    height: 248px;
    overflow: hidden;
    border-radius: 10px;
`;

const Thumbnail = styled.img`
    transform: translate3d(-20%, -24%, 0);
`;

const CardItem = styled.ul`
    border-bottom: 1px solid #e0e0e0;
    display: flex;

    padding: 24px 0;
    cursor: pointer;
`;

const CardContent = styled.li`
    width: 100%;
    position: relative;
    margin-left: 24px;
`;
const CardTitle = styled.h3`
    margin-bottom: 8px;
`;

const CardBody = styled.div`
    color: #828282;
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
    display: flex;
    align-items: flex-end;

    span {
        margin-right: 5px;
    }
`;

const Price = styled.div`
    flex-direction: column;
    text-align: end;
`;

const PerNight = styled.div`
    font-weight: bold;
`;

const Sum = styled.div`
    color: #828282;
    text-decoration-line: underline;
`;
