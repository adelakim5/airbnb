import React, { useState } from 'react';
import styled from 'styled-components';
import { useReservationDispatch } from 'hooks/ReservationHook';
import Slider from './Slider';

interface FeeProps {
    feeData: number[];
}

const FeeController = ({ feeData }: FeeProps): React.ReactElement => {
    const reservationDispatch = useReservationDispatch();
    const [feeValue, setFeeValue] = useState<number[]>([0, 100]);

    const handleSliderChange = (newValue: number[]) => {
        setFeeValue(newValue);
        reservationDispatch({ type: 'FEE', fee: newValue });
    };

    return (
        <Controller>
            <FeeDescription>
                <div>가격 범위</div>
                <div>
                    <span>₩100,000</span>
                    <span>-</span>
                    <span>₩1,000,000+</span>
                </div>
                <div>
                    평균 1박 요금은 <span>₩165,556</span> 입니다.
                </div>
            </FeeDescription>
            <Slider feeData={feeData} feeValue={feeValue} handleSliderChange={handleSliderChange} />
        </Controller>
    );
};

export default FeeController;

const Controller = styled.div`
    margin: 52px;
`;

const FeeDescription = styled.div``;
