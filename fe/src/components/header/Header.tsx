import React, { useState } from 'react';
import Account from './headerComponents/Account';
import styled from 'styled-components';
import AbbreviatedSearcher from '../searcher/AbbreviatedSearcher';

export interface HeaderType {
    isFull: boolean;
    setFullState: (param: boolean) => void;
}

const Header = ({ isFull, setFullState }: HeaderType): React.ReactElement => {
    return (
        <HeaderPage>
            <LeftHeader>
                <Logo href="/">LOGO</Logo>
            </LeftHeader>
            {isFull ? (
                <MidHeader>
                    <span>숙소</span>
                    <span>체험</span>
                    <span>온라인체험</span>
                </MidHeader>
            ) : (
                <MidHeader>
                    <AbbreviatedSearcher setFullState={setFullState} />
                </MidHeader>
            )}
            <RightHeader>
                <Account />
            </RightHeader>
        </HeaderPage>
    );
};

export default Header;

const HeaderPage = styled.section`
    position: abolute;
    top: 0;
    left: 0;
    display: flex;
    padding: 0 100px;
    justify-content: space-between;
    z-index: 2;
`;

const LeftHeader = styled.div`
    margin: 24px 0;
`;

const MidHeader = styled.div`
    margin: 23px 0;
    & span {
        margin: 0 12px;
    }
`;

const RightHeader = styled.div`
    margin-top: 27px;
`;

const Logo = styled.a`
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    text-decoration: none;
`;
