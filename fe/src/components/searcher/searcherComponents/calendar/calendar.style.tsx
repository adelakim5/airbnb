import styled from 'styled-components';
import { DateType, UsefulObject } from 'shared/interface';

const dateTypeBackgroundColor: UsefulObject = {
    checkIn: '#000',
    checkOut: '#000',
    between: '#f7f7f7',
    default: '#fff',
};

const dateTypeColor: UsefulObject = {
    checkIn: '#fff',
    checkOut: '#fff',
    between: '#000',
    default: '#000',
};

const dateBorderRadius: UsefulObject = {
    checkIn: '50%',
    checkOut: '50%',
    between: '0',
    default: '0',
};

export const CalendarContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 60px;
`;

export const LayerContentContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const CarouselBox = styled.div`
    width: 750px;
    position: relative;
    overflow: hidden;
`;

interface CalendarListType {
    x: number;
    transitionValue: string;
}

export const CalendarList = styled.ul<CalendarListType>`
    display: flex;
    position: absolute;
    transform: ${({ x }) => `translate3d(${x}px, 0, 0)`};
    transition: ${({ transitionValue }) => transitionValue};
`;

export const CalendarBox = styled.li`
    width: 375px;
    padding: 0 10px;
`;

export const CalendarTitle = styled.div`
    // background: violet;
    margin-bottom: 24px;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
`;

export const Week = styled.thead`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;

export const Dates = styled.div``;

export const DayName = styled.div`
    width: 48px;
    height: 24px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Day = styled.div`
    height: 48px;
    margin: 4px 0;
    color: ${(props: DateType) => (!props.possible ? '#ddd' : dateTypeColor[props.typeOfDate])};
    background: ${({ typeOfDate }: DateType) => dateTypeBackgroundColor[typeOfDate]};
    border-radius: ${({ typeOfDate }: DateType) => dateBorderRadius[typeOfDate]};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    &+.true: hover {
        border-radius: 50%;
        background: #000;
        color: #fff;
    }
`;
