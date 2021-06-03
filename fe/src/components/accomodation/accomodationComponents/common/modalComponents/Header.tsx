import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
    rental_fee_per_night: number;
    num_of_review: number;
}

const Header = ({ rental_fee_per_night, num_of_review }: HeaderProps): React.ReactElement => {
    return (
        <Container>
            <RentalFee>
                <Fee>₩{rental_fee_per_night.toLocaleString()}</Fee>
                <Night>/ 박</Night>
            </RentalFee>
            <Review>후기 {num_of_review}개</Review>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
`;

const RentalFee = styled.span`
    color: #333;
`;

const Fee = styled.span`
    font-size: 20px;
    font-weight: bold;
`;

const Night = styled.span`
    font-size: 14px;
    color: #828282;
`;

const Review = styled.span`
    font-size: 12px;
    color: #828282;
    text-decoration-line: underline;
`;
