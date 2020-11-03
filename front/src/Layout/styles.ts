import styled from 'styled-components';

export const Container = styled.div`
    background: #D9DBD5;
    height: 100vh;
    width: 100vw;

    header {
      background: #119688;
      z-index: -1;
      height: 127px;

      @media only screen and (max-width: 1429px) {
        display: none;
      }
    }
`

export const Content = styled.div`
    /* display: flex; */
    /* justify-content: center; */

`

/* Colors: #119688 #D9DBD5 #EDEDED #DCF8C6 #ACACAC #9DE1FE */
