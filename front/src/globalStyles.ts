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
  background: #D9DBD5;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
    
 ::-webkit-scrollbar {
  width: 5px;
  background-color: rgba(0,0,0,0);
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
  width: 8px;
  background-color: rgba(0,0,0,0);
  -webkit-border-radius: 0px;
}
::-webkit-scrollbar:hover {
  background-color: #FFF;
}
::-webkit-scrollbar-thumb:vertical {
  -webkit-border-radius: 0px;
  background: #CCCCCC;
}
}
`;

export default GlobalStyle;