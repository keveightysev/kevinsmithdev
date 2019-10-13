import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *, *:before, *:after {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        max-width: 100%;
    }

    html {
        font-size: 62.5%;
    }

    html, body, #root {
        height: 100%
    }

    body {
        background: #1D0030;
    }

    #root {
        background:
            radial-gradient(
            farthest-side at bottom left,
            rgb(97, 0, 119, 0.75), 
            transparent
            ),
            radial-gradient(
            farthest-side at bottom right,
            rgb(158, 0, 126, 0.75),
            transparent
            );
    }
`;

export default Global;
