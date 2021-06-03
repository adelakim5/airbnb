import React from 'react';
import styled from 'styled-components';
import { Section, Title, GridContainer } from './main.style';

interface ThemeProps {
    theme: any;
}

const HouseType = ({ theme }: ThemeProps): React.ReactElement => {
    return (
        <Section>
            <Title>어디서나, 여행은 살아보는 거야!</Title>
            <HouseTypeContainer>
                {theme.map((item: any) => (
                    <Theme key={item.id}>
                        <ThemeImage src={item.thumbnail} alt={item.title} />
                        <ThemeTitle>{item.title}</ThemeTitle>
                    </Theme>
                ))}
            </HouseTypeContainer>
        </Section>
    );
};

export default HouseType;

const HouseTypeContainer = styled(GridContainer)`
    grid-gap: 2em;
`;

const Theme = styled.span``;

const ThemeImage = styled.img`
    width: 100%;
    border-radius: 8px;
`;

const ThemeTitle = styled.h3`
    margin-top: 16px;
`;
