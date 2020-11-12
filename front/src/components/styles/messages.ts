import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 78vh;

  @media only screen and (max-width: 1430px) {
    height: 88vh;
  }
  /* min-height: 87vh; */
  /* position: relative; */

   aside {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    margin-left: -20px;
    bottom: 0;

    span {
      margin-left: 5px;
    }
   }
`

export const MessageRight = styled.div`
  background: #FFFFFF;
  max-width: 438px;
  color:  #4D4D4D;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  position: relative;
  margin-bottom: 15px;

  &::after {
    content: "";
    left: -6px;
    top: 0px;
    z-index: 9999;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #FFF;
  }
`

export const MessageLeft = styled.div`
  margin-left: 50%;
  background: #DCF8C6;
  max-width: 438px;
  color:  #4D4D4D;
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  position: relative;
  margin-bottom: 15px;

  @media only screen and (max-width: 1430px) {
    margin-left: 130px;
  }

  &::after {
  content: "";
  right: -6px;
  top: 0px;
  z-index: 99999;
  position: absolute;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid #DCF8C6;
}
`
export const ContainerMessages = styled.div` 
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
`
