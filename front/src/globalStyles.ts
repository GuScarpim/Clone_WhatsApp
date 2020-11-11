import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  input, button, textarea { 
    font-family: Helvetica;
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: #FFF;
    -webkit-border-radius: 0px;
  }
  ::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }
  ::-webkit-scrollbar-thumb:vertical {
    -webkit-border-radius: 0px;
    background: #CCCCCC;
  }
  ::-webkit-scrollbar-thumb:vertical:active {
    -webkit-border-radius: 0px;
    background: #CCCCCC;
  }
  ::-webkit-scrollbar {
    width: 7px;
    height: 8px;
    background-color: #FFF
    -webkit-border-radius: 0px;
  }
  ::-webkit-scrollbar:hover {
    background-color: #FFF;
  }
  ::-webkit-scrollbar-thumb:vertical {
    -webkit-border-radius: 0px;
    background: #CCCCCC;
  }

  body {
    font-family: Helvetica;
    padding: 0px;
    margin: 0px;
    background: #D9DBD5;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }
`

export default GlobalStyle;