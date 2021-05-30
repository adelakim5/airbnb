// import { Slider } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useReservationDispatch, useReservationState } from '../../../hooks/ReservationHook';
import { useSearcherDispatch, useSearcherState } from '../../../hooks/SearcherHook';
import { theme } from '../../../styles/theme';
import ModalLayer from './common/ModalLayer';
import { Container, NavigatingText, ResultText, Tab } from './common/shared.style';
import Slider from './Slider';

const FeeTab = (): React.ReactElement => {
    const { fee } = useReservationState();
    const reservationDispatch = useReservationDispatch();

    const { feeLayer } = useSearcherState();
    const searcherDispatch = useSearcherDispatch();

    const [feeValue, setFeeValue] = useState<number[]>([0, 100]);

    const handleFeeLayer: React.MouseEventHandler<HTMLDivElement> = () => {
        searcherDispatch({ type: 'SHOW_FEE_LAYER', state: true });
    };

    const handleSliderChange = (newValue: number[]) => {
        setFeeValue(newValue);
        reservationDispatch({ type: 'FEE', fee: newValue });
    };

    // const handleSubmitFee = () => {
    //     reservationDispatch({ type: 'FEE', fee: feeValue });
    //     searcherDispatch({ type: 'SHOW_FEE_LAYER', state: false });
    // };

    return (
        <Container>
            <Tab onClick={handleFeeLayer}>
                <NavigatingText>요금</NavigatingText>
                <ResultText>{typeof fee === 'number' ? `${fee}원` : `${fee[0]}만원 ${fee[1]}만원`}</ResultText>
            </Tab>
            {feeLayer && (
                <ModalLayer
                    options={{
                        width: theme.LayerSize.smWidth,
                        top: theme.LayerLocation.top,
                        left: theme.LayerLocation.far_left,
                        height: theme.LayerSize.smHeight,
                    }}
                >
                    <Slide>
                        <Slider feeValue={feeValue} setFeeValue={handleSliderChange} />
                        {/* <Slider value={feeValue} onChange={handleSliderChange} valueLabelDisplay="auto" /> */}
                    </Slide>
                    {/* <button onClick={handleSubmitFee}>확인</button> */}
                </ModalLayer>
            )}
        </Container>
    );
};

export default FeeTab;

const PriceText = styled.div``;

const Slide = styled.div`
    margin: 60px;
`;
