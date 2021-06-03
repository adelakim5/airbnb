import React from 'react';
import styled from 'styled-components';
import { FeeProps } from './Slider';

const getPriceListData = (priceList: number[]) => {
    const min = 10000;
    const max = 1000000;
    const result = [];
    for (let x = min; x <= max; x += 10000) {
        const targets = priceList.filter((price) => {
            return x <= price && price < x + 10000;
        });
        result.push({ x, y: targets.length });
    }
    return result;
};

const Chart = ({ feeValue, feeData }: FeeProps): React.ReactElement => {
    const newFeeData = getPriceListData(feeData).sort((a, b) => a.x - b.x);
    return (
        <ChartBoxSlider>
            {newFeeData.map((price, i) => {
                const { y } = price;
                return (
                    <ChartElement
                        height={y * 0.2}
                        background={i < feeValue[0] || i > feeValue[1] ? '#ddd' : '#000'}
                    ></ChartElement>
                );
            })}
        </ChartBoxSlider>
    );
};

export default Chart;

interface ChartHeight {
    height: number;
    background: string;
}

const ChartBoxSlider = styled.div`
    padding: 0 15px;
    width: 100%;
    height: 150px;
    display: flex;
    align-items: flex-end;
`;

const ChartElement = styled.div<ChartHeight>`
    background: ${(props) => props.background};
    width: 100%;
    height: ${(props) => props.height * 8}px;
`;
