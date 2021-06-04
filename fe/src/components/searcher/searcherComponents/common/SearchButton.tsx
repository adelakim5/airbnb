import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styled from 'styled-components';

interface SearchButtonProps {
    isFullVersion: boolean;
}

interface SearchHandlerType extends SearchButtonProps {
    searchHandler: (e: React.MouseEvent<HTMLElement>) => void;
}

const SearchButton = ({ isFullVersion, searchHandler }: SearchHandlerType): React.ReactElement => {
    return (
        <SearchBtn onClick={searchHandler} isFullVersion={isFullVersion}>
            <SearchIcon />
        </SearchBtn>
    );
};

export default SearchButton;

const SearchBtn = styled.button<SearchButtonProps>`
    width: ${({ isFullVersion }) => (isFullVersion ? '40px' : '30px')};
    height: ${({ isFullVersion }) => (isFullVersion ? '40px' : '30px')};
    background: #e84c60;
    border-radius: 50%;
    color: #fff;
    margin-top: ${({ isFullVersion }) => (isFullVersion ? '18px' : '0')};
    margin-right: ${({ isFullVersion }) => (isFullVersion ? '18px' : '0')};
`;
