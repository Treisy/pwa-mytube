import {css} from 'emotion';
import {mediaQuery} from "../../../constants/breakpoints";

export const spaceBottom = css`
    margin-bottom: 15px;
    
    ${mediaQuery.medium(css`
        margin-bottom: 20px;
    `)};
`;