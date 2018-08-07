import {css} from "emotion";
import {mediaQuery} from "../../../constants/breakpoints";

export const card = css`
    width: 100%;

    ${mediaQuery.medium(css`
        width: 32.33%;
        margin-left: 5px;
        margin-right: 5px;
  `)};
`;

export const cardMedia = css`
    height: 0;
    padding-top: 56.25%;
`;