import { useReservationState } from 'hooks/ReservationHook';
import React from 'react';
import styled from 'styled-components';

const ReservationInfo = () => {
    const { checkIn, checkOut, people } = useReservationState();
    const { adult, children, kids } = people;

    return (
        <Info>
            <CheckIn>
                <Title>체크인</Title>
                <Content>
                    {checkIn.year}.{checkIn.month}.{checkIn.day}
                </Content>
            </CheckIn>
            <CheckOut>
                <Title>체크인</Title>
                <Content>
                    {checkOut.year}.{checkOut.month}.{checkOut.day}
                </Content>
            </CheckOut>
            <People>
                <Title>인원</Title>
                <Content>
                    게스트 {adult + children}명 {kids > 0 ? `유아 ${kids}명` : ''}
                </Content>
            </People>
        </Info>
    );
};

export default ReservationInfo;

const Info = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 353px;
    height: 107px;
    div {
        padding: 8px;
    }
`;

const CheckIn = styled.div`
    border-left: 1px solid #bdbdbd;
    border-right: 1px solid #bdbdbd;
    border-top: 1px solid #bdbdbd;
    border-top-left-radius: 10px;
`;

const CheckOut = styled.div`
    border-right: 1px solid #bdbdbd;
    border-top: 1px solid #bdbdbd;
    border-top-right-radius: 10px;
`;

const People = styled.div`
    grid-column-start: 1;
    grid-column-end: 3;
    border: 1px solid #bdbdbd;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

const Title = styled.p`
    font-size: 12px;
    font-weight: bold;
`;

const Content = styled.p`
    font-size: 14px;
    color: #4f4f4f;
`;
