import React from 'react';
import LanguageIcon from '@material-ui/icons/Language';
import Account from './headerComponents/Account';
import styled from 'styled-components';

const Header = (): React.ReactElement => {
    return (
        <HeaderPage>
            <LeftHeader>
                <Logo href="/">LOGO</Logo>
            </LeftHeader>
            <MidHeader>
                <span>숙소</span>
                <span>체험</span>
                <span>온라인체험</span>
            </MidHeader>
            <RightHeader>
                {/* <ToBeHost href="/">호스트되기</ToBeHost> */}
                {/* <Globe>
                    <LanguageIcon />
                </Globe> */}
                <Account />
            </RightHeader>
        </HeaderPage>
    );
};

export default Header;

const HeaderPage = styled.section`
    display: flex;
    padding: 0 100px;
    justify-content: space-between;
    margin-bottom: 51px;
`;

const LeftHeader = styled.div`
    margin-top: 44px;
`;

const MidHeader = styled.div`
    margin-top: 56px;
    & span {
        margin: 0 12px;
    }
`;

const RightHeader = styled.div`
    margin-top: 47px;
`;

const Logo = styled.a`
    font-style: normal;
    font-weight: 900;
    font-size: 32px;
    text-decoration: none;
`;

// const ToBeHost = styled.a``;

// const Globe = styled.div``;
