import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

const Account = (): React.ReactElement => {
    return (
        <Container>
            <MenuIcon />
            <AccountCircleIcon />
        </Container>
    );
};

export default Account;

const Container = styled.div`
    background: #fff;
    display: flex;
    align-items: center;
    padding: 4px 4px 4px 16px;
    border: 1px solid #bdbdbd;
    border-radius: 30px;
`;
