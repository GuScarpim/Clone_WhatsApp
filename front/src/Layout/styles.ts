import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    margin-bottom: 50px;

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
    display: flex;
    justify-content: center;
    margin-top: -90px;

    @media only screen and (max-width: 1430px) {
      flex: none;
      justify-content: none;
      margin-top: 0;
    }
`
