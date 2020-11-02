import styled from 'styled-components';

export const Container = styled.div`
  background: #FFF;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1435px;
  min-width: 645px;
  box-shadow: 0 1px 1px 0 rgba(#2E2E2E,.06),0 2px 5px 0 rgba(var(--shadow-rgb),.2);
  animation: _2rw5W .3s cubic-bezier(.1,.82,.25,1);
  
  @keyframes _2rw5W {
    0% {
      transform: scale(1.4);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`

export const Sidenav = styled.div`
  height: 100vh;
  width: 30%;
  max-width: 420px;
  min-width: 259px;
  position: relative;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #119688;
  overflow-x: hidden;

  @media only screen and (max-width: 840px) {
    width: 259px;
  }
`

export const Header = styled.div`
  background: #EDEDED;
  border-bottom: none;
  border-top: none;
  border-right: 2px solid #DADADA;
  border-left: none;
  position: absolute;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 59px;
  padding: 10px 16px;
`

export const Perfil = styled.div`
  height: 40px;
  width: 46px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 50px;
  background-color: #EDED;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Items = styled.div`
  width: 100%;
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

export const Main = styled.div`
  height: 100vh;
  max-width: 70.8%;
  min-width: 389px;
  position: relative;
  z-index: 1;
  top: -100vh;
  left: 29.3%;
  background-color: #9DE1FE;
  overflow-x: hidden;

  @media only screen and (max-width: 1399px) {
    left: 30%;
  }

  @media only screen and (max-width: 840px) {
    left: 258px;
  }
`

export const HeaderMain = styled.div`
  background: #EDEDED;
  position: absolute;
  top: 0;
  z-index: 999;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  width: 100%;
  height: 59px;
  padding: 10px 16px;
`

export const Number = styled.div`
    margin-left: 12px;
    font-size: 100%;
    position: relative;
    flex-grow: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

/* Colors: #119688 #D9DBD5 #EDEDED #DCF8C6 #ACACAC #9DE1FE */
