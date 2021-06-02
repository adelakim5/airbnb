import React from 'react';
import styled from 'styled-components';
import { FeeProps } from './Slider';
import { mockupPriceListData } from 'data/priceList.js';

const getPriceListData = (priceList: number[]) => {
    const result = [];
    for (let x = 10000; x <= 1000000; x += 10000) {
        const targets = priceList.filter((price) => {
            return x <= price && price < x + 10000;
        });
        result.push({ x, y: targets.length });
    }
    return result;
};

const Chart = (props: FeeProps): React.ReactElement => {
    const { feeValue } = props;
    const priceListData = getPriceListData(mockupPriceListData['price-list']).sort((a, b) => a.x - b.x);
    return (
        <ChartBoxSlider>
            {priceListData.map((price, i) => {
                const { y } = price;
                return (
                    <ChartElement
                        height={y}
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
