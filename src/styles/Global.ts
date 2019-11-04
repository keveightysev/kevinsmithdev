import { createGlobalStyle } from 'styled-components';

import { grey } from './constants';

const Global = createGlobalStyle`
    *, *:before, *:after {
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        font-family: 'Ubuntu', sans-serif;
    }

    body, #root {
        width: 100%;
        height: 100%;
        position: relative;
    }

    body {
        background: ${grey};
    }
`;

export default Global;
