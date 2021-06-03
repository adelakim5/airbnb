import React from 'react';
import styled from 'styled-components';

interface PriceProps {
    rental_fee_per_night: number;
    diff: number;
}

const PriceInfo = ({ rental_fee_per_night, diff }: PriceProps): React.ReactElement => {
    return (
        <Info>
            <Detail>
                <Description>
                    {rental_fee_per_night.toLocaleString()} × {diff}박
                </Description>
                <Price>{rental_fee_per_night.toLocaleString()}원</Price>
            </Detail>
            <Detail>
                <Description>서비스 수수료</Description>
                <Price>8,188원</Price>
            </Detail>
            <Detail>
                <Description>숙박세와 수수료</Description>
                <Price>819원</Price>
            </Detail>
        </Info>
    );
};

export default PriceInfo;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Detail = styled.div`
    height: 23px;
    display: flex;
    justify-content: space-between;
`;

const Description = styled.span`
    text-decoration-line: underline;
`;

const Price = styled.span``;
