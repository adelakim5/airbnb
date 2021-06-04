import React from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { PeopleCount } from 'shared/interface';

interface PeopleCountProps {
    peopleCount: PeopleCount;
    handleCount: (key: keyof PeopleCount, payload: number) => void;
}

const peopleType = {
    adult: '성인',
    children: '어린이',
    kids: '유아',
};

const peopleDescription = {
    adult: '만 13세 이상',
    children: '만 2~12세',
    kids: '만 2세 미만',
};

const PeopleCountContent = (props: PeopleCountProps): React.ReactElement => {
    const { handleCount, peopleCount } = props;
    const keys: Array<keyof PeopleCount> = ['adult', 'children', 'kids'];

    return (
        <CountContent>
            {keys.map((key) => (
                <CountList>
                    <PeopleTypeInfo>
                        <PeopleTypeTitle>{peopleType[key]}</PeopleTypeTitle>
                        <PeopleTypeDescription>{peopleDescription[key]}</PeopleTypeDescription>
                    </PeopleTypeInfo>
                    <PeopleCounter>
                        <PeopleCountController>
                            <ControlButton className="removeButton">
                                <RemoveIcon onClick={() => handleCount(key, -1)} />
                            </ControlButton>
                            <Count>{peopleCount[key]}</Count>
                            <ControlButton className="addButton">
                                <AddIcon onClick={() => handleCount(key, 1)} />
                            </ControlButton>
                        </PeopleCountController>
                    </PeopleCounter>
                </CountList>
            ))}
        </CountContent>
    );
};

export default PeopleCountContent;

const CountList = styled.li`
    height: 91px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
`;

const PeopleTypeInfo = styled.div``;

const PeopleTypeTitle = styled.h3``;

const PeopleTypeDescription = styled.p``;

const Count = styled.p``;

const PeopleCounter = styled.div``;

const ControlButton = styled.button`
    cursor: pointer;
`;

const PeopleCountController = styled.div`
    display: flex;
    width: 110px;
    justify-content: space-between;

    button {
        all: unset;
        border-radius: 50%;
        border: 1px solid #828282;
        color: #828282;
        display: flex;
        align-items: center;
    }
`;

const CountContent = styled.ul`
    margin: 32px 64px;
`;
