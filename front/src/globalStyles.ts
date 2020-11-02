import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  input, button, textarea { 
    font-family: Helvetica;
  }
/* Colors: #119688 #D9DBD5 #EDEDED #DCF8C6 #ACACAC #9DE1FE */
body {
  font-family: Helvetica;
  padding: 0px;
  margin: 0px;
  width: 100vw;
  height: 100vh;
    
 ::-webkit-scrollbar {
  width: 6px;
  background-color: rgba(0,0,0,0);
  -webkit-border-radius: 100px;
}
::-webkit-scrollbar:hover {
  background-color: rgba(0, 0, 0, 0.09);
}
::-webkit-scrollbar-thumb:vertical {
  -webkit-border-radius: 100px;
  background: rgba(0,0,0,0.5);
}
::-webkit-scrollbar-thumb:vertical:active {
  -webkit-border-radius: 100px;
  background: rgba(0,0,0,0.61);
}
::-webkit-scrollbar {
  width: 8px;
  background-color: rgba(0,0,0,0);
  -webkit-border-radius: 100px;
}
::-webkit-scrollbar:hover {
  background-color: rgba(0, 0, 0, 0.09);
}
::-webkit-scrollbar-thumb:vertical {
  -webkit-border-radius: 100px;
  background: rgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar-thumb:vertical:active {
  -webkit-border-radius: 100px;
  background: rgba(0,0,0,0.61);
}
}
`;

export default GlobalStyle;