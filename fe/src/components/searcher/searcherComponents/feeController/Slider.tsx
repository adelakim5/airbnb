import React, { useRef } from 'react';
import styled from 'styled-components';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import Chart from './Chart';

export interface FeeProps {
    feeValue: number[];
}

interface SlideProps extends FeeProps {
    handleSliderChange: (newValue: number[]) => void;
}

const Slider = (props: SlideProps): React.ReactElement => {
    const { feeValue, handleSliderChange } = props;

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
        handleSliderChange([Math.floor(percent), feeValue[1]]);
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
        handleSliderChange([feeValue[0], Math.floor(percent)]);
    };

    return (
        <Slide>
            <Chart feeValue={feeValue} />
            <div className="multi-range-slider">
                <RangeInputLeft
                    ref={inputLeft}
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={feeValue[0]}
                    onInput={setLeftValue}
                />
                <RangeInputRight
                    ref={inputRight}
                    type="range"
                    min="0"
                    max="100"
                    value={feeValue[1]}
                    onInput={setRightValue}
                />

                <BarSlider>
                    <Track></Track>
                    <Range ref={range}></Range>
                    <ThumbLeft ref={thumbLeft}>
                        <PauseCircleOutlineIcon />
                    </ThumbLeft>
                    <ThumbRight ref={thumbRight}>
                        <PauseCircleOutlineIcon />
                    </ThumbRight>
                </BarSlider>
            </div>
        </Slide>
    );
};

export default Slider;

const Slide = styled.div`
    position: relative;
    height: fit-content;
`;

const BarSlider = styled.div`
    position: relative;
    z-index: 1;
    height: 1px;
    margin: 0 15px;
`;

const Horizon = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 5px;
`;

const Track = styled(Horizon)`
    z-index: 1;
    background: #ddd;
`;

const Range = styled(Horizon)`
    z-index: 2;
    background: #000;
`;

const Thumb = styled.div`
    position: absolute;
    z-index: 3;
    width: 20px;
    height: 20px;
    background: #fff;
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
        width: 20px;
        height: 20px;
        -webkit-appearance: none;
        background: red;
    }
`;

const RangeInputLeft = styled(RangeInput)``;
const RangeInputRight = styled(RangeInput)``;
