/* eslint-disable no-tabs */
import { createGlobalStyle } from 'styled-components';

const direction = window.localStorage.getItem('lang');

const GlobalStyle = createGlobalStyle`
   body,body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
    /* direction: ${direction === 'en' ? 'lrt' : 'rtl'}; */
    margin: 0;
	  padding: 0;
	  border: 0;
    box-sizing: border-box;
  }
  ol, ul {
	list-style: none;
}
body{
  ::-webkit-scrollbar {
    width: 8px;
    height: 12px;
    z-index: 1000;
  }
  ::-webkit-scrollbar-track {
    border-radius: 100vh;
    background: #ede6e6;
    z-index: 1000;
  }
  ::-webkit-scrollbar-thumb {
    background: #FF3C4B;
    border-radius: 100vh;
    z-index: 1000;
    border: 3px solid #f6f7ed;
  }
  ::-webkit-scrollbar-thumb:hover {
    background:#282828;
    z-index: 1000;
  }
}
`;

export default GlobalStyle;
