import React, { useState, useRef } from 'react';
import styled from 'styled-components';

interface FeeProps {
    feeValue: number[];
    setFeeValue: (newValue: number[]) => void;
}

const Slider = (props: FeeProps): React.ReactElement => {
    const { feeValue, setFeeValue } = props;

    const inputLeft = useRef<HTMLInputElement>(null);
    const inputRight = useRef<HTMLInputElement>(null);

    const thumbLeft = useRef<HTMLDivElement>(null);
    const thumbRight = useRef<HTMLDivElement>(null);
    const range = useRef<HTMLDivElement>(null);

    const setLeftValue = () => {
        if (!range.current || !inputLeft.current || !inputRight.current || !thumbLeft.current || !thumbRight.current)
            return;
        const _this = inputLeft.current,
            min = parseInt(_this.min),
            max = parseInt(_this.max);

        const newMinValue = Math.min(parseInt(_this.value), parseInt(inputRight.current.value) - 1);
        const percent = ((newMinValue - min) / (max - min)) * 100;
        thumbLeft.current.style.left = `${percent}%`;
        range.current.style.left = `${percent}%`;
    };
    const setRightValue = () => {
        if (!range.current || !inputLeft.current || !inputRight.current || !thumbLeft.current || !thumbRight.current)
            return;
        const _this = inputRight.current,
            min = parseInt(_this.min),
            max = parseInt(_this.max);

        const newMaxValue = Math.max(parseInt(_this.value), parseInt(inputLeft.current.value) + 1);
        const percent = ((newMaxValue - min) / (max - min)) * 100;
        thumbRight.current.style.right = `${100 - percent}%`;
        range.current.style.right = `${100 - percent}%`;
    };

    const handleChangeMinValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setFeeValue([value, feeValue[1]]);
    };
    const handleChangeMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        setFeeValue([feeValue[0], value]);
    };

    return (
        <Middle className="middle">
            <div className="multi-range-slider">
                <RangeInputLeft
                    ref={inputLeft}
                    type="range"
                    id="input-left"
                    min="0"
                    max="100"
                    step="1"
                    value={feeValue[0]}
                    onInput={setLeftValue}
                    onChange={handleChangeMinValue}
                />
                <RangeInputRight
                    ref={inputRight}
                    type="range"
                    id="input-right"
                    min="0"
                    max="100"
                    value={feeValue[1]}
                    onInput={setRightValue}
                    onChange={handleChangeMaxValue}
                />

                <SliderDiv className="slider">
                    <Track className="track"></Track>
                    <Range ref={range} className="range"></Range>
                    <ThumbLeft ref={thumbLeft} className="thumb left"></ThumbLeft>
                    <ThumbRight ref={thumbRight} className="thumb right"></ThumbRight>
                </SliderDiv>
            </div>
        </Middle>
    );
};

export default Slider;

const Middle = styled.div`
    position: relative;
    height: fit-content;
    max-width: 500px;
`;

const SliderDiv = styled.div`
    position: relative;
    z-index: 1;
    height: 10px;
`;

const Track = styled.div`
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background: #c6aee7;
`;

const Range = styled.div`
    position: absolute;
    z-index: 2;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background: #6200ee;
`;

const Thumb = styled.div`
    position: absolute;
    z-index: 3;
    width: 30px;
    height: 30px;
    background: #6200ee;
    border-radius: 50%;
`;

const ThumbLeft = styled(Thumb)`
    left: 0;
    transform: translate(-15px, -10px);
`;

const ThumbRight = styled(Thumb)`
    right: 0;
    transform: translate(15px, -10px);
`;

const RangeInput = styled.input`
    position: absolute;
    pointer-events: none;
    z-index: 2;
    height: 10px;
    width: 100%;
    -webkit-appearance: none;
    opacity: 0;

    &::-webkit-slider-thumb {
        pointer-events: all;
        width: 38px;
        height: 38px;
        -webkit-appearance: none;
        background: red;
    }
`;

const RangeInputLeft = styled(RangeInput)`
    // top: -100px;
`;
const RangeInputRight = styled(RangeInput)`
    // top: -50px;
`;
