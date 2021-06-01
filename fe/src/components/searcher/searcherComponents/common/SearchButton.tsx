import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

interface SearchHandlerType {
    searchHandler: (e: React.MouseEvent<HTMLElement>) => void;
}

const SearchButton = ({ searchHandler }: SearchHandlerType): React.ReactElement => {
    return (
        <SearchBtn onClick={searchHandler}>
            <SearchIcon />
        </SearchBtn>
    );
};

export default SearchButton;

const SearchBtn = styled.button`
    width: 40px;
    height: 40px;
    background: #e84c60;
    border-radius: 30px;
    color: #fff;
    margin-top: 18px;
    margin-right: 18px;
`;
