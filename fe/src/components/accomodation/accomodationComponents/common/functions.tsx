import styled from 'styled-components';

export const getCombinations = (array: string[]): string[] => {
    return array.reduce((acc: string[], curr: string, idx: number, self: string[]) => {
        if (idx < self.length - 1) acc.push(curr, 'divider');
        else acc.push(curr);
        return acc;
    }, []);
};

export const getTemplate = (el: string) => {
    if (el === 'divider') return <Divider />;
    return <span>{el}</span>;
};

function Divider() {
    return (
        <DividerBox>
            <Spot></Spot>
        </DividerBox>
    );
}

const DividerBox = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
`;

const Spot = styled.span`
    background: #000;
    width: 3px;
    height: 3px;
    border-radius: 50%;
`;
