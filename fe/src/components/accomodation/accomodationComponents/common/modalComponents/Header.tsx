import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
    rental_fee_per_night: number;
    num_of_review: number;
    name: string;
}

const Header = ({ rental_fee_per_night, num_of_review, name }: HeaderProps): React.ReactElement => {
    return (
        <Container>
            <AccomodationTitle>{name}</AccomodationTitle>
            <FeeSection>
                <RentalFee>
                    <Fee>₩{rental_fee_per_night.toLocaleString()}</Fee>
                    <Night>/ 박</Night>
                </RentalFee>
                <Review>후기 {num_of_review}개</Review>
            </FeeSection>
        </Container>
    );
};

export default Header;

const Container = styled.div``;

const FeeSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RentalFee = styled.span`
    color: #333;
`;

const Strong = styled.span`
    font-size: 20px;
    font-weight: bold;
`;

const Fee = styled(Strong)``;

const AccomodationTitle = styled(Strong)``;

const Night = styled.span`
    font-size: 14px;
    color: #828282;
`;

const Review = styled.span`
    font-size: 12px;
    color: #828282;
    text-decoration-line: underline;
`;
