import styled from 'styled-components';

export const Main = styled.div`
  height: 100vh;
  max-width: 70.8%;
  min-width: 389px;
  position: relative;
  z-index: 1;
  margin-top: -100vh;
  left: 29.3%;
  background-color: #000;
  overflow-x: hidden;

  @media only screen and (max-width: 1399px) {
    left: 30%;
  }

  @media only screen and (max-width: 840px) {
    left: 258px;
  }

  footer {
    bottom: 0;
    position: absolute;
    background: #EDEDED;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
    height: 59px;
    padding: 10px 16px;

    svg {
      width: 30px;
      height: 30px;
      cursor: pointer;

      &:nth-child(2) {
          margin-left: 10px;
      }

      &:nth-child(4) {
        margin-left: -10px;
      }
    }

    input {
      margin: 0px 15px 0px 15px;
      border-radius: 40px;
      border: none;
      height: 35px;
      padding-left: 20px;
      width: 100%;
    }
  }

  article {
    margin: 0px 0px 20px 30px;

    @media only screen and (max-width: 1430px) {
    margin: 0px 30px 20px 30px;
    }
  }
`

export const Items = styled.div`
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: flex-end;

  span { 
    height: 40px;
    width: 40px;
    cursor: pointer;
    border-radius: 100%;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: #99999947;
    }
  }
`

export const Header = styled.div`
  background: #EDEDED;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
  height: 59px;
  padding: 10px 16px;
`

export const Perfil = styled.div`
  height: 100%;
  width: 48px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 50px;
  background: #acacac4d;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Number = styled.div`
    margin-left: 12px;
    width: 100%;
    font-size: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

/* Colors: #119688 #D9DBD5 #EDEDED #DCF8C6 #ACACAC #9DE1FE */
