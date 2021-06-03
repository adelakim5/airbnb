import React from 'react';
import { useReservationState } from 'hooks/ReservationHook';
import { useSearcherDispatch, useSearcherState } from 'hooks/SearcherHook';
import { theme } from 'styles/theme';
import ModalLayer from './common/ModalLayer';
import { Container, NavigatingText, ResultText, Tab } from './common/shared.style';
import FeeController from './feeController/FeeController';

const FeeTab = (): React.ReactElement => {
    const { fee } = useReservationState();
    const { feeLayer } = useSearcherState();
    const searcherDispatch = useSearcherDispatch();

    const handleFeeLayer: React.MouseEventHandler<HTMLDivElement> = () => {
        searcherDispatch({ type: 'SHOW_FEE_LAYER', state: true });
    };

    return (
        <Container>
            <Tab onClick={handleFeeLayer} isClicked={feeLayer}>
                <NavigatingText>요금</NavigatingText>
                <ResultText>
                    {fee[0]}만원 {fee[1]}만원
                </ResultText>
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
                    <FeeController />
                </ModalLayer>
            )}
        </Container>
    );
};

export default FeeTab;
