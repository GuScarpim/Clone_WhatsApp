import styled from 'styled-components';

export const Container = styled.div`
  background: #FFF;
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1435px;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .06),0 2px 5px 0 rgba(0, 0, 0,.2);
  overflow: hidden;
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
  height: 95vh; //100vh
  width: 30%;
  max-width: 420px;
  min-width: 259px;
  position: relative;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #FFFFF915;
  overflow: hidden;

  @media only screen and (max-width: 1430px) {
   height: 100vh; //100vh
  }
  
  @media only screen and (max-width: 840px) {
    width: 259px;
  }
`

export const Header = styled.div`
  background: #EDEDED;
  border: 1px solid #DADADA;
  border-right: 2px solid #DADADA;
  box-shadow: 10px 1px 1px 10px rgba(#2E2E2E,.06),0 2px 5px 0 rgba(#000,.2);
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

export const ScrollView = styled.div`
  overflow: auto;
  height: 100%;

  ::-webkit-scrollbar {
    width: 4px !important;
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
    width: 5px;
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
`

export const Perfil = styled.div`
  height: 40px;
  width: 46px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 50px;
  background-color: #acacac4d;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 40px;
    width: 42px;
    border-radius: 50px;
  }
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
