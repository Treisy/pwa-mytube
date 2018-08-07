import styled from 'react-emotion';
import {css} from 'emotion';
import {mediaQuery} from "../../../constants/breakpoints";

export const Container = styled('div')`
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right:15px;
    
    ${mediaQuery.medium(css`
        width: 750px
    `)};
    
    ${mediaQuery.large(css`
       width: 970px; 
    `)};
    
    ${mediaQuery.xLarge(css`
       width: 1170px; 
    `)};
`;


export const gridList = css`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex-wrap: wrap;
    
    ${mediaQuery.medium(css`
        flex-direction: row;
    `)};
`;
